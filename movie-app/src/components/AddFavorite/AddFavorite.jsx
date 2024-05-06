import './AddFavorite.css';

function AddFavorite({ favorite }) {
	if (!favorite) {
		return (
			<button className='add-favorite'>
				<img src="/icon-like.svg" alt="иконка лайк" />
				<div className='add-favorite_purpl'>В избранное</div>
			</button>
		);
	}
	return (
		<button className='add-favorite'>
			<img src="/icon-bookmark-favorites.svg" alt="иконка уже в избранном" />
			<div className='add-favorite_green'>В избранном</div>
		</button>
	);
}

export default AddFavorite;