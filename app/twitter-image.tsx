import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          color: 'white',
          fontFamily: 'Inter, system-ui, sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
            }}
          >
            AKL
          </div>
          <div>
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              AGBETSIASSI KODJO LABORE
            </h1>
            <p
              style={{
                fontSize: '24px',
                margin: '10px 0 0 0',
                color: '#94a3b8',
              }}
            >
              DevRel & Ecosystem Builder
            </p>
          </div>
        </div>
        
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <span style={{ fontSize: '20px' }}>🔗</span>
            <span style={{ fontSize: '18px' }}>Web3</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(59, 130, 246, 0.3)',
            }}
          >
            <span style={{ fontSize: '20px' }}>🌍</span>
            <span style={{ fontSize: '18px' }}>Blockchain</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 24px',
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '8px',
              border: '1px solid rgba(34, 197, 94, 0.3)',
            }}
          >
            <span style={{ fontSize: '20px' }}>🚀</span>
            <span style={{ fontSize: '18px' }}>DevRel</span>
          </div>
        </div>
        
        <p
          style={{
            fontSize: '20px',
            color: '#94a3b8',
            textAlign: 'center',
            marginTop: '40px',
            maxWidth: '800px',
            lineHeight: '1.5',
          }}
        >
          Expert en Web3, DevRel et construction d'écosystèmes blockchain en Afrique. 
          Fondateur de la Communauté Blockchain Afrique et Gouverneur ETHAfrique.
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
