import { Course } from 'src/api';

export interface CoursesState {
	courses: Course[];
	coursesWithAuthorsNames: Course[];
	isLoading: boolean;
	error: string | null;
	isAdding: boolean;
	isDeleting: boolean;
}
