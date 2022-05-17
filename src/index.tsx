import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';


import { store } from './store/store';
import App from './components/app/App';


import './styles/index.sass';
import './styles/media.sass';

const container = document.querySelector<Element>("main#root");
if (!container) throw new Error("Failed to find the root element");

const root= createRoot(container);

root.render(
  <Provider store={store}>
      <App />
  </Provider>,
);

