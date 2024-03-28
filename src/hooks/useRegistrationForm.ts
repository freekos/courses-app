import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

// import { userRegisterThunk } from 'src/store';
import { useAppDispatch } from './useAppDispatch';

const registrationSchema = z.object({
	name: z.string().min(1, { message: 'Name is required' }),
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Invalid email format' }),
	password: z.string().min(1, { message: 'Password is required' }),
	// .min(8, { message: 'Min password length is 8' }),
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
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleRegistration = async (data: RegistrationSchema) => {
		try {
			// TODO: remove comment
			// await dispatch(userRegisterThunk(data));
			form.reset();
			navigate('/login');
		} catch (err) {
			console.log(err);
			form.setError('root', {
				message: err?.response?.data?.result ?? 'Request error',
			});
			throw err;
		}
	};

	return { form, handleRegistration };
};
