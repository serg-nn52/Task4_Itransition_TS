import React from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ruRU from 'antd/lib/locale/ru_RU';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from 'containers/ErrorBoundary';
import Preloader from 'components/Preloader';
import store, { persistor } from './store';
import App from './containers/App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={ruRU}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </PersistGate>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>,
);
