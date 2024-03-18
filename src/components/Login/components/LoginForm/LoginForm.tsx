import { Controller, UseFormReturn } from 'react-hook-form';
import { AuthForm } from 'src/common/Auth';
import { Button } from 'src/common/Button';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';
import { LoginSchema } from 'src/hooks/useLoginForm';

interface LoginFormProps {
	form: UseFormReturn<LoginSchema>;
	onSubmit: (data: LoginSchema) => void;
}

export const LoginForm = ({ form, onSubmit }: LoginFormProps) => {
	return (
		<AuthForm
			disabled={form.formState.isSubmitting}
			onSubmit={form.handleSubmit(onSubmit)}
			fields={
				<>
					<Controller
						control={form.control}
						name='email'
						render={({ field }) => {
							const error = form.formState.errors.email?.message;
							return (
								<Field label='Email' error={error}>
									<Input placeholder='Input text' error={error} {...field} />
								</Field>
							);
						}}
					/>
					<Controller
						control={form.control}
						name='password'
						render={({ field }) => {
							const error = form.formState.errors.password?.message;
							return (
								<Field label='Password' error={error}>
									<Input placeholder='Input text' error={error} {...field} />
								</Field>
							);
						}}
					/>
				</>
			}
			button={
				<Button
					style={{ textTransform: 'uppercase', fontWeight: 700 }}
					type='submit'
					loading={form.formState.isSubmitting}
				>
					Login
				</Button>
			}
		/>
	);
};
