// GoogleMap.jsx
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

const GoogleMap = ({ lat, lng }) => {
    const center = { lat, lng }; 

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
