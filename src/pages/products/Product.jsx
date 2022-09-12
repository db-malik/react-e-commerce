import React from "react";
import styled from "styled-components";

import NavBar from "../../components/NavBar";
import Announcement from "../../components/Announcement";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

import { Add, Remove } from "@material-ui/icons";

import { mobile } from "../../responsive";
/*    **********************************************     */
const Container = styled.div`
	font-size: 1rem;
`;

const Wrapper = styled.div`
	margin: 40px;
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	gap: 40px;
	${mobile({ flexDirection: "column" })}
`;

const ImageContainer = styled.div`
	flex: 1;
`;

const Image = styled.img`
	width: 100%;
	height: 100vh;
	object-fit: cover;
	${mobile({ height: "20vh" })};
`;

const InfoContainer = styled.div`
	flex: 1;
`;
const Title = styled.h3``;
const Desc = styled.div``;
const Price = styled.div`
	margin: 10px 0;
	font-size: 32px;
`;

const FilterContainer = styled.div`
	display: flex;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-right: 40px;
`;

const FilterTitle = styled.h3``;

const FilterColor = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 100%;
	background-color: ${(props) => props.color};
	cursor: pointer;
`;

const FilterSize = styled.select`
	padding: 5px;
`;
const FilterSizeOption = styled.option`
	color: #008080;
`;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;

const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-right: 40px;
`;
const Amount = styled.div`
	border: 1px solid teal;
	border-radius: 10px;
	font-weight: bold;
	padding: 5px 20px;
`;

const Button = styled.button`
	border-radius: 10px;
	cursor: pointer;
	border: 2px solid teal;
	padding: 4px 6px;
	&:hover {
		background-color: #f8f4f4;
	}
`;

/*      ******************************************************   */
const Product = () => {
	return (
		<Container>
			<NavBar />
			<Announcement />
			<Wrapper>
				<ImageContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImageContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
						iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
						tristique tortor pretium ut. Curabitur elit justo, consequat id
						condimentum ac, volutpat ornare.
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove style={{ cursor: "pointer" }} />
							<Amount>1</Amount>
							<Add style={{ cursor: "pointer" }} />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
