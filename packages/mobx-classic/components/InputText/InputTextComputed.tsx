import { ReactHandlers } from '../../core/types/libs/react';

type InputTextProps = FormFieldComputed & {
    onChange?: ReactHandlers.InputUpdateHandler;
};

export function InputTextComputed({
    title,
    onChange,
    placeholder,
}: InputTextProps) {
    return (
        <>
            <label htmlFor="login">{title}</label>
            <input
                name="login"
                type="text"
                placeholder={placeholder}
                onChange={onChange}
            />
        </>
    );
}
