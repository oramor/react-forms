import { ReactHandlers } from '../../core/types/libs/react';

/**
 * В этом компоненте я получаю доступ к полям старым способом
 */

type InputTextProps = FormFieldSchema & {
    onChange?: ReactHandlers.InputUpdateHandler;
};

export function InputTextDirectly({
    title,
    onChange,
    placeholder,
}: InputTextProps) {
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
