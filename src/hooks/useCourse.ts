import { useState } from 'react';

import { Course, GetCourseArgs, coursesApi } from 'src/api';

export const useCourse = () => {
	const [course, setCourse] = useState<Course | null>(null);

	const handleGetCourse = async (args: GetCourseArgs) => {
		try {
			const res = await coursesApi.getCourse(args);
			setCourse({
				...res.result,
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	};

	return { course, handleGetCourse };
};
