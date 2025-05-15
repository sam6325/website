import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes'; // 引用路由配置
import './styles/global.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
