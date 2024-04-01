import { Button } from 'src/common';

interface LogoutButtonProps {
	onLogout: () => void;
}

export const LogoutButton = ({ onLogout }: LogoutButtonProps) => {
	return (
		<Button style={{ textTransform: 'uppercase' }} onClick={onLogout}>
			Logout
		</Button>
	);
};
