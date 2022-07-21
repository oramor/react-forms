import { BaseFormFront } from '../../core/BaseFormFront';
import LoginFormScheme from './LoginFormSchema';

export class LoginFormFront extends BaseFormFront {
    _login: FormField = {
        ...LoginFormScheme['login'],
        value: '',
        error: '',
    };

    _password: FormField = {
        ...LoginFormScheme['password'],
        value: '',
        error: '',
    };

    constructor(lang: SupportedLangs) {
        super(lang);
        this.makeObservableWrapper();
    }

    get login() {
        return this._login;
    }

    get password() {
        return this._password;
    }
}
