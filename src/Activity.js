const Activity = ({ handleAddToFavorite, activity }) => {
	return (
		<div className="activity-list">
			<div className="activity-preview" key={activity.key}>
				<h2>{activity.activity}</h2>
				<p>
					Type: {activity.type}, Price: {activity.price}
				</p>
			</div>
			<p>{activity.key}</p>
			<button
				onClick={() => {
					handleAddToFavorite(activity.key);
				}}
			>
				Add to favorites
			</button>
		</div>
	);
};

export default Activity;
