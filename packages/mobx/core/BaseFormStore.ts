import { makeObservable, action, observable, computed } from 'mobx';
import { ReactHandlers, ReactEvents } from './types/libs/react';

type BaseFormStoreConstructor = new (lang: SupportedLangs) => BaseFormStore;

export abstract class BaseFormStore {
    protected lang: SupportedLangs;
    public isRequest = false;
    constructor(...args: ConstructorParameters<BaseFormStoreConstructor>) {
        this.lang = args[0];
        makeObservable(this, {
            isRequest: observable,
            inputUpdateAction: action,
            sendForm: action,
        });
    }

    // Fabric
    public inputUpdateFactory(
        fieldName: string,
    ): ReactHandlers.InputUpdateHandler {
        if (Object.keys(this).includes(fieldName)) {
            throw new Error(`Not found Field ${fieldName}`);
        }

        return (ev: ReactEvents.InputUpdateEvent) =>
            this.inputUpdateAction(fieldName, ev);
    }

    public inputUpdateAction(name: string, ev: ReactEvents.InputUpdateEvent) {
        const value: string = ev.target.value;
        this[name]['value'] = value;
    }

    private get formData() {
        const formData = new FormData();

        // Fields should begin with "_" (for ex. _login)
        const regex = /^_\w*/;

        Object.keys(this).forEach((str) => {
            if (regex.test(str)) {
                const name = str.slice(1);
                const value = this[str]['value'];
                formData.set(name, value);
            }
        });

        return formData;
    }

    public sendForm() {
        this.changeFormStatus(true);
        console.log(this.formData.get('login'));
    }

    private changeFormStatus(b: boolean) {
        this.isRequest = b;
    }

    protected getObservableFields() {
        const regex = /^_\w*/;
        const obj = {};

        Object.keys(this).forEach((fieldName) => {
            if (regex.test(fieldName)) {
                const computedFieldName = fieldName.slice(1);

                // Only if object has pair like _login + login
                if (this[computedFieldName]) {
                    obj[fieldName] = observable;
                    obj[computedFieldName] = computed;
                }
            }
        });
        console.log(obj);
        return obj;
    }
}
