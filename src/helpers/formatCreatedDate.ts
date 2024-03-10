export const formatCreatedDate = (dateStr: string) => {
	const date = new Date(dateStr);
	return date.toString();
};
