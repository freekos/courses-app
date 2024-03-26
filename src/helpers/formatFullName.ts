export const formatFullName = (fullName: string): string => {
	return fullName
		.split(' ')
		.map((name) => (name ? name[0].toUpperCase() + name.slice(1) : ''))
		.join(' ')
		.trim();
};
