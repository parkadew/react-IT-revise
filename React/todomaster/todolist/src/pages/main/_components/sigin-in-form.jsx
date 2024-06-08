import styled from "styled-components"
import FormInput from "../../../components/Forminput"
import TDButton from "../../../components/Button"
import { Form } from "./style"
// import { useNavigate } from "react-router-dom"

const SignInForm = () => {


    const FORM_ARRAY = [
        {
            label: "이메일",
            placeholder: "email",
        },
        {
            label: "비밀번호",
            placeholder: "email",
        },
    ]
    return <S.Form>
        {FORM_ARRAY.map((Form, index) => <FormInput
            key={index}
            label={Form.label}
            size={2}
            placeholder={Form.placeholder}
        >
        </FormInput>)}
        <TDButton variant={"secondary"} size={'mediun'} bt={"/todo/4"}>
            로그인
        </TDButton>
    </S.Form>




    // return <S.Form >
    //       <FormInput label={"이메일"} placeholder={"email"}size={2}/>
    //       <FormInput label={"비밀번호"} placeholder={"passeword"}size={1} containerStyle={{
    //         width : 300
    //       }}/>
    //       <TDButton variant={"secondary"} size={'mediun'}>
    //       로그인
    //       </TDButton>
    //         </S.Form >

}


export default SignInForm



const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
    width: 100%;
`
const Input = styled.input`
    border: 1px solid #999;
    width: 100%;
    border-radius: 4px;
    padding-left: 16px;
    height: 48px;
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
    Form,
    InputBox,
    InputLabel,
    Input
}