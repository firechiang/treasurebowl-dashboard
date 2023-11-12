import { useRoutes } from 'react-router-dom';
import { HomeRoutes } from "routes";

function App() {
	return (
		<div className="App">
			{useRoutes(HomeRoutes)}
		</div>
	);
}

export default App;
