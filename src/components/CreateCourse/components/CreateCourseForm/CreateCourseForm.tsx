import { Controller, UseFormReturn } from 'react-hook-form';

import { CreateCourseSchema } from 'src/hooks/useCreateCourseForm';
import { Field } from 'src/common/Field';
import { Input } from 'src/common/Input';
import { Button } from 'src/common/Button';
import { AuthorItem } from '../AuthorItem';
import { Card } from 'src/common/Card';
import { getDurationTime } from 'src/helpers';
import styles from './styles.module.scss';

interface CreateCourseFormProps {
	form: UseFormReturn<CreateCourseSchema>;
	onSubmit: (data: CreateCourseSchema) => void;
}

export const CreateCourseForm = ({ form, onSubmit }: CreateCourseFormProps) => {
	return (
		<form className='' onSubmit={form.handleSubmit(onSubmit)}>
			<Card.Outlined style={{ padding: '42px 80px' }}>
				<fieldset className={styles.course_form}>
					<p className=''>Main Info</p>
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
									<Input placeholder='Input text' error={error} {...field} />
								</Field>
							);
						}}
					/>
					<p className=''>Duration</p>
					<div className=''>
						<Controller
							control={form.control}
							name='duration'
							render={({ field: { onChange, ...field } }) => {
								const error = form.formState.errors.description?.message;
								return (
									<Field label='Duration' error={error}>
										<Input
											placeholder='Input text'
											error={error}
											onChange={onChange}
											{...field}
										/>
									</Field>
								);
							}}
						/>
						<Controller
							control={form.control}
							name='duration'
							render={({ field: { value } }) => {
								return <p>{getDurationTime(+value)} hours</p>;
							}}
						/>
					</div>
					<div className=''>
						<div></div>
						<div>
							<p></p>
							<Controller
								control={form.control}
								name='authors'
								render={({ field: { value } }) => (
									<>
										{value.map((author, index) => (
											<AuthorItem
												key={index}
												name={author}
												onAdd={console.log}
												onDelete={console.log}
											/>
										))}
									</>
								)}
							/>
						</div>
					</div>
				</fieldset>
			</Card.Outlined>

			<div className={styles.course_form__actions}>
				<Button style={{ textTransform: 'uppercase' }}>Cancel</Button>
				<Button style={{ textTransform: 'uppercase' }} type='submit'>
					Create Course
				</Button>
			</div>
		</form>
	);
};
