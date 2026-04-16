import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

// Standard OpenGraph sizing config
export const alt = 'Webster Advisory';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#040d12', // Matches pitch variable
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="250" height="250" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="og-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0056B3" />
              <stop offset="100%" stopColor="#00BFFF" />
            </linearGradient>
          </defs>
          <path 
             d="M10 10 L35 90 L50 40 L65 90 L90 10" 
             stroke="url(#og-blue-grad)" 
             strokeWidth="8" 
             strokeLinejoin="miter" 
             strokeMiterlimit="2" 
             fill="none" 
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
