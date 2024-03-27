import { Author, Course } from 'src/api';

export const getCoursesWithAuthorNames = (
	courses: Course[],
	authors: Author[]
) => {
	return courses.map((course) => ({
		...course,
		authors: course.authors.map((authorId) => {
			const author = authors.find((author) => author.id === authorId);
			return author ? author.name : '';
		}),
	}));
};
