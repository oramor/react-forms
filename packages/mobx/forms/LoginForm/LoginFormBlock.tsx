import { InputText } from '../../components/InputText/InputText';
import { Button } from '../../components/Button/Button';
import { LoginFormStore } from './LoginFormStore';
//import { LoginFormStyles } from './LoginFormStyles';

const store = new LoginFormStore('ru');

export function LoginFormBlock() {
    return (
        <form className="f-login">
            <InputText
                {...store.login}
                onChange={store.inputUpdateFactory('login')}
            />
            <div>{store.login.value}</div>
            <Button title="Send" onClick={store.sendForm.bind(store)} />
        </form>
    );
}
