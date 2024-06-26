import { PropsWithChildren, ReactNode } from 'react';
import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form';

import { CourseSchema } from 'src/hooks';
import { getDurationTime } from 'src/helpers';
import { Button, Card, Field, Input } from 'src/common';
import { CourseFormSection } from './CourseFormSection';
import { CourseFormTitle } from './CourseFormTitle';
import styles from './styles.module.scss';

interface CreateCourseFormProps extends PropsWithChildren {
	form: UseFormReturn<CourseSchema>;
	onSubmit: SubmitHandler<CourseSchema>;
	actions?: ReactNode;
}

export const CreateCourseForm = ({
	form,
	onSubmit,
	actions,
	children,
}: CreateCourseFormProps) => {
	return (
		<form className={styles.course_form} onSubmit={form.handleSubmit(onSubmit)}>
			<Card.Outlined style={{ padding: '42px 80px' }}>
				<fieldset className={styles.course_form__fields}>
					<CourseFormSection>
						<CourseFormTitle>Main Info</CourseFormTitle>
						<Controller
							control={form.control}
							name='title'
							render={({ field }) => {
								const error = form.formState.errors.title?.message;
								return (
									<Field label='Title' error={error}>
										<Input placeholder='Input text' error={error} {...field} />
									</Field>
								);
							}}
						/>
						<Controller
							control={form.control}
							name='description'
							render={({ field }) => {
								const error = form.formState.errors.description?.message;
								return (
									<Field label='Description' error={error}>
										<Input
											as='textarea'
											placeholder='Input text'
											error={error}
											{...field}
										/>
									</Field>
								);
							}}
						/>
					</CourseFormSection>
					<CourseFormSection>
						<CourseFormTitle>Duration</CourseFormTitle>
						<Controller
							control={form.control}
							name='duration'
							render={({ field: { value, onChange, ...field } }) => {
								const error = form.formState.errors.duration?.message;
								return (
									<Field label='Duration' error={error}>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
												gap: '16px',
											}}
										>
											<Input
												style={{ width: '100%', maxWidth: '400px' }}
												placeholder='Input text'
												error={error}
												value={value}
												onChange={onChange}
												{...field}
											/>
											<p>
												<span style={{ fontWeight: 700 }}>
													{getDurationTime(+value)}
												</span>{' '}
												hours
											</p>
										</div>
									</Field>
								);
							}}
						/>
					</CourseFormSection>
					{children}
				</fieldset>
			</Card.Outlined>

			<div className={styles.course_form__actions}>
				{actions}
				<Button style={{ textTransform: 'uppercase' }} type='submit'>
					Create Course
				</Button>
			</div>
		</form>
	);
};
