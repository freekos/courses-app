import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid';

import {
	CreateCourseSchema,
	useCreateCourseForm,
} from 'src/hooks/useCreateCourseForm';
import { AuthorSchema, useAuthorForm } from 'src/hooks/useAuthorForm';
import { useAuthors } from 'src/hooks/useAuthors';
import { Container } from 'src/common/Container';
import { Typography } from 'src/common/Typography';
import { Button } from 'src/common/Button';
import {
	CourseFormSection,
	CourseFormTitle,
	CreateCourseForm,
} from './components/CreateCourseForm';
import { AuthorForm } from './components/AuthorForm';
import {
	AuthorList,
	AuthorListTitle,
	EmptyAuthorList,
} from './components/AuthorList';
import { AuthorItem } from './components/AuthorItem';
import styles from './styles.module.scss';
import { Author } from 'src/api';

export const CreateCourse = () => {
	const { form: courseForm, handleCreateCourse: onCreateCourse } =
		useCreateCourseForm();
	const { form: authorForm, handleCreateAuthor: onCreateAuthor } =
		useAuthorForm();
	const { authors, handleGetAuthors, handleDeleteAuthor } = useAuthors();
	const navigate = useNavigate();

	const handleCreateAuthor = async (data: AuthorSchema) => {
		try {
			await onCreateAuthor(data);
			await handleGetAuthors();
		} catch (err) {
			console.log(err);
		}
	};

	const handleCreateCourse = async (data: CreateCourseSchema) => {
		try {
			await onCreateCourse(data);
			navigate('/courses');
		} catch (err) {
			console.log(err);
		}
	};

	const handleAddAuthor = (item: Author) => {
		courseForm.setValue('authors', [item, ...courseForm.getValues('authors')]);
	};

	const handleRemoveAuthor = (item: Author) => {
		courseForm.setValue(
			'authors',
			courseForm.getValues('authors').filter((author) => author.id !== item.id)
		);
	};

	useEffect(() => {
		handleGetAuthors();
	}, []);

	return (
		<Container isDark>
			<Typography.H3>Course Edit/Create Page</Typography.H3>
			<div className={styles.create_course__form}>
				<CreateCourseForm
					form={courseForm}
					onSubmit={handleCreateCourse}
					actions={
						<Button
							style={{ textTransform: 'uppercase' }}
							type='button'
							onClick={() => navigate(-1)}
						>
							Cancel
						</Button>
					}
				>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'flex-start',
						}}
					>
						<div
							style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}
						>
							<CourseFormSection>
								<CourseFormTitle>Authors</CourseFormTitle>
								<AuthorForm form={authorForm} onSubmit={handleCreateAuthor} />
							</CourseFormSection>
							<CourseFormSection>
								<AuthorListTitle>Authors List</AuthorListTitle>
								<AuthorList>
									{authors.map((item, index) => (
										<AuthorItem
											key={index}
											name={item.name}
											actions={
												<>
													<PlusIcon
														style={{ cursor: 'pointer' }}
														width={16}
														onClick={() => handleAddAuthor(item)}
													/>
													<TrashIcon
														style={{ cursor: 'pointer' }}
														width={16}
														onClick={() => handleDeleteAuthor({ id: item.id })}
													/>
												</>
											}
										/>
									))}
								</AuthorList>
							</CourseFormSection>
						</div>
						<CourseFormSection>
							<CourseFormTitle>Course Authors</CourseFormTitle>
							<Controller
								control={courseForm.control}
								name='authors'
								render={({ field: { value } }) => (
									<>
										{!value.length ? (
											<EmptyAuthorList>Author list is empty</EmptyAuthorList>
										) : (
											<AuthorList>
												{value.map((item, index) => (
													<AuthorItem
														key={index}
														name={item.name}
														actions={
															<MinusIcon
																style={{ cursor: 'pointer' }}
																width={16}
																onClick={() => handleRemoveAuthor(item)}
															/>
														}
													/>
												))}
											</AuthorList>
										)}
									</>
								)}
							/>
						</CourseFormSection>
					</div>
				</CreateCourseForm>
			</div>
		</Container>
	);
};
