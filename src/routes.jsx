// routes.js
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

const routes = [
  { path: '/', element: <Home /> },
  { path: '/products', element: <Products /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
