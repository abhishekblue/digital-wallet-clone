import { BottomWarning } from "../components/BottonWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"



export const Signin = () => {
    return <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign In"}></Heading>
            <Subheading label={"Enter your credentials to access your account"}></Subheading>
            <InputBox label={"Email"} placeholder={"johndoe@example.com"}></InputBox>
            <InputBox label={"Password"} placeholder={"Password"}></InputBox>
            <Button label={"Sign In"}></Button>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/singup"}></BottomWarning>
        </div>
    </div>
}