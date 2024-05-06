import './App.css';
import Header from './layouts/Header/Header';
import Headling from './components/Headling/Hedling';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './layouts/Search/Search';
import AppForm from './components/AppForm/AppForm';
import MovieList from './components/MovieList/MovieList';

const INITIAL_DATA = [
	{
		id: 1,
		link: '/cover-black-widow.png',
		title: 'Black Widow',
		rating: 324,
		favorite: 0
	},
	{
		id: 2,
		link: '/cover-shang-chi.png',
		title: 'Shang Chi',
		rating: 124,
		favorite: 0
	},
	{
		id: 3,
		link: '/cover-loki.png',
		title: 'Loki',
		rating: 235,
		favorite: 1
	},
	{
		id: 4,
		link: '/cover-how-i-met-your-mother.png',
		title: 'How I Met Your Mother',
		rating: 123,
		favorite: 0
	}
];



function App() {
	const paragraphs = [
		{ styleClass: 'paragraph_16', text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' },
		{ styleClass: 'paragraph_20', text: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan' }
	];

	return (
		<div className='app'>
			<Header/>
			<Search>
				<Headling />
				<Paragraph
					styleClass={paragraphs[0].styleClass}
					text={paragraphs[0].text}
				/>
				<AppForm 
					styleClass={'app-form_search'}
					placeholder={'Введите название'}
					buttonText={'Искать'}
				/>
			</Search>
			<MovieList items={INITIAL_DATA}/>

			
		</div>
	);
}


export default App;