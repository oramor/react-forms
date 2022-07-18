import React from 'react';
import { FormFieldNode } from '../../core/BaseFormStore';

type InputTextProps = FormFieldNode & {
    onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
};

// export interface InputTextProps {
//     placeholder?: string;
//     onChange?: (ev: React.FormEvent<HTMLInputElement>) => void;
// }

export function InputText({ title, onChange, placeholder }: InputTextProps) {
    return (
        <>
            <label htmlFor="login">{title.ru}</label>
            <input
                name="login"
                type="text"
                placeholder={placeholder?.ru}
                onChange={onChange}
            />
        </>
    );
}
