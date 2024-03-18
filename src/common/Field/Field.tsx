import { ComponentProps } from 'react';

import styles from './styles.module.scss';

interface FieldProps extends ComponentProps<'label'> {
	label?: string;
	error?: string;
}

export const Field = ({ children, label, error, ...props }: FieldProps) => {
	return (
		<label className={styles.field} {...props}>
			<span className={styles.field__label}>{label}</span>
			{children}
			{!!error && <span className={styles.field__error}>{error}</span>}
		</label>
	);
};
