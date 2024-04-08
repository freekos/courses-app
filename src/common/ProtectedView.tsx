import { PropsWithChildren, ReactNode } from 'react';

import { UserRole } from 'src/api';
import { useAppSelector } from 'src/hooks';

interface ProtectedViewProps extends PropsWithChildren {
	role?: UserRole;
	fallback?: ReactNode;
}

export const ProtectedView = ({
	children,
	fallback = null,
	...props
}: ProtectedViewProps) => {
	const role = useAppSelector((state) => state.user.role);

	if (!!props.role && props.role !== role) {
		return <>{fallback}</>;
	}

	return <>{children}</>;
};
