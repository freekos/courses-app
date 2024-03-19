import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const createCourseSchema = z.object({
	title: z.string().min(1, { message: 'Title is required' }),
	description: z.string().min(1, { message: 'Description is required' }),
	duration: z.string(),
	authors: z.array(z.string()).min(1, { message: 'Authors is required' }),
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

	const handleCreateCourse = async (data: CreateCourseSchema) => {
		try {
			const res = await fetch('');
		} catch (err) {
			console.log(err);
			form.setError('root', {
				message: err?.response?.data?.result || 'Request error',
			});
		}
	};

	return { form, handleCreateCourse };
};
