import { FC, useState } from "react"
import SignInWindow from "../components/SignInWindow"
import SignUpWindow from "../components/SignUpWindow"
import { loginType } from "../modules/enums/loginTypes"

const LoginPage: FC = () => {

    const [typeLogin, setTypeLogin] = useState<loginType>(loginType.SIGN_UP)

    const components = {
        [loginType.SIGN_IN]: <SignInWindow />,
        [loginType.SIGN_UP]: <SignUpWindow />
    }

    return (
        <div className="h-screen w-full flex items-center justify-center">
            {components[typeLogin]}
        </div>
    )
}

export default LoginPage
