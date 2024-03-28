import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

// import { authorsGetThunk } from 'src/store';
import { useAppDispatch, useAppSelector } from 'src/hooks';

import { CourseInfo } from 'src/components/CourseInfo';
import { Courses } from 'src/components/Courses';
import { CreateCourse } from 'src/components/CreateCourse';
import { Login } from 'src/components/Login';
import { Registration } from 'src/components/Registration';

export const Routing = () => {
	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(authorsGetThunk());
	// }, []);

	return (
		<Routes>
			<Route path='/' element={<Navigate to='/courses' />} />
			<Route Component={AuthProtect}>
				<Route path='/courses'>
					<Route index Component={Courses} />
					<Route path=':id' Component={CourseInfo} />
					<Route path='add' Component={CreateCourse} />
				</Route>
			</Route>
			<Route Component={NotAuthProtect}>
				<Route path='/login' Component={Login} />
				<Route path='/registration' Component={Registration} />
			</Route>
			<Route path='*' element={<Navigate to='/courses' />} />
		</Routes>
	);
};

const UserProtect = () => {
	const role = useAppSelector((state) => state.user.role);
	return role === 'user' ? <Outlet /> : <Navigate to='/courses' />;
};

const AdminProtect = () => {
	const role = useAppSelector((state) => state.user.role);
	return role === 'admin' ? <Outlet /> : <Navigate to='/courses' />;
};

const AuthProtect = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

const NotAuthProtect = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	return !isAuth ? <Outlet /> : <Navigate to='/courses' />;
};
