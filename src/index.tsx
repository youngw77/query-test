import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider, QueryCache } from 'react-query';
import { createRoot } from 'react-dom/client'; // Update the import statement here

const queryClient =  new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('onError', error);
    },
    onSuccess: (data) => {
      console.log('onSuccess', data);
    }
  })
});
console.log(queryClient);

// Use createRoot instead of ReactDOM.createRoot
const rootElement:any = document.getElementById('root');
const root = createRoot(rootElement);

// Use root.render instead of ReactDOM.render
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
