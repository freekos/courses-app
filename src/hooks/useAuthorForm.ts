import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { authorsApi } from 'src/api';

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

	const handleCreateAuthor = async (data: AuthorSchema) => {
		try {
			await authorsApi.addAuthor(data);
			form.reset();
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return { form, handleCreateAuthor };
};
