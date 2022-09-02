import React from "react";
import styled from "styled-components";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	background-color: coral;
`;
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
`;
const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
`;

const Image = styled.img`
	height: 80%;
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;

const Desc = styled.p`
	margin: 50px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	return (
		<Container>
			<Arrow>
				<ArrowLeftOutlinedIcon />
				<ArrowRightOutlinedIcon />
				<Wrapper>
					<Slide>
						<ImgContainer>
							<Image></Image>
						</ImgContainer>
					</Slide>
				</Wrapper>
			</Arrow>
		</Container>
	);
};

export default Slider;
