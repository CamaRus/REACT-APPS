import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// import { BrowserRouter} from 'react-router-dom';
import { Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import store from './store';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const bookstoreService = new BookstoreService();

// const app = (
//   <Router>
//     <App/>
//   </Router>
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App/>
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();