export const getDurationTime = (duration: number) => {
	const date = new Date();
	date.setMinutes(duration);
	const hours = date.getHours();
	const minutes = date.getMinutes();
	return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
