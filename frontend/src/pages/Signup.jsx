import { BottomWarning } from "../components/BottonWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"


export const Signup = () => {
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading label = {"Sign Up"}></Heading>
                    <Subheading label = {"Enter you details to create an account"}></Subheading>
                    <InputBox label={"First Name"} placeholder={"John"}></InputBox>
                    <InputBox label={"Last Name"} placeholder={"Doe"}></InputBox>
                    <InputBox label={"Email"} placeholder={"johndoe@example.com"}></InputBox>
                    <InputBox label={"Password"} placeholder={"Password"}></InputBox>
                    <Button label={"Sign Up"}></Button>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/dashboard"}></BottomWarning>
                </div>
            </div>
        </div>
}