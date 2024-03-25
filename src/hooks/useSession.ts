import { useEffect, useState } from 'react';

import { Session } from 'src/api';

export const SESSION_KEY = 'session';
const FRAME_TIME = 60;

// TODO: remove logic
export const useSession = () => {
	const [session, setSession] = useState<Session | null>(() =>
		getLocalStorageData(SESSION_KEY)
	);
	const isAuth = !!session;

	useEffect(() => {
		const handleCheckSession = () => {
			const data = getLocalStorageData(SESSION_KEY);
			setSession((prev) => {
				if (prev?.result !== data?.result) return data;
				return prev;
			});
		};

		let timeout = setTimeout(function interval() {
			handleCheckSession();
			timeout = setTimeout(interval, FRAME_TIME);
		}, FRAME_TIME);

		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		if (!session) {
			localStorage.removeItem(SESSION_KEY);
		} else {
			const json = JSON.stringify(session);
			localStorage.setItem(SESSION_KEY, json);
		}
	}, [session]);

	return { session, isAuth, setSession };
};

function getLocalStorageData(key: string) {
	const json = localStorage.getItem(key);
	if (!json) return null;
	const data = JSON.parse(json);
	return data;
}
