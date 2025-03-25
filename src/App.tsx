import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs/WhyChooseUs';
import { Blog } from './components/Blog/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Dashboard } from './pages/admin/Dashboard';
import { Login } from './pages/admin/Login';
import { AuthGuard } from './components/AuthGuard';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  if (path === '/admin/login') {
    return <Login />;
  }

  if (path.startsWith('/admin')) {
    return (
      <AuthGuard>
        <Dashboard />
      </AuthGuard>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;