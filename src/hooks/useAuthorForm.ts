import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { authorAddThunk } from 'src/store';
import { useAppDispatch } from './useAppDispatch';

const authorSchema = z.object({
	name: z.string().min(1, { message: 'Author name is required' }),
});
export type AuthorSchema = z.infer<typeof authorSchema>;

export const useAuthorForm = () => {
	const form = useForm<AuthorSchema>({
		defaultValues: {
			name: '',
		},
		resolver: zodResolver(authorSchema),
	});
	const dispatch = useAppDispatch();

	const handleCreateAuthor = async (data: AuthorSchema) => {
		try {
			await dispatch(authorAddThunk(data));
			form.reset();
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return { form, handleCreateAuthor };
};
