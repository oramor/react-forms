import { BaseFormFront } from '../../core/BaseFormFront';
import LoginFormScheme from './LoginFormSchema';
import { makeAutoObservable } from 'mobx';

export class LoginFormFront extends BaseFormFront {
    _loginDirectly: FormFieldSchema = {
        ...LoginFormScheme['login'],
        value: '',
        error: '',
    };

    _loginComputed: FormFieldSchema = {
        ...LoginFormScheme['login'],
        value: '',
        error: '',
    };

    _password: FormFieldSchema = {
        ...LoginFormScheme['password'],
        value: '',
        error: '',
    };

    constructor(lang: SupportedLangs) {
        super(lang);
        makeAutoObservable(this);
    }

    get loginDirectly() {
        return this._loginDirectly;
    }

    loginDirectlyUpdate(ev) {
        this._loginDirectly.value = ev.target.value;
    }

    loginDirectlyComputed(ev) {
        this._loginComputed.value = ev.target.value;
    }

    get loginComputed() {
        return this._loginComputed;
    }

    get password() {
        return this._password;
    }
}
