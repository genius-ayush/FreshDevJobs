// import Icon from '@/components/ui/icon';
// import { footerItems, socials } from '@/lib/constant/app.constant';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" md:h-20 h-40 dark:bg-[#020817] relative w-full p-3 border-t dark:border-t-[#1E293B] border-t-[#E2E8F0] flex md:flex-row flex-col items-center md:justify-between justify-around md:px-14 px-3">
      <ul className="flex items-center text-sm dark:text-[#94A3B8] text-[#64748B] font-medium">
        
          <li className="px-2 flex gap-4">
            <Link href={"/hey"}>About Us </Link>
            <Link href={"/hey"}>Terms of Services</Link>
            <Link href={"/hey"}>Privacy Policy </Link>
          </li>
      </ul>
      <div className="flex items-center md:flex-row flex-col-reverse">
        <p className="text-[#94A3B8]">© 2025 SearchJobs. All rights reserved.</p>
        <div className="flex items-center ml-4 md:mb-0 mb-3 text-[#64748B]">
          
            <Link
              href={"/hey"}
              className="p-3 rounded-full border mx-2 hover:bg-slate-50 duration-150 ease-in-out transition"
              
            >
              X
            </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
