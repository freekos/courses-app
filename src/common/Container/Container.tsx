import { ComponentProps, ReactNode, forwardRef } from 'react';
import styles from './styles.module.scss';

interface ContainerProps extends ComponentProps<'div'> {
	left?: ReactNode;
	right?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ left, right, children, ...props }: ContainerProps, ref) => {
		return (
			<div className={styles.container} ref={ref} {...props}>
				{(left || right) && (
					<aside className={styles.container__actions}>
						{left}
						{right}
					</aside>
				)}
				{children}
			</div>
		);
	}
);
