import { ComponentProps, ReactNode, forwardRef } from 'react';
import styles from './styles.module.scss';

interface AuthFormProps extends ComponentProps<'form'> {
	fields: ReactNode;
	button: ReactNode;
	disabled?: boolean;
}

export const AuthForm = forwardRef<HTMLFormElement, AuthFormProps>(
	({ fields, button, disabled, ...props }, ref) => {
		return (
			<form className={styles.auth_form} ref={ref} {...props}>
				<fieldset className={styles.auth_form__fields} disabled={disabled}>
					{fields}
				</fieldset>
				{button}
			</form>
		);
	}
);

AuthForm.displayName = 'AuthForm';
