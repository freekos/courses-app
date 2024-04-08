import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/hooks';

import { authorsGetThunk, userGetMeThunk } from 'src/store';
import { CourseInfo } from 'src/components/CourseInfo';
import { Courses } from 'src/components/Courses';
import { CreateCourse } from 'src/components/CreateCourse';
import { Login } from 'src/components/Login';
import { Registration } from 'src/components/Registration';

export const Routing = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/courses' />} />
			<Route Component={AuthProtect}>
				<Route path='/courses'>
					<Route index Component={Courses} />
					<Route path=':id' Component={CourseInfo} />
				</Route>
				<Route Component={UserProtect}></Route>
				<Route Component={AdminProtect}>
					<Route path='/courses'>
						<Route path='add' Component={CreateCourse} />
						<Route path='update/:id' Component={CreateCourse} />
					</Route>
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

// This route protect only for user role
const UserProtect = () => {
	const role = useAppSelector((state) => state.user.role);
	return role === 'user' ? <Outlet /> : <Navigate to='/courses' />;
};

// This route protect only for admin role
const AdminProtect = () => {
	const role = useAppSelector((state) => state.user.role);
	return role === 'admin' ? <Outlet /> : <Navigate to='/courses' />;
};

// This route protect for any authorized role
const AuthProtect = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!isAuth) return;
		dispatch(authorsGetThunk());
		dispatch(userGetMeThunk());
	}, [isAuth]);

	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

// This route protect for not authorized
const NotAuthProtect = () => {
	const isAuth = useAppSelector((state) => state.user.isAuth);
	return !isAuth ? <Outlet /> : <Navigate to='/courses' />;
};
