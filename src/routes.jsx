// src/routes.js
import { lazy } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Account = lazy(() => import('./pages/Account')); // 👈 新增

const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  {
    path: '/account',
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  { path: '*', element: <NotFound /> },
];

export default routes;
