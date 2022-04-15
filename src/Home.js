import { useState, useEffect } from 'react';
import Activity from './Activity';

const Home = ({handleAddToFavorite}) => {
	const [ activity, setActivity ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ activityTypeFilter, setActivityTypeFilter ] = useState('none');
	const [ activityMinPriceFilter, setActivityMinPriceFilter ] = useState(0);
	const [ activityMaxPriceFilter, setActivityMaxPriceFilter ] = useState(1);

	const handleRandomActivity = () => {
		setIsLoading(true);
		setActivity(null);
		if (activityTypeFilter !== 'null') {

			fetch(
				'http://www.boredapi.com/api/activity?type=' + activityTypeFilter
			).then((res) => {
				return res.json().then((activity) => {
					setActivity(activity);
					setIsLoading(false);
				});
			});
		} else {
			fetch(
				'http://www.boredapi.com/api/activity?minprice=' +
					parseFloat(activityMinPriceFilter) +
					'&maxprice=' +
					parseFloat(activityMaxPriceFilter)
			).then((res) => {
				return res.json().then((activity) => {
					setActivity(activity);
					setIsLoading(false);
				});
			});
		}
	};

	useEffect(() => {
		fetch('http://www.boredapi.com/api/activity/').then((res) => {
			return res.json().then((activity) => {
				setActivity(activity);
				setIsLoading(false);
			});
		});
	}, []);

	return (
		<div className="home-container">
			<h1>Welcom to Bordom Fighter</h1>
			<p>Here we will help you find some interesting activities</p>
			{isLoading && <div className="loading">Loading activity...</div>}
			{activity && <Activity handleAddToFavorite={handleAddToFavorite} activity={activity} />}
			<form className="form-container">
				<select
					value={activityTypeFilter}
					onChange={(event) => {
						setActivityTypeFilter(event.target.value);
					}}
				>
					<option value="none">Any Type</option>
					<option value="education">Education</option>
					<option value="recreational">Recreational</option>
					<option value="social">Social</option>
					<option value="diy">DIY</option>
					<option value="charity">Charity</option>
					<option value="cooking">Cooking</option>
					<option value="relaxation">Relaxation</option>
					<option value="music">Music</option>
					<option value="busywork">Busywork</option>
				</select>
				<input
					type="text"
					placeholder="Min Price"
					value={activityMinPriceFilter}
					onChange={(event) => {
						setActivityMinPriceFilter(event.target.value);
					}}
				/>
				<input
					type="text"
					placeholder="Max Price"
					value={activityMaxPriceFilter}
					onChange={(event) => {
						setActivityMaxPriceFilter(event.target.value);
					}}
				/>
				<button onClick={() => handleRandomActivity()}>New Activity</button>
			</form>
		</div>
	);
};

export default Home;
