import React from 'react';
import ContentLoader from 'react-content-loader';

export const MainContentLoader = props => (
  <div style={{ width: '100%' }}>
    <ContentLoader
      speed={2}
      width={2480}
      viewBox="0 0 1240 420"
      backgroundColor="#d1d1d1"
      foregroundColor="#89aa36"
      {...props}
    >
      <rect x="315" y="70" rx="8" ry="8" width="130" height="120" />
      <rect x="470" y="70" rx="8" ry="8" width="130" height="120" />
      <rect x="1" y="70" rx="8" ry="8" width="130" height="120" />
      <rect x="160" y="70" rx="8" ry="8" width="130" height="120" />
      <rect x="1" y="1" rx="8" ry="8" width="110" height="30" />
      <rect x="1" y="220" rx="8" ry="8" width="110" height="30" />
      <rect x="1" y="285" rx="8" ry="8" width="130" height="120" />
      <rect x="160" y="285" rx="8" ry="8" width="130" height="120" />
      <rect x="314" y="285" rx="8" ry="8" width="130" height="120" />
      <rect x="470" y="285" rx="8" ry="8" width="130" height="120" />
    </ContentLoader>
  </div>
);

export const MainContentLoaderTablet = props => (
  <div style={{ width: '100%' }}>
    <ContentLoader
      speed={2}
      width={1536}
      viewBox="0 0 768 450"
      backgroundColor="#d1d1d1"
      foregroundColor="#89aa36"
      {...props}
    >
      <rect x="1" y="70" rx="8" ry="8" width="145" height="145" />
      <rect x="200" y="70" rx="8" ry="8" width="145" height="145" />
      <rect x="1" y="1" rx="8" ry="8" width="120" height="40" />
      <rect x="1" y="240" rx="8" ry="8" width="120" height="40" />
      <rect x="1" y="305" rx="8" ry="8" width="145" height="145" />
      <rect x="200" y="305" rx="8" ry="8" width="145" height="145" />
    </ContentLoader>
  </div>
);

export const MainContentLoaderMobile = props => (
  <div style={{ width: '100%' }}>
    <ContentLoader
      speed={2}
      width={768}
      viewBox="0 0 375 430"
      backgroundColor="#d1d1d1"
      foregroundColor="#89aa36"
      {...props}
    >
      <rect x="1" y="50" rx="8" ry="8" width="145" height="145" />
      <rect x="1" y="1" rx="8" ry="8" width="110" height="30" />
      <rect x="1" y="230" rx="8" ry="8" width="110" height="30" />
      <rect x="1" y="285" rx="8" ry="8" width="145" height="145" />
    </ContentLoader>
  </div>
);
