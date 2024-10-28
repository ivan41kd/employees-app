import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './styles/scss/style.css';
import { App } from './App';
import { Main } from './components/main/Main';
import { EmpployeerPage } from './pages/EmployeerPage';
import { AddEmployeerPage } from './pages/AddEmployeerPage';

const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
 },
 {
  path: '/employeers/:id',
  element: <EmpployeerPage />,
 },
 {
  path: '/employeers/add',
  element: <AddEmployeerPage />,
 },
]);

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <Provider store={store}>
   <Main>
    <RouterProvider router={router} />
   </Main>
  </Provider>
 </StrictMode>
);
