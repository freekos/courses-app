import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from 'src/hooks';
import { ReduxContainer } from 'src/containers';
import { Button } from 'src/common';
import { HeaderWrapper, Logo, Username } from './components';
import styles from './styles.module.scss';
// import { userLogoutThunk } from 'src/store';

export const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		try {
			// TODO: remove comment
			// await dispatch(userLogoutThunk());
		} catch (err) {
			console.log(err);
		}
	};

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
						<ReduxContainer
							selector={(state) => state.user}
							render={({ data }) =>
								data.isAuth ? (
									<>
										{!!data.name && <Username name={data.name} />}
										<Button
											style={{ textTransform: 'uppercase' }}
											onClick={handleLogout}
										>
											Logout
										</Button>
									</>
								) : location.pathname !== '/login' &&
								  location.pathname !== '/registration' ? (
									<Button
										style={{ textTransform: 'uppercase' }}
										onClick={() => navigate('/login')}
									>
										Login
									</Button>
								) : null
							}
						/>
					</div>
				}
			/>
		</header>
	);
};
