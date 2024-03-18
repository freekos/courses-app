import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const registrationSchema = z.object({
	name: z.string({ required_error: 'Name is required' }),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Invalid email format' }),
	password: z
		.string({ required_error: 'Password is required' })
		.min(8, { message: 'Min password length is 8' }),
});
export type RegistrationSchema = z.infer<typeof registrationSchema>;

export const useRegistrationForm = () => {
	const form = useForm<RegistrationSchema>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
		resolver: zodResolver(registrationSchema),
	});

	const handleRegistration = async (data: RegistrationSchema) => {
		try {
			const res = await fetch('');
		} catch (err) {
			form.setError('root', { message: err });
			console.log(err);
		}
	};

	return { form, handleRegistration };
};
