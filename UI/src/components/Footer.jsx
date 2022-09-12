import React from "react";
import styled from "styled-components";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Pinterest from "@material-ui/icons/Pinterest";
import Room from "@material-ui/icons/Room";
import Phone from "@material-ui/icons/Phone";
import MailOutline from "@material-ui/icons/MailOutline";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex: 1;
	gap: 50px;
	margin: 20px;
	${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
	flex: 1;
`;
const Logo = styled.h3``;
const Desc = styled.div`
	font-size: 16px;
`;

const SocialContainer = styled.div`
	display: flex;
	margin-top: 20px;
`;

const SocialIcon = styled.div`
	background-color: #${(props) => props.color};
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 10px;
`;

const Center = styled.div`
	flex: 1;
	text-align: left;
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
`;
const ListItem = styled.li`
	margin-bottom: 10px;
	width: 50%;
	cursor: pointer;
`;

const Right = styled.div`
	flex: 1;
	${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
	margin-bottom: 10px;
`;
const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>DBM.</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3B5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="E4405F">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55ACEE">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="E60023">
						<Pinterest />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> 682 Dixie Road , South London
					98336
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +1 234 56 78 91
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: "10px" }} /> contact@DBM.dev
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
