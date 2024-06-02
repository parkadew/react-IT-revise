import TDButton from "../../../components/Button"
import FormInput from "../../../components/Forminput"
import styled from "styled-components"

const SignUpForm = () => {
    
    const FORM_ARRAY = [
        {
            label: "이메일",
            placeholder: "email",
        },
        {
            label: "비밀번호",
            placeholder: "passeword",
        },
        {
            label: "비밀번호 확인",
            placeholder: "email",
        },
    ]
    
    return <S.Form>
           {FORM_ARRAY.map((Form, index)=><FormInput
           key={index}
            label={Form.label}
            size={2}
            placeholder ={Form.placeholder}
            >
            </FormInput>)}
    {/* <FormInput label={"이메일"} placeholder={"email"}size={2}/>
    <FormInput label={"비밀번호"} placeholder={"passeword"}size={2} containerStyle={{
      }}/>
    <FormInput label={"비밀번호확인"} placeholder={"check"}size={2} containerStyle={{
      }}/> */}
         <TDButton variant={"secondary"} size={'mediun'} bt = {"/todo/4"}>
          로그인
          </TDButton>
      </S.Form>
}
export default SignUpForm


//어떤게 만들어져야할지 생각해보자

const Form = styled.form`
    background-color: aliceblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 32px;
`

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