import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
background: transparent;
text-size: 1.4rem;
border: 0.1rem solid var(--lightBlue);
border-color:${prop => 
	prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color: ${prop => 
	prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 5px;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover {
	background-color: ${prop => 
	prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
	color: ${prop => 
	prop.cart ? "var(--mainWhite)":"var(--mainWhite)"};
}
&:focus {
	outline: none;
}
`