import { useAppDispatch, useAppSelector } from 'src/hooks';
import { userLogoutThunk } from 'src/store';
import { LogoutButton } from '../components';

export const LogoutButtonContainer = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	const dispatch = useAppDispatch();

	const handleLogout = async () => {
		try {
			await dispatch(userLogoutThunk());
		} catch (err) {
			console.log(err);
		}
	};

	if (!isAuth) return null;

	return <LogoutButton onLogout={handleLogout} />;
};
