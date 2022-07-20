import { observer } from 'mobx-react';
import { InputText } from '../../../components/InputText/InputText';
import { Button } from '../../../components/Button/Button';
import { LoginFormStore } from './LoginFormStore';

const store = new LoginFormStore('ru');

export const App = observer(() => {
    return (
        <form>
            <InputText
                {...store.login}
                onChange={store.inputUpdateFactory('login')}
            />
            <div>{store.login.value}</div>
            <Button title="Send" onClick={store.sendForm.bind(store)} />
        </form>
    );
});
