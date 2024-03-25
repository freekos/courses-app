import { Controller, UseFormReturn } from 'react-hook-form';

import { AuthorSchema } from 'src/hooks';
import { Button } from 'src/common/Button';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';
import styles from './styles.module.scss';

interface AuthorFormProps {
	form: UseFormReturn<AuthorSchema>;
	onSubmit: (data: AuthorSchema) => void;
}

export const AuthorForm = ({ form, onSubmit }: AuthorFormProps) => {
	const error = form.formState.errors.name?.message;
	return (
		<Field label='Author Name' error={error}>
			<div className={styles.author_form__field}>
				<Controller
					control={form.control}
					name='name'
					render={({ field }) => {
						const error = form.formState.errors.name?.message;
						return (
							<Input
								style={{ width: '400px' }}
								placeholder='Input text'
								error={error}
								{...field}
							/>
						);
					}}
				/>
				<Button
					style={{ textTransform: 'uppercase' }}
					loading={form.formState.isSubmitting}
					onClick={form.handleSubmit(onSubmit)}
				>
					Create Author
				</Button>
			</div>
		</Field>
	);
};
