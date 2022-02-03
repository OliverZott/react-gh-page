import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import DemonList from './pages/DemonList';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/demons" element={<DemonList />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
