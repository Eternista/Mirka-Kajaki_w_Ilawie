import Video from '../assets/VID-20240811-WA0000.mp4';
import ReactPlayer from 'react-player/lazy';

export const Banner = () => {
  return (
    <section className="banner">
      <ReactPlayer url={Video} loop playing={true} />
    </section>
  );
};
