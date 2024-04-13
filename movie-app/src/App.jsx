import './App.css';
import Button from './components/Button/Button';
import Headling from './components/Headling/Hedling';
import Paragraph from './components/Paragraph/Paragraph';


function App() {
	const paragraphs = [
		{ styleClass: 'paragraph_16', text: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.' },
		{ styleClass: 'paragraph_20', text: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan' }
	];
	return (
		<>
			<Headling />
			{paragraphs.map((paragraph, index) => (
				<Paragraph key={index} {...paragraph} />
			))}
			<Button/>
		</ >
	);
}


export default App;