
import { Navbar } from './Navbar';
import { Footer } from '../sections/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-portfolio-accent6/10 to-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
