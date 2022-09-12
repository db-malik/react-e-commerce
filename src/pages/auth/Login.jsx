import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
	font-size: 1rem;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(51, 4, 4, 0.5)),
		url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
	${mobile({ width: "75%" })}
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

const Link = styled.a`
	text-align: center;
	font-size: 12px;
	width: 70%;
	margin: 5px auto;
	line-height: 20px;
	text-decoration: none;
	color: teal;
	font-weight: 700;
`;
const Button = styled.button`
	margin: 10px auto;
	width: 50%;
	padding: 10px;
	border: none;
	background-color: teal;
	color: white;
	font-weight: 700;
	cursor: pointer;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>Login</Button>
					<Link href="#">FORGET YOUR PASSWORD</Link>
					<Link href="#">CREATE A NEW ACCOUNT</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
