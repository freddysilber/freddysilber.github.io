import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import breakpoints from '../../config/breakpoints';
import './pictureFrame.scss';

const FrameContainer = styled.div`
	@media(max-width: ${breakpoints.breakpointMd}) {
		width: 100%;
	}
`;

export default function PictureFrame(props: PropsWithChildren) {
	return (
		<FrameContainer>
			<div className="frames"	>
				<div className="frame">{props.children}</div>
			</div>
		</FrameContainer>
	);
}