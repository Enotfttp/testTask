import styled from "styled-components";

const LoginStyle = styled.div`
position: absolute;
top: 20%;
left: 50%;
transform: translateX(-50%);
border-radius: 50px;
box-shadow: #000 10px 10px 120px;
background: linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%);
padding: 60px 40px;
h2{
	text-align: center;
	font-size:30px;
}
label{
	color:#000;
	font-weight:600;
	font-size:16px;
	text-align: left;
}
input{
	display: block;
	outline: none;
	width: 400px;
	height: 30px;
	padding: 5px 10px;
	font-size: 16px;
	margin: 5px 0 10px 0px;
	border:2px solid #fff;
	border-radius: 10px;
}
& > div{
	display: flex;
    justify-content: center;
    align-items: center;
	 button{
		cursor: pointer;
		background-color: #ff9f3b;
		margin: 20px;
		font-size: 16px;
		font-weight: 600;
		width:200px;
		height: 40px;
		box-shadow: #000 2px 2px 10px;
		border-radius:10px ;
		transition: all .2s;
		border:none
	}
button:active{
	box-shadow: none;
	border:none
}
	a{
	margin-top: 15px;
	color:#000;
	font-size: 16px;
	font-weight: 600;
	}

}

`
export default LoginStyle