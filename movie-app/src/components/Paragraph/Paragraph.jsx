import './Paragraph.css';
function Paragraph({ styleClass, text }) {

	return (
		<>
			<div className={ styleClass }>{ text }</div>
		</>
	);
}

export default Paragraph;