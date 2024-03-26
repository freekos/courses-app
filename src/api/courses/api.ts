import { instance } from '../instance';
import { Response } from '../types';
import {
	AddCourseArgs,
	Course,
	DeleteCourseArgs,
	GetCourseArgs,
} from './types';

export const coursesApi = {
	addCourse: (args: AddCourseArgs) => instance.post('/courses/add', args),
	deleteCourse: ({ id }: DeleteCourseArgs) => instance.delete(`/courses/${id}`),
	getCourses: (): Promise<Response<Course[]>> => instance.get('/courses/all'),
	getCourse: ({ id }: GetCourseArgs): Promise<Response<Course>> =>
		instance.get(`/courses/${id}`),
};
