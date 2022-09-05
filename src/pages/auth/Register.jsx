import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(51, 4, 4, 0.5)),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	padding: 10px;
	width: 40%;
`;

const Title = styled.h1`
	text-align: center;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	flex: 1;
	margin: 10px 5px;
	padding: 10px;
	border-top: 1px solid teal;
	border-bottom: 1px solid teal;
	border-left: none;
	border-right: none;
	outline: none;
`;

const Agreement = styled.div`
	text-align: center;
	font-size: 12px;
	width: 70%;
	margin: 5px auto;
	line-height: 20px;
`;
const Button = styled.button`
	margin: auto;
	width: 50%;
	padding: 10px;
	border: none;
	background-color: teal;
	color: white;
	font-weight: 700;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="name" />
					<Input placeholder="last name" />
					<Input placeholder="username" />
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm password" />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
