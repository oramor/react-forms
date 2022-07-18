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
    public updateFieldValue(fieldName: string, value: any): void {
        if (Object.keys(this).includes(fieldName)) {
            throw new Error(`Not found Field ${fieldName}`);
        }

        this[fieldName]['value'] = value;
    }
    constructor(...args: ConstructorParameters<BaseFormStoreConstructor>) {
        this.lang = args[0];
    }
}
