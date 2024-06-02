
import styled, { css } from "styled-components"
import React from "react"

const FormInput = ({label,size, containerStyle, ...props}) => {
    console.log(size)
    return <S.InputBox style={containerStyle}>
        <S.InputLabel>{label} </S.InputLabel>
        <S.Input size={size}{...props}/>
       {/*나머지 매개변수 전달을 통한 input의 속성값 전달 */}  
    </S.InputBox>
}

export default FormInput

const sizeCSS = {
    1: css`
    width: 100px;
    height: 30px;
    `,
    2: css`
    width: 300px;
    height: 48px;
    `,
    3:css`
    width: 100%;
    height: 48px;
    `
}

const InputBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-bottom: 16px;
width: 100%;
`

const Input = styled.input`
border:1px solid #999;
border-radius: 4px;
padding-left: 16px;
${(props) => sizeCSS[props.size]}

&::placeholder{
    text-align: center;
}

`
const InputLabel = styled.label`
    position: absolute;
    left: 16px;
    top: -6px;
    font-size: 12px;
    background-color: aliceblue;
    z-index: 100;
    padding: 0 4px;
`

const S = {
    Input,
    InputBox,
    InputLabel,
}