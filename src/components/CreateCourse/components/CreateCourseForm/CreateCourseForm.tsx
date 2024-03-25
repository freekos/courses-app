import { PropsWithChildren, ReactNode } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import { CreateCourseSchema } from 'src/hooks/useCreateCourseForm';
import { getDurationTime } from 'src/helpers';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';
import { Button } from 'src/common/Button';
import { Card } from 'src/common/Card';
import { CourseFormTitle } from './CourseFormTitle';
import { CourseFormSection } from './CourseFormSection';
import styles from './styles.module.scss';

interface CreateCourseFormProps extends PropsWithChildren {
	form: UseFormReturn<CreateCourseSchema>;
	onSubmit: (data: CreateCourseSchema) => void;
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
												style={{ width: '400px' }}
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
