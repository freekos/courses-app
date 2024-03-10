import { SessionContainer } from 'src/containers/SessionContainer';
import { Button } from 'src/common/Button';
import { HeaderWrapper } from './components/HeaderWrapper';
import { Username } from './components/Username';
import { Logo } from './components/Logo';
import styles from './styles.module.scss';

export const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderWrapper
				left={
					<a href='#'>
						<Logo />
					</a>
				}
				right={
					<div className={styles.header__right}>
						<SessionContainer
							render={({ isAuth, onLogin, onLogout }) =>
								isAuth ? (
									<>
										<Username name='Harry Poter' />
										<Button
											style={{ textTransform: 'uppercase' }}
											onClick={onLogout}
										>
											Logout
										</Button>
									</>
								) : (
									<>
										<Button
											style={{ textTransform: 'uppercase' }}
											onClick={onLogin}
										>
											Login
										</Button>
									</>
								)
							}
						/>
					</div>
				}
			/>
		</header>
	);
};
