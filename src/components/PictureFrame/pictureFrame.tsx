import React, { PropsWithChildren, ReactNode } from 'react';
import './pictureFrame.scss';

export default function PictureFrame(props: PropsWithChildren<ReactNode>) {
	return (
		<div style={{ width: '100%' }}>
			<div className="frames"	>
				<div className="frame">
					<div>{props.children}</div>
				</div>
			</div>
		</div>
	);
}