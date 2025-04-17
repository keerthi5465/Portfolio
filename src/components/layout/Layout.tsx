
import { Navbar } from './Navbar';
import { Footer } from '../sections/Footer';
import { BackgroundScene } from '../3d/BackgroundScene';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      <BackgroundScene />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
