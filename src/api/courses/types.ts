export interface AddCourseArgs {
	title: string;
	description: string;
	duration: number;
	authors: string[];
}

export interface DeleteCourseArgs {
	id: string;
}

export interface GetCourseArgs {
	id: string;
}

export interface Course {
	title: string;
	description: string;
	creationDate: string;
	duration: number;
	authors: string[];
	id: string;
}
