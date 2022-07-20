import React from 'react';

type ReactInputEventTarget = HTMLInputElement;

export namespace Base {
    export type EventTarget = {
        value: string;
    };
}

export namespace ReactEvents {
    export type InputUpdateEvent = React.FocusEvent<HTMLInputElement>;
}

export namespace ReactHandlers {
    export type ChangeHandler = (ev: React.ChangeEvent) => void;
    export type InputUpdateHandler = (ev: ReactEvents.InputUpdateEvent) => void;
}
