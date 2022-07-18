import { BaseFormStore, FormFieldNode } from '../../../core/BaseFormStore';
import { makeObservable, observable, computed } from 'mobx';

export class LoginFormStore extends BaseFormStore {
    _login: FormFieldNode = {
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
        makeObservable(this, {
            _login: observable,
            login: computed,
        });
    }

    get login() {
        return this._login;
    }
}
