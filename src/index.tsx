import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import { store } from './store/store';
import App from './components/app/App';


import './styles/index.sass';
import './styles/media.sass';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

