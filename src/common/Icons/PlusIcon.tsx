import { SVGProps } from 'react';

export const PlusIcon = ({
	fill = '#333E48',
	...props
}: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width='9'
			height='9'
			viewBox='0 0 9 9'
			xmlns='http://www.w3.org/2000/svg'
			fill={fill}
			{...props}
		>
			<path
				d='M1.25 4.5H7.75M4.5 7.75V1.25'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};
