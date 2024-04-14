import './AppForm.css';
import { useState } from 'react';
import Button from '../Button/Button';


function AppForm({ styleClass, placeholder, buttonText  }) {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const addSearchItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className={`app-form ${styleClass}`} onSubmit={addSearchItem}>
			<div className="field">
				<img src="/icon-search.svg" alt="иконка поиска" />
				<input type="text" placeholder={placeholder} name='tag' value={inputData} onChange={inputChange} />
			</div>
			<Button text={buttonText} onClick={() => console.log('нажата')} />
		</form>

	);

}

export default AppForm;