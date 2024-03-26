import { ReactNode } from 'react';

export interface ContainerProps<Args> {
	render: (args: Args) => ReactNode;
}
