import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { coursesGetThunk } from 'src/store';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { Button, Container, ProtectedView } from 'src/common';
import { SearchBar } from './components';
import { CoursesListContainer } from './containers';

export const Courses = () => {
	const courses = useAppSelector((state) => state.courses.courses);
	const [search, setSearch] = useState<string>('');
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(coursesGetThunk());
	}, []);

	return (
		<>
			<Container
				isDark
				left={courses.length ? <SearchBar onSearch={setSearch} /> : null}
				right={
					courses.length ? (
						<ProtectedView
							role='admin'
							// fallback={
							// 	<p style={{ textAlign: 'center' }}>
							// 		You have not access to create new course!
							// 	</p>
							// }
						>
							<div
								style={{
									display: 'flex',
									justifyContent: 'flex-end',
									width: '100%',
								}}
							>
								<Button
									style={{ textTransform: 'uppercase' }}
									onClick={() => navigate('/courses/add')}
								>
									Add new
								</Button>
							</div>
						</ProtectedView>
					) : null
				}
			>
				<CoursesListContainer courses={courses} search={search} />
			</Container>
		</>
	);
};
