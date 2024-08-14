import { useState } from 'react';
import Video from '../assets/VID-20240811-WA0000.mp4';

export const Banner = () => {
  
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <section className="banner">
      <video
        loop
        muted={isLoading}
        autoPlay
        src={Video}
        preload={'auto'}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadedData={() => {
          setLoading(false);
        }}
      ></video>
    </section>
  );
};
