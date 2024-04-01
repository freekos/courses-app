import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form';

import {
	AuthorSchema,
	CourseSchema,
	useAppDispatch,
	useAuthorForm,
} from 'src/hooks';
import {
	AuthorForm,
	AuthorListTitle,
	CourseFormSection,
	CourseFormTitle,
	CreateCourseForm,
} from '../components';
import { Button } from 'src/common';
import { useNavigate } from 'react-router-dom';
import { authorsGetThunk } from 'src/store';
import { AuthorListContainer } from './AuthorListContainer';
import { CourseAuthorListContainer } from './CourseAuthorListContainer';
import styles from '../styles.module.scss';

interface CreateCourseContainerProps {
	courseForm: UseFormReturn<CourseSchema>;
	onSubmit: SubmitHandler<CourseSchema>;
}

export const CreateCourseContainer = ({
	courseForm,
	onSubmit,
}: CreateCourseContainerProps) => {
	const { form: authorForm, handleCreateAuthor: onCreateAuthor } =
		useAuthorForm();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleCreateAuthor = async (data: AuthorSchema) => {
		try {
			await onCreateAuthor(data);
			await dispatch(authorsGetThunk());
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<CreateCourseForm
			form={courseForm}
			onSubmit={onSubmit}
			actions={
				<Button
					style={{ textTransform: 'uppercase' }}
					type='button'
					onClick={() => navigate('../')}
				>
					Cancel
				</Button>
			}
		>
			<div className={styles.create_course__sections}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
					<CourseFormSection>
						<CourseFormTitle>Authors</CourseFormTitle>
						<AuthorForm form={authorForm} onSubmit={handleCreateAuthor} />
					</CourseFormSection>
					<CourseFormSection>
						<AuthorListTitle>Authors List</AuthorListTitle>
						<AuthorListContainer courseForm={courseForm} />
					</CourseFormSection>
				</div>
				<CourseFormSection>
					<CourseFormTitle>Course Authors</CourseFormTitle>
					<Controller
						control={courseForm.control}
						name='authors'
						render={({ field: { value } }) => (
							<CourseAuthorListContainer
								authors={value}
								courseForm={courseForm}
							/>
						)}
					/>
				</CourseFormSection>
			</div>
		</CreateCourseForm>
	);
};
