import { ReactHandlers } from '../../core/types/libs/react';

// type InputTextProps = FormFieldComputed & {
//     onChange?: ReactHandlers.InputUpdateHandler;
// };

type InputTextProps = FormFieldSchema & {
    onChange?: ReactHandlers.InputUpdateHandler;
};

export function InputTextComputed({
    title,
    onChange,
    placeholder,
}: InputTextProps) {
    return (
        <>
            <label htmlFor="loginComputed">{title.ru}</label>
            <input
                name="loginComputed"
                type="text"
                placeholder={placeholder?.ru}
                onChange={onChange}
            />
        </>
    );
}
