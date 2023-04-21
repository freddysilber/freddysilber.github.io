import React, { PropsWithChildren, ReactNode } from 'react';
import './pictureFrame.scss';

export default function PictureFrame(props: PropsWithChildren<ReactNode>) {
	return (
		<div className="frame-container">
			<div className="frames"	>
				<div className="frame">{props.children}</div>
			</div>
		</div>
	);
}