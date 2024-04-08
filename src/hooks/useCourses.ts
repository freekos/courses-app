import { useState } from 'react';

import { Course, authorsApi, coursesApi } from 'src/api';

export const useCourses = () => {
	const [courses, setCourses] = useState<Course[]>([]);

	const handleGetCourses = async () => {
		try {
			const coursesRes = await coursesApi.getCourses();
			const authorsRes = await authorsApi.getAuthors();
			const newCourses = coursesRes.result.map((course) => ({
				...course,
				authors: course.authors.map((id) => {
					const findAuthor = authorsRes.result.find(
						(author) => author.id === id
					);
					return findAuthor?.name || '';
				}),
			}));
			console.log(coursesRes);
			setCourses(newCourses);
		} catch (err) {
			setCourses([]);
			throw err;
		}
	};

	return { courses, handleGetCourses };
};
