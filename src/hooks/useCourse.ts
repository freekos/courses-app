import { useState } from 'react';

import { Course, GetCourseArgs, authorsApi, coursesApi } from 'src/api';

export const useCourse = () => {
	const [course, setCourse] = useState<Course | null>(null);

	const handleGetCourse = async (args: GetCourseArgs) => {
		try {
			const res = await coursesApi.getCourse(args);
			const authorsRes = await Promise.all(
				res.result.authors.map((id) => authorsApi.getAuthor({ id }))
			);
			setCourse({
				...res.result,
				authors: authorsRes.map((item) => item.result.name),
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return { course, handleGetCourse };
};
