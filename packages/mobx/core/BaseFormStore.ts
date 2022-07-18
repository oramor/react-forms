type SupportedLangs = 'ru' | 'en';

type LocalNode = {
    ru: string;
    en: string;
};

export interface FormFieldNode {
    title: LocalNode;
    value: string;
    placeholder?: LocalNode;
    error?: string;
}

type BaseFormStoreConstructor = new (lang: SupportedLangs) => BaseFormStore;

export abstract class BaseFormStore {
    protected lang: SupportedLangs;
    public isRequest = false;
    constructor(...args: ConstructorParameters<BaseFormStoreConstructor>) {
        this.lang = args[0];
    }

    public updateFieldValue(fieldName: string) {
        if (Object.keys(this).includes(fieldName)) {
            throw new Error(`Not found Field ${fieldName}`);
        }

        return (ev) => (this[fieldName]['value'] = ev.target.value);
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
        console.log(this.formData);
    }

    private changeFormStatus(b: boolean) {
        this.isRequest = b;
    }
}
