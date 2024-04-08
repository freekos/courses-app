import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { userLoginThunk } from 'src/store';
import { useAppDispatch } from './useAppDispatch';

const loginSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email is required' })
		.email({ message: 'Invalid email format' }),
	password: z.string().min(1, { message: 'Password is required' }),
	// .min(8, { message: 'Min password length is 8' }),
});
export type LoginSchema = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
	const dispatch = useAppDispatch();

	const form = useForm<LoginSchema>({
		defaultValues: {
			email: '',
			password: '',
		},
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (data: LoginSchema) => {
		try {
			await dispatch(userLoginThunk(data));
			form.reset();
		} catch (err) {
			console.log(err);
			form.setError('root', {
				message: err?.response?.data?.result ?? 'Request error',
			});
			throw err;
		}
	};

	return { form, handleLogin };
};
