import React from "react";

import Navbar from "../../components/NavBar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

import { Add, Remove } from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "../../responsive";

const Container = styled.div`
	font-size: 1rem;
`;
const Wrapper = styled.div`
	padding: 20px;
	${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
	text-align: center;
	${mobile({ padding: "10px" })}
`;

const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4vh 6vw;
`;

const TopButton = styled.button`
	font-weight: 700;
	padding: 1rem;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "teal" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.span`
	display: flex;
	gap: 2rem;
	cursor: pointer;
	${mobile({ display: "none" })}
`;
const TopText = styled.span`
	text-decoration: underline;
`;

const Bottom = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-right: 10vw;
	${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Details = styled.div`
	display: flex;
	gap: 2rem;
	flex-direction: column;
`;

const Image = styled.img`
	width: 20vw;
	margin-right: 20px;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
	background-color: ${(props) => props.color};
	width: 2rem;
	height: 2rem;
	border-radius: 100%;
`;

const ProductSize = styled.div``;

const PriceDetail = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
`;
const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: ;
`;
const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: "5px 15px" })}
`;
const ProductPrice = styled.div`
	font-size: 2.4rem;
	${mobile({ marginBottom: "20px" })}
`;

const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	margin-right: 4px;
	padding: 20px;
	height: 350spx;
`;

const SummaryTitle = styled.div`
	font-size: 2rem;
`;
const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`
	font-weight: bold;
`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
	width: 100%;
	background-color: teal;
	color: white;
	font-weight: bold;
	margin: 5px;
	padding: 1em;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Cart = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<Title>Your Bag</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTexts>
						<TopText>Shopping Bag(2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<TopButton type="filled">CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Details>
									<ProductName>
										<b>Product : </b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID : </b> 93813718293
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size : </b> 37.5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>

						<Hr />

						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Details>
									<ProductName>
										<b>Product : </b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID : </b> 93813718293
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size : </b> 37.5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add />
									<ProductAmount>2</ProductAmount>
									<Remove />
								</ProductAmountContainer>
								<ProductPrice>$ 30</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ 80</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice style={{ fontWeight: "bold" }}>
								$ 80
							</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Cart;
