import { BaseFormStore, FormFieldNode } from '../../../core/BaseFormStore';

export class LoginFormStore extends BaseFormStore {
    private _login: FormFieldNode = {
        title: {
            ru: 'Логин',
            en: 'Login',
        },
        value: '',
        placeholder: {
            ru: 'Эл. почта или телефон',
            en: 'Email or phone',
        },
        error: '',
    };
    constructor(lang) {
        super(lang);
    }

    get login() {
        return this._login;
    }
}
