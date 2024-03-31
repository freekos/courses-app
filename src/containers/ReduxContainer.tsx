import { ContainerProps } from 'src/types';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/hooks';

interface ReduxContainerProps<T = any> extends ContainerProps<{ data: T }> {
	selector: (state: RootState) => T;
}

export function ReduxContainer({ render, selector }: ReduxContainerProps) {
	const data = useAppSelector(selector);
	return <>{render({ data })}</>;
}
