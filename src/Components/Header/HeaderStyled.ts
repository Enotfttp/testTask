import styled from "styled-components";

const HeaderStyled = styled.div`
	width:100%;
	height:80px;
	background-color:#000;
	display:flex;
	justify-content: center;
	align-items: center;
	position: relative;
	a{
		font-size: 26px;
		font-weight: 400;
		color:#666060;
		text-decoration:none;
		padding: 20px;
	}
	.logout{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0%;
	}
	.active{
		color:#fff;
	}
	span{
		position:absolute;
		left: 2%;
		font-size: 24px;
		color:#fff;
	}
`
export default HeaderStyled