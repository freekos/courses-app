import { ComponentProps, ReactNode, forwardRef } from 'react';
import styles from './styles.module.scss';

interface ContainerProps extends ComponentProps<'div'> {
	left?: ReactNode;
	right?: ReactNode;
	isDark?: boolean;
	isContainer?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
	(
		{
			left,
			right,
			children,
			isDark,
			isContainer = true,
			...props
		}: ContainerProps,
		ref
	) => {
		return (
			<div className={styles.container__wrapper} data-dark={isDark}>
				<div
					className={styles.container}
					data-container={isContainer}
					ref={ref}
					{...props}
				>
					{(left || right) && (
						<aside className={styles.container__actions}>
							{left}
							{right}
						</aside>
					)}
					{children}
				</div>
			</div>
		);
	}
);
