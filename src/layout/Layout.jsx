import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SocialSidebar from '../components/SocialSidebar'; // <-- import it here

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <SocialSidebar /> {/* <-- render it here */}
    </div>
  );
}

export default Layout;
