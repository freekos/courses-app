import { Link } from 'react-router-dom';

import { userLogoutThunk } from 'src/store';
import { useAppDispatch } from 'src/hooks';
import { ReduxContainer } from 'src/containers';
import { Button } from 'src/common';
import { HeaderWrapper, Logo, Username } from './components';
import styles from './styles.module.scss';

export const Header = () => {
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		try {
			await dispatch(userLogoutThunk());
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
								data.isAuth && (
									<>
										{!!data.name && <Username name={data.name} />}
										<Button
											style={{ textTransform: 'uppercase' }}
											onClick={handleLogout}
										>
											Logout
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
