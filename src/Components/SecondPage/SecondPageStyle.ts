import styled from "styled-components";

const SecondPageStyle = styled.div`
::-webkit-scrollbar { width: 3px; height: 3px;}
button{
		cursor: pointer;
		margin-right:20px ;
		border:1px solid #000;
		border-radius:20px ;
		padding: 8px 40px;
		font-size: 14px;
		background-color: #80DAEB ;
		box-shadow:1px 2px 5px #000 ;
		transition: All 0.5s ease;
		&:active{
			box-shadow: 0px 0px 0px #000;
		}
	}
.addButton{
	padding:20px;
	display:flex ;
	justify-content:space-around;
	align-items:center ;
	input{
		width: 250px;
			height:30px;
			border-radius:10px ;
			padding-left:10px ;
			margin-top: 10px;
			border:1px solid #000;
	}
}
.table-users{
	display:flex ;
	justify-content:center ;
}
.head-table{
	display:flex ;
	justify-content:space-around ;
	margin-bottom: 30px;
	width: 500px;

}
.content-table{
	display: flex;
	overflow:auto ;
	border-radius:40px ;
	border: 2p solid #000;
	box-shadow:1px 1px 20px #000 ;
	width: 900px;
	background-color:grey ;
	li{
		flex-shrink:0 ;
		list-style-type: none;
		border:2px solid #000;
		border-radius:30px;
	box-shadow:1px 1px 20px #000 ;
		background-color:#fff ;
		width: 500px;
		margin: 30px;
		padding: 15px;
	}
	li>p{
		font-size:16px ;
		font-weight:900 ;
	}
	li>span{
		display:block ;
		margin-bottom: 15px;
	}
	
}
`
const StyledModalSecondPage = styled.div`
	position:absolute ;
	top: 0%;
	right: 0;
	width: 100%;
	height: 100%;
	background-color:rgba(0,0,0,0.4) ;
.modal{
	width: 300px;
	height: 350px;
	background-color:#fff;
	position:fixed;
	box-shadow:2px 0px 200px #000;
	border-radius:50px;
	top: 50%;
	left:50%;
	transform: translate(-50%,-50%);
	.cross{
		cursor:pointer ;
		position:absolute;
		top:4%;
		right: 6%;
		width: 30px;
		height:30px ;
	}	
	.block-input{
	position: absolute ;
	left:50%;
	top: 40px;
	transform: translate(-50%,0);	
		input{
			width: 250px;
			height:30px;
			border-radius:10px ;
			padding-left:10px ;
			margin-top: 10px;
			border:1px solid #000;
		}
	}
	button{
		cursor: pointer;
		position:absolute ;
		top: 80%;
		left:50%;
		transform: translate(-50%,0%);	
		border:1px solid #000;
		border-radius:20px ;
		padding: 8px 40px;
		font-size: 14px;
		background-color: #80DAEB ;
	}
}

`
export { SecondPageStyle, StyledModalSecondPage }