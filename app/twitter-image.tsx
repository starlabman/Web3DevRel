import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AGBETSIASSI KODJO LABORE - DevRel & Ecosystem Builder'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #8b5cf6, #3b82f6, #06b6d4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AGBETSIASSI KODJO LABORE
          </h1>
          <p
            style={{
              fontSize: '32px',
              color: '#e5e7eb',
              margin: '0 0 40px 0',
              maxWidth: '800px',
            }}
          >
            DevRel & Ecosystem Builder | Web3 Expert
          </p>
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <span
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                color: '#8b5cf6',
                borderRadius: '8px',
                fontSize: '18px',
              }}
            >
              Blockchain
            </span>
            <span
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                color: '#3b82f6',
                borderRadius: '8px',
                fontSize: '18px',
              }}
            >
              Web3
            </span>
            <span
              style={{
                padding: '8px 16px',
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                color: '#06b6d4',
                borderRadius: '8px',
                fontSize: '18px',
              }}
            >
              DevRel
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
