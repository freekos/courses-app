import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { CourseInfo } from 'src/components/CourseInfo';
import { Courses } from 'src/components/Courses';
import { CreateCourse } from 'src/components/CreateCourse';
import { Login } from 'src/components/Login';
import { Registration } from 'src/components/Registration';
import { useSession } from 'src/hooks/useSession';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/courses' />} />
			<Route Component={UserProtect}>
				<Route path='/courses'>
					<Route index Component={Courses} />
					<Route path=':id' Component={CourseInfo} />
					<Route path='add' Component={CreateCourse} />
				</Route>
			</Route>
			<Route Component={AuthProtect}>
				<Route path='/login' Component={Login} />
				<Route path='/registration' Component={Registration} />
			</Route>
			<Route path='*' element={<Navigate to='/courses' />} />
		</Routes>
	);
};

const UserProtect = () => {
	const { isAuth } = useSession();
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

const AuthProtect = () => {
	const { isAuth } = useSession();
	return !isAuth ? <Outlet /> : <Navigate to='/courses' />;
};
