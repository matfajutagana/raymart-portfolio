import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

const getAccessToken = async (): Promise<string> => {
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN ?? '',
    }),
  })

  const data = (await response.json()) as { access_token: string }
  return data.access_token
}

export interface SpotifyTrack {
  isPlaying: boolean
  title: string
  artist: string
  albumImage: string
  songUrl: string
}

export async function GET(): Promise<NextResponse> {
  try {
    const accessToken = await getAccessToken()

    // Try currently playing first
    const nowPlayingRes = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )

    if (nowPlayingRes.status === 200) {
      const nowPlaying = (await nowPlayingRes.json()) as {
        is_playing: boolean
        item: {
          name: string
          artists: { name: string }[]
          album: { images: { url: string }[] }
          external_urls: { spotify: string }
        }
      }

      if (nowPlaying.item) {
        return NextResponse.json({
          isPlaying: nowPlaying.is_playing,
          title: nowPlaying.item.name,
          artist: nowPlaying.item.artists.map((a) => a.name).join(', '),
          albumImage: nowPlaying.item.album.images[0]?.url ?? '',
          songUrl: nowPlaying.item.external_urls.spotify,
        } satisfies SpotifyTrack)
      }
    }

    // Fallback to recently played
    const recentRes = await fetch(
      'https://api.spotify.com/v1/me/player/recently-played?limit=1',
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    )

    const recent = (await recentRes.json()) as {
      items: {
        track: {
          name: string
          artists: { name: string }[]
          album: { images: { url: string }[] }
          external_urls: { spotify: string }
        }
      }[]
    }

    const track = recent.items[0]?.track

    if (!track) {
      return NextResponse.json({
        isPlaying: false,
        title: '',
        artist: '',
        albumImage: '',
        songUrl: '',
      })
    }

    return NextResponse.json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map((a) => a.name).join(', '),
      albumImage: track.album.images[0]?.url ?? '',
      songUrl: track.external_urls.spotify,
    } satisfies SpotifyTrack)
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch Spotify data' },
      { status: 500 }
    )
  }
}
