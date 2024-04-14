import './Header.css';
function Header() {

	return (
		<div className='header'>
			<div className="header__wrapper">
				<div>
					<img className="button-favorites" src="/icon-favorites.svg" alt="иконка добавления в избранное" />
				</div>
				<nav>
					<ul className="menu">
						<li className="menu__item menu__item_active"><a href="#">Поиск фильмов</a></li>
						<li className="menu__item"><a href="#">Мои фильмы</a></li>
						<li className="menu__item">
							<a className="header__login" href="#"><span>Войти</span><img src="/icon-login.svg" alt="иконка входа в личный кабинет"/> </a>
						</li>
					</ul>
				</nav>
				
			</div>
		</div>
	);
}

export default Header;