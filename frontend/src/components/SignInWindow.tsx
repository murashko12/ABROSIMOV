import { FC } from "react"
import Input from "./UI/Input"

const SignInWindow:FC = () => {
    return (
        <form className="bg-[#358fa1] text-center">
            <h4 className="text-white text-2xl font-black">ВХОД</h4>
            <Input label={""} placeholder="Локин" />
            <Input label={""} placeholder="Пароль" />
            <button className="">Войти</button>
        </form>
    )
}

export default SignInWindow
