import { Course } from 'src/api';

export interface CoursesState {
	courses: Course[];
	isLoading: boolean;
	error: string | null;
	isAdding: boolean;
	isDeleting: boolean;
}
