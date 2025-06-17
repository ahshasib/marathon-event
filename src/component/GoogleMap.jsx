// GoogleMap.jsx
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const GoogleMap = () => {
  const center = { lat: 22.3569, lng: 91.7832 }; // Chattogram

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
      <div style={{ width: '100%', height: '400px' }}>
        <Map
          defaultCenter={center}
          defaultZoom={10}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
