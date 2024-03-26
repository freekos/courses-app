export interface LoginArgs {
	email: string;
	password: string;
}

export interface RegisterArgs {
	name: string;
	email: string;
	password: string;
}

export interface Session {
	result: string;
	user: SessionUser;
}

export interface SessionUser {
	name: string;
	email: string;
}
