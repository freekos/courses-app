import { Link } from 'react-router-dom';

import { HeaderWrapper, Logo } from './components';
import { LogoutButtonContainer, UsernameContainer } from './containers';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderWrapper
				left={
					<Link to='/courses'>
						<Logo />
					</Link>
				}
				right={
					<div className={styles.header__right}>
						<UsernameContainer />
						<LogoutButtonContainer />
					</div>
				}
			/>
		</header>
	);
};
