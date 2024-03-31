import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAppDispatch } from './useAppDispatch';
import { courseAddThunk } from 'src/store';

const createCourseSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	description: z.string().min(1, { message: 'Description is required' }),
	duration: z.string(),
	authors: z
		.array(
			z.object({
				id: z.string(),
				name: z.string(),
			})
		)
		.min(1, { message: 'Authors is required' }),
});
export type CreateCourseSchema = z.infer<typeof createCourseSchema>;

export const useCreateCourseForm = () => {
	const form = useForm<CreateCourseSchema>({
		defaultValues: {
			title: '',
			description: '',
			duration: String(0),
			authors: [],
		},
		resolver: zodResolver(createCourseSchema),
	});
	const dispatch = useAppDispatch();

	const handleCreateCourse = async (data: CreateCourseSchema) => {
		try {
			await dispatch(
				courseAddThunk({
					...data,
					authors: data.authors.map((item) => item.id),
					duration: +data.duration,
				})
			);
		} catch (err) {
			console.log(err);
			form.setError('root', {
				message: err?.response?.data?.result || 'Request error',
			});
			throw err;
		}
	};

	return { form, handleCreateCourse };
};
