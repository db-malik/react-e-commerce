import React from "react";
import styled from "styled-components";
import Navbar from "../../components/NavBar";
import Announcement from "../../components/Announcement";
import Products from "../../components/Products";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { mobile } from "../../responsive";

const Container = styled.div`
	font-size: 1rem;
	${mobile({ padding: "2px" })}
`;
const Title = styled.h1``;

const FilterContainer = styled.div`
	margin: 10px;
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.div`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
	padding: 5px;
	${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductsList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products : </FilterText>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>

				<Filter>
					<FilterText>Sort Products : </FilterText>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductsList;
