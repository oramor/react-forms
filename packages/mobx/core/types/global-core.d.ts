type SupportedLangs = 'ru' | 'en';

type LocalNode = {
    ru: string;
    en: string;
};

type Parsers = 'email' | 'phone';
type Validators = 'email' | 'phone' | 'password';

type FormSchemeNode = {
    title: LocalNode;
    errors: LocalNode;
    required: boolean;
    matching?: {
        [key: string]: {
            parser?: Parsers | null;
            validator?: Validators | null;
        };
    };
    placeholder?: LocalNode;
};

type FormScheme = Record<string, FormSchemeNode>;

type FormFieldNode = FormSchemeNode & {
    value: string;
    error?: string;
};
