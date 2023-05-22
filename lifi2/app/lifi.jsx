'use client'

import dynamic from 'next/dynamic';


const LoadingIndicator = () => {
    return (
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p>Loading...</p>
      </div>
    );
  };

export const LiFiWidgetNext = dynamic(
    () => import('./widget').then((module) => module.Widget),
    {
        ssr: false,
        loading: () => <LoadingIndicator />,
    },
);