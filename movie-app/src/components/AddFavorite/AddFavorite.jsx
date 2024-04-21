import './AddFavorite.css';

function AddFavorite({ favorite }) {
	if (!favorite) {
		return (
			<div className='add-favorite'>
				<img src="/icon-like.svg" alt="иконка лайк" />
				<div className='add-favorite_purpl'>В избранное</div>
			</div>
		); 
	}
	return (
		<div className='add-favorite'>
			<img src="/icon-bookmark-favorites.svg" alt="иконка уже в избранном" />
			<div className='add-favorite_green'>В избранном</div>
		</div>
	);
}

export default AddFavorite;