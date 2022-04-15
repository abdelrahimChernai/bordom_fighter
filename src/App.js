import NavBar from './NavBar';
import Home from './Home';
import { useState, useEffect } from 'react';

function App() {
	const [ favoriteListKeys, setFavoriteListeKeys ] = useState([]);
	localStorage.setItem('favoritListKeys', []);
	if (!localStorage.getItem('favoritListKeys')) {
		localStorage.setItem('favoritListKeys', []);
	}

	const handleAddToFavorite = (key) => {
		setFavoriteListeKeys([ favoriteListKeys, key ]);
		localStorage.setItem('favoritListKeys', favoriteListKeys);
		console.log(favoriteListKeys);
	};

	useEffect(() => {
		setFavoriteListeKeys(localStorage.getItem('favoritListKeys'));
	}, []);

	return (
		<div className="App">
			<NavBar />
			<div className="content">
				<Home handleAddToFavorite={handleAddToFavorite} />
			</div>
		</div>
	);
}

export default App;
