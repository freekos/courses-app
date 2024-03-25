import { Controller, UseFormReturn } from 'react-hook-form';

import { RegistrationSchema } from 'src/hooks/useRegistrationForm';
import { Button } from 'src/common/Button';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';
import { AuthForm } from 'src/common/Auth';

interface RegistrationFormProps {
	form: UseFormReturn<RegistrationSchema>;
	onSubmit: (data: RegistrationSchema) => void;
}

export const RegistrationForm = ({ form, onSubmit }: RegistrationFormProps) => {
	return (
		<AuthForm
			onSubmit={form.handleSubmit(onSubmit)}
			disabled={form.formState.isSubmitting}
			fields={
				<>
					<Controller
						control={form.control}
						name='name'
						render={({ field }) => {
							const error = form.formState.errors.name?.message;
							return (
								<Field label='Name*' error={error}>
									<Input placeholder='Input text' error={error} {...field} />
								</Field>
							);
						}}
					/>
					<Controller
						control={form.control}
						name='email'
						render={({ field }) => {
							const error = form.formState.errors.email?.message;
							return (
								<Field label='Email*' error={error}>
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
							const rootError = form.formState.errors.root?.message;
							return (
								<Field label='Password*' error={error || rootError}>
									<Input
										type='password'
										placeholder='Input text'
										error={error}
										{...field}
									/>
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
					Registration
				</Button>
			}
		/>
	);
};
