const scheme: FormSchema = {
    login: {
        title: {
            ru: 'Логин',
            en: 'Login',
        },
        placeholder: {
            ru: 'Эл. почта или телефон',
            en: 'Email or phone',
        },
        errors: {
            ru: '',
            en: '',
        },
        matching: {
            email: {
                parser: 'email',
                normalizers: ['low', 'noSpace'],
                validator: 'email',
            },
        },
        required: true,
    },
    password: {
        title: {
            ru: 'Пароль',
            en: 'Password',
        },
        errors: {
            ru: '',
            en: '',
        },
        matching: {
            password: {
                validator: 'password',
            },
        },
        required: true,
    },
};

export default scheme;
