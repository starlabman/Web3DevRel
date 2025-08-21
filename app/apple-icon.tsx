import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AKL'
export const contentType = 'image/png'
export const size = {
  width: 180,
  height: 180,
}

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24px',
        }}
      >
        <span
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          AKL
        </span>
      </div>
    ),
    {
      ...size,
    }
  )
}
