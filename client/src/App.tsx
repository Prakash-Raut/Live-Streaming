import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
	return (
		<>
			<h1>Live Streaming App</h1>
			<VideoPlayer src="http://localhost:8000/live/test.flv" />
		</>
	);
}

export default App;
