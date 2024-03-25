import { Link, useLocation } from 'react-router-dom';

import { Button } from 'src/common';
import { SessionContainer } from 'src/containers/SessionContainer';
import { HeaderWrapper, Logo, Username } from './components';
import styles from './styles.module.scss';

export const Header = () => {
	const location = useLocation();

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
						<SessionContainer
							render={({ session, onLogout }) =>
								session ? (
									<>
										<Username name={session.user.name} />
										<Button
											style={{ textTransform: 'uppercase' }}
											onClick={onLogout}
										>
											Logout
										</Button>
									</>
								) : location.pathname !== '/login' &&
								  location.pathname !== '/registration' ? (
									<Link to='/login'>
										<Button style={{ textTransform: 'uppercase' }}>
											Login
										</Button>
									</Link>
								) : null
							}
						/>
					</div>
				}
			/>
		</header>
	);
};
