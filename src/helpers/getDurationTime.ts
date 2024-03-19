export const getDurationTime = (duration: number) => {
	const date = new Date(0);
	date.setUTCMinutes(duration);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};
