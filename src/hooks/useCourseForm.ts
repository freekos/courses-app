import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAppDispatch } from './useAppDispatch';
import { courseAddThunk, courseUpdateThunk } from 'src/store';

const courseSchema = z.object({
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
export type CourseSchema = z.infer<typeof courseSchema>;

export const useCourseForm = () => {
	const form = useForm<CourseSchema>({
		defaultValues: {
			title: '',
			description: '',
			duration: String(0),
			authors: [],
		},
		resolver: zodResolver(courseSchema),
	});
	const dispatch = useAppDispatch();

	const handleCreateCourse = (data: CourseSchema) => {
		return dispatch(
			courseAddThunk({
				...data,
				authors: data.authors.map((item) => item.id),
				duration: +data.duration,
			})
		);
	};

	const handleUpdateCourse = (data: { id: string } & CourseSchema) => {
		return dispatch(
			courseUpdateThunk({
				...data,
				authors: data.authors.map((item) => item.id),
				duration: +data.duration,
			})
		);
	};

	return { form, handleCreateCourse, handleUpdateCourse };
};
