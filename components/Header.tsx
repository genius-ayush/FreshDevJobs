'use client';
import { Moon, Sun } from 'lucide-react'; 
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react' ;
import MobileNav from './MobileNav';

export const CompanyLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={'/main.svg'}
        alt="100xJobs logo"
        width={30}
        height={30}
        className="rounded"
        priority
      />
      <h3 className="text-xl font-bold">
        Search<span className="text-blue-700">Jobs</span>
      </h3>
    </div>
  );
};

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed w-full z-50 backdrop-blur-lg border">
        <div className="flex h-[72px] w-full items-center justify-between lg:px-20 px-3 shadow-sm">
          <Link href="/" className="p-2.5">
            <CompanyLogo />
          </Link>
          <div className="flex items-center">

            <ul className="md:flex items-center gap-4 text-sm lg:gap-6 hidden mx-4">Explore jobs</ul>
            <ul className="md:flex items-center gap-4 text-sm lg:gap-6 hidden mx-4">Contact us</ul>
            <div className="flex items-center">
              {mounted && (
                <button
                  className="border p-2.5 rounded-lg text-foreground/60 hover:dark:bg-[#191919] hover:bg-gray-100 md:mx-4 outline-none"
                  onClick={toggleTheme}
                  aria-label="theme"
                >
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>

            <div className="md:hidden flex justify-center ml-3">
              <MobileNav/>
            
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;