import { createRoot } from 'react-dom/client';
import { App } from './spa/App';

const wrapper = document.querySelector('#root');
if (wrapper) {
    const root = createRoot(wrapper);
    root.render(<App />);
}
