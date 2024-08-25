interface IProp {
  src?: string;
}
const VideoPlay: React.FC<IProp> = ({ src }) => {
  return (
    <video width="90%" height="60%" autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlay;
