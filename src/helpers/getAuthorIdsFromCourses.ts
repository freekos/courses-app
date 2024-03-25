import { Course } from 'src/api';

export const getAuthorIdsFromCourses = (courses: Course[]): string[] => {
	return courses.reduce(
		(authorIds, course) => [...authorIds, ...course.authors],
		[]
	);
};
