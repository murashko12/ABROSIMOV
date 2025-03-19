import {FC} from 'react'
import Input from './UI/Input'

const SignUpWindow: FC = () => {
    return (
        <form className="bg-[#358fa1] text-center rounded-xl">
            <h4 className="text-white text-2xl font-black">Регистрация</h4>
            <div className="flex items-center gap-3">
                <Input label={""} placeholder="Фамилия" />
                <Input label={""} placeholder="Имя" />
                <Input label={""} placeholder="Отчество" />
            </div>
            <Input label={""} placeholder="Локин" />
            <div className="flex items-center ">
                <Input label={""} placeholder="Пароль" />
                <Input label={""} placeholder="Повторить пароль" />
            </div>
            <button className="">Зарегистрироваться</button>
        </form>
    )
}

export default SignUpWindow