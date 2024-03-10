import { ReactNode } from 'react';

export interface ContainerComponent<Args> {
	render: (args: Args) => ReactNode;
}
