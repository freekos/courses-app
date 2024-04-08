import { useAppSelector } from 'src/hooks';
import { Username } from '../components';

export const UsernameContainer = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	const username = useAppSelector((state) => state.user.name);

	if (!isAuth || !username) return null;

	return <Username name={username} />;
};
