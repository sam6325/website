// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext'; // ✅ 引入 ToastProvider
import './styles/global.css';
import './styles/toast.css'; // ✅ 引入 Toast 樣式

function App() {
  return (
    <ToastProvider> {/* ✅ 最外層包住整個應用 */}
      <AuthProvider>
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
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
