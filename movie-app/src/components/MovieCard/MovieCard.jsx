import './MovieCard.css';
import AddFavorite from '../AddFavorite/AddFavorite';

function MovieCard({ link, title, rating, favorite }) {

	return (
		<div className='movie-card'>
			<div className="movie-card__cover">
				<img className="movie-card__image" src={link} alt={title} />
			</div>
			<div className="movie-card__title">{title}</div>
			<div className="movie-card__stars">
				<img className="movie-card__star-icon" src='/star-icon.svg'></img>
				<div className="movie-card__rating">{rating}</div>
			</div>
			<AddFavorite favorite = {favorite}/>
		</div>
	);
}

export default MovieCard;