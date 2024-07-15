import FlvJs from "flv.js";
import { useEffect, useRef } from "react";
import VideoPlayerProps from "../types/VideoPlayerProps";

export default function VideoPlayer({ src }: VideoPlayerProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		let flvPlayer;

		if (FlvJs.isSupported()) {
			flvPlayer = FlvJs.createPlayer({
				type: "flv",
				url: src,
			});
			if (videoRef.current) {
				flvPlayer.attachMediaElement(videoRef.current);
				flvPlayer.load();
				flvPlayer.play();
			}
		}
	}, [src]);

	return (
		<>
			<video
				ref={videoRef}
				width={1200}
				height={500}
				controls
			/>
		</>
	);
}
