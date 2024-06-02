
/*

1. 컴포넌트 버튼은 variant, size, shape 값을 전달 받습니다
2. variant -> primary, secondary, primary-text
3. size -> small, medium, full
4. shape -> shape, round

5. primary -> 배경 녹색, 글자 흰색
6. secondary -> 배경 파랑색, 글자 흰색
7. primary-text -> 글자만 녹색, 배경x

8. small -> padding: 16px
9. medium -> padding: 16px 32px
10. full -> width: 100%, aspect-ratio : 8 / 1
10-1 shape -> radios 8px
     round -> 50%

11. 나머지 매개변수 사용할 것
12. <button>텍스트</button> -> ({children})


ex) 
const TDButton = ({variant, size, shape, children , ...rest}) => {
    return (
        <S.Button
            variant={variant}
            ....
        >
            {children}
            // 해당 컴포넌트가 감싸고 있는 것은 children으로 자동전달
        </S.Button>
    )
}

    <TDButton variant={'primary'} size={'full'} shape={'shape'}>
        회원가입
    </TDButton>

*/

// return <S.Form >
// <FormInput label={"이메일"} placeholder={"email"}size={2}/>
// <FormInput label={"비밀번호"} placeholder={"passeword"}size={1} containerStyle={{
//   width : 300
// }}/>
//   </S.Form >


// 5. primary -> 배경 녹색, 글자 흰색
// 6. secondary -> 배경 파랑색, 글자 흰색
// 7. primary-text -> 글자만 녹색, 배경x

import styled, {css} from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"

const TDButton = ({variant, size, shape, bt,  children , ...rest}) => {
    const navigation = useNavigate()
    return (
        <S.Button {...{size,shape,variant}} {...rest}onClick={()=>{
            navigation(bt);
        }}>
            {children}
        </S.Button>
    )
}
export default TDButton
//variant에 따라 css가 변경 -> varianCss

const variantCSS = {
    primary: css`
    background-color: #004980;
    color:white;
    `,
    secondary: css`
        background-color: #3da3da;
        color:white;
    `,
    "primary-text":css`
    color: green;
    background-color: transparent;
    outline: none;
    `
}

const sizeCSS = {
    small: css`
    padding: 16px;
    `,
    medium: css`
    padding: 16px 32px;
    `,
    full:css`
        width: 100%;
        aspect-ratio: 8/1;// 가로 8 세로 1
    `
}
const shapeCSS = {
    shape: css`
    border-radius: 8px;
    `,
    round: css`
    border-radius: 50%;
   `
}
const Button = styled.button`
${(props)=> variantCSS[props.variant]}
${(props)=> sizeCSS[props.size]}
${(props)=> shapeCSS[props.shape]}
`
const S = {
    Button,
}

// { <S.TDButton variant={'primary'} size={'full'} shape={'shape'}>
//             {children}}

//variant 에 따라 css가 변경 -> varianCss
//size에 따라 css가 변경 -> sizeCss
//shape에 따라 css가 변경 -> shapeCss

/*
{(props)=> variat[props.variant]}
{(props)=> variat[props.size]}
{(props)=> variat[props.shape]}

<S.Button variant={variant} size={size} shape={shape}>


*/
