export function Button({ onClick, title }) {
    return (
        <button type="button" onClick={onClick}>
            {title}
        </button>
    );
}
