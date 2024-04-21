import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';
import CardButton from '../CardButton/CardButton';


function MovieList({items}) {
	if (items.length === 0) {
		return <p>Ничего не найдено</p>;
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};

	return (
		<div className='movie-list'>
			{items.sort(sortItems).map(el => (
				<CardButton key={el.id}>
					<MovieCard
						link={el.link}
						title={el.title}
						rating={el.rating}
						favorite={el.favorite}
					/>
				</CardButton>
			))}
		</div>
	); 
	
}

export default MovieList;

