import { BaseFormFront } from '../../core/BaseFormFront';
import LoginFormScheme from './LoginFormSchema';

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
        this.makeObservableWrapper();
    }

    get loginDirectly() {
        console.log('-------5');
        return this._loginDirectly;
    }

    get loginComputed() {
        console.log('-------3');
        // const obj = {
        //     ...this._loginComputed,
        // };
        const obj = this._loginComputed;
        return obj;
        //return this._loginComputed;
        //return this.computeField(this._loginComputed);
    }

    get password() {
        return this.computeField(this._password);
    }
}
