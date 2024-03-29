import { Session } from 'src/api';
import { useSession } from 'src/hooks/useSession';
import { ContainerProps } from 'src/types';

type SessionContainerProps = ContainerProps<{
	session: Session | null;
	onLogout: () => void;
}>;

// TODO: remove handleLogin and add real stage-manager logic
export const SessionContainer = ({ render }: SessionContainerProps) => {
	const { session, setSession } = useSession();

	const handleLogout = () => {
		setSession(null);
	};

	return <>{render({ session, onLogout: handleLogout })}</>;
};
