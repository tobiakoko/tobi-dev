import { Outlet } from 'react-router';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
