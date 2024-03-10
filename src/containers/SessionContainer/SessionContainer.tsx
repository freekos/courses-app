import { useState } from 'react';
import { ContainerComponent } from 'src/types';

type SessionContainerProps = ContainerComponent<{
	isAuth: boolean;
	onLogin: () => void;
	onLogout: () => void;
}>;

// TODO: remove handleLogin and add real stage-manager logic
export const SessionContainer = ({ render }: SessionContainerProps) => {
	const [session, setSession] = useState<Record<string, string> | null>(null);
	const isAuth = !!session;

	const handleLogin = () => {
		setSession({});
	};

	const handleLogout = () => {
		setSession(null);
	};

	return (
		<>{render({ isAuth, onLogin: handleLogin, onLogout: handleLogout })}</>
	);
};
