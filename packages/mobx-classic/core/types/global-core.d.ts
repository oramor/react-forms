type SupportedLangs = 'ru' | 'en';
type DictionaryNode = Record<Required<SupportedLangs>, string>;

type Parsers = 'email' | 'phone';
type Validators = 'email' | 'phone' | 'password';
type Normalizers = 'low' | 'noSpace';

type FormSchemaNode = {
    title: DictionaryNode;
    errors: DictionaryNode;
    required: boolean;
    matching?: {
        [key: string]: {
            parser?: Parsers | null;
            normalizers?: Normalizers[];
            validator?: Validators | null;
        };
    };
    placeholder?: DictionaryNode;
};

type FormSchema = Record<string, FormSchemaNode>;

type FormFieldSchema = FormSchemaNode & {
    value: string;
    error: string;
};

type FormFieldComputed = {
    value: string | number;
    title: string;
    required: boolean;
    placeholder?: string;
    error?: string;
};
