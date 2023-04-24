import React, { PropsWithChildren, ReactNode } from 'react';
import './pictureFrame.scss';
import styled from 'styled-components';
import breakpoints from '../../config/breakpoints';

const FrameContainer = styled.div`
	width: 50%;

	@media(max-width: ${breakpoints.breakpointMd}) {
		width: 100%;
	}
`;

export default function PictureFrame(props: PropsWithChildren<ReactNode>) {
	return (
		<FrameContainer>
			<div className="frames"	>
				<div className="frame">{props.children}</div>
			</div>
		</FrameContainer>
	);
}