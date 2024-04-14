import './App.css';
import Header from './assets/layouts/Header/Header';
import Headling from './components/Headling/Hedling';
import Paragraph from './components/Paragraph/Paragraph';
import Search from './assets/layouts/Search/Search';
import AppForm from './components/AppForm/AppForm';


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
			
		</div>
	);
}


export default App;