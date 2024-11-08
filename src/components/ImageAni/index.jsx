/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import cloudinary from "cloudinary-video-player/all";
import "cloudinary-video-player/cld-video-player.min.css";

export default function VideoPlayer({
  id,
  publicId,
  playerConfig,
  sourceConfig,
  width,
  height,
  ...props
}) {
  const cloudinaryRef = useRef();
  const playerRef = useRef();

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = cloudinary;

    const player = cloudinaryRef.current.videoPlayer(playerRef.current, {
      cloud_name: "dyjeugvrl",
      secure: true,
      controls: false,
      autoplayMode: "always",
      loop: true,
      ...playerConfig,
    });
    player.source(publicId, sourceConfig);
  }, []);

  return (
    <div>
      <video
        ref={playerRef}
        id={id}
        className="cld-video-player cld-fluid"
        {...props}
        width={width}
        height={height}
      ></video>
    </div>
  );
}
