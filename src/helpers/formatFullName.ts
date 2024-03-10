export const formatFullName = (fullName: string) => {
	const [_firstName, _lastName] = fullName.split(' ');
	const firstName = _firstName[0].toUpperCase() + _firstName.slice(1);
	const lastName = _lastName[0].toUpperCase() + _lastName.slice(1);

	return `${firstName} ${lastName}`;
};
