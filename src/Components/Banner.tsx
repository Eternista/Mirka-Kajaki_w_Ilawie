import { useRef, useState } from 'react';
import Video from '../assets/VID-20240811-WA0000.mp4';

export const Banner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(!isVideoPlaying);
    if(!isVideoPlaying) videoRef.current?.play();
    if(isVideoPlaying) videoRef.current?.pause();
  }

  return (
    <section className="banner">
      <video
        ref={videoRef}
        loop
        src={Video}
        preload={'auto'}
        onClick={handleVideoPlay}
      ></video>

    <button className="play" onClick={handleVideoPlay}>
      {!isVideoPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM224 192l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32zm128 0l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32z"/></svg>
      )}
    </button>

    </section>
  );
};
