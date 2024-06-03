import TDButton from "../../../components/Button"
import FormInput from "../../../components/Forminput"
import styled from "styled-components"
import { Form } from "./style"


const SignUpForm = ({formState}) => {

    const onSubmitSignUp = (event) => {
        const email = event.target.email.value
        event.preventDefault()
        alert(`${email}님 환영합니다`)
        formState = "SIGN-IN"
        // 회원가입 때 입력했던 이메일명을 통해 000@naver.com님 환영합니다'alert
        // 로그인으로 변경
        // input - value를 가지고 오는 방법
        // 
    }
    
    const FORM_ARRAY = [
        {
            label: "이메일",
            name: "email",
            option: {
                placeholder: "email",
            }
        },
        {
            label: "비밀번호",
            placeholder: "passeword",
        },
        {
            label: "비밀번호 확인",
            placeholder: "passeword-confirm",
        },
    ]
    
    return <S.Form onSubmit={onSubmitSignUp}>
        {FORM_ARRAY.map((form)=>
            <FormInput key={form.name} size={form.size}label={form.label} name ={form.name}
            />
            /*form.option?.placeholder // option이 있다면 placeholder를 반환해라
            form.option && form.option.placeholder
            form.option && form.option.placeholder
            form.option ? form.option.placeholder : form.name
             */
        )}

           {/* {FORM_ARRAY.map((Form, index)=><FormInput
           key={index}
            label={Form.label}
            size ={2}
            placeholder ={Form.placeholder}
            >
            </FormInput>)} */}
    {/* <FormInput label={"이메일"} placeholder={"email"}size={2}/>
    <FormInput label={"비밀번호"} placeholder={"passeword"}size={2} containerStyle={{
      }}/>
    <FormInput label={"비밀번호확인"} placeholder={"check"}size={2} containerStyle={{
      }}/> */}
         <TDButton variant={"secondary"} size={2} bt = {"/todo/4"}>
          로그인
          </TDButton>
      </S.Form>
}
export default SignUpForm


//어떤게 만들어져야할지 생각해보자
//관심사분리 Form이라는 관심사를 분리하여 사용해보자

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