export interface AddCourseArgs {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}

export interface UpdateCourseArgs extends AddCourseArgs {
	id: string;
}

export interface DeleteCourseArgs {
	id: string;
}

export interface GetCourseArgs {
	id: string;
}

export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
}
