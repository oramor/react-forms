import { InputText } from '../../components/InputText/InputText';
import { Button } from '../../components/Button/Button';
import { LoginFormFront } from './LoginFormFront';
import { observer } from 'mobx-react';
//import { LoginFormStyles } from './LoginFormStyles';

const form = new LoginFormFront('ru');

export const LoginFormBlockFront = observer(() => {
    return (
        <form className="f-login">
            <InputText
                {...form.login}
                onChange={form.inputUpdateFactory('login')}
            />
            <div>{form.login.value}</div>
            <Button title="Send" onClick={form.sendForm.bind(form)} />
        </form>
    );
});
