import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { CourseInfo } from 'src/components/CourseInfo';
import { Courses } from 'src/components/Courses';
import { Login } from 'src/components/Login';
import { Registration } from 'src/components/Registration';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/courses' />} />
			<Route Component={UserProtect}>
				<Route path='/courses'>
					<Route index Component={Courses} />
					<Route path=':id' Component={CourseInfo} />
				</Route>
			</Route>
			<Route path='/login' Component={Login} />
			<Route path='/registration' Component={Registration} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

const UserProtect = () => {
	const isAuth = false;
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};
