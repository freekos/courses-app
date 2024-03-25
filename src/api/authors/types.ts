export interface AddAuthorArgs {
	name: string;
}

export interface GetAuthorArgs {
	id: string;
}

export interface DeleteAuthorArgs {
	id: string;
}

export interface Author {
	id: string;
	name: string;
}
