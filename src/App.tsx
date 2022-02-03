import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import DemonList from './pages/DemonList';

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/react-gh-page" element={<Home />}></Route>
					<Route path="/react-gh-page/demons" element={<DemonList />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
