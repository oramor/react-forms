import { InputTextComputed } from '../../components/InputText/InputTextComputed';
import { InputTextDirectly } from '../../components/InputText/InputTextDirectly';
import { Button } from '../../components/Button/Button';
import { LoginFormFront } from './LoginFormFront';
import { observer } from 'mobx-react';
//import { trace } from 'mobx';

const form = new LoginFormFront('ru');

export const LoginForm = observer(() => {
    //trace(true);
    return (
        <form>
            <InputTextDirectly
                {...form.loginDirectly}
                onChange={form.inputUpdateFactory('loginDirectly')}
            />
            <div>{form.loginDirectly.value}</div>

            <InputTextComputed
                {...form.loginComputed}
                onChange={form.inputUpdateFactory('loginComputed')}
            />
            <div>{form.loginComputed.value}</div>

            <Button title="Send" onClick={form.sendForm.bind(form)} />
        </form>
    );
});
