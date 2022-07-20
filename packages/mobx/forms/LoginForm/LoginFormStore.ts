import { BaseFormStore } from '../../core/BaseFormStore';
import { makeObservable } from 'mobx';
import LoginFormScheme from './LoginFormScheme';

export class LoginFormStore extends BaseFormStore {
    //declare name: FormFieldNode;
    _login: FormFieldNode = {
        ...LoginFormScheme['login'],
        value: '',
        error: '',
    };

    _password: FormFieldNode = {
        ...LoginFormScheme['password'],
        value: '',
        error: '',
    };

    constructor(lang: SupportedLangs) {
        super(lang);
        makeObservable(this, {
            ...this.getObservableFields(),
        });
    }

    get login() {
        return this._login;
    }

    get password() {
        return this._password;
    }
}
