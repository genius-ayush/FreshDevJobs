import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    Contact,
    Menu,
    PackageSearch,
    X
} from 'lucide-react';
import Link from 'next/link';
import {  useRouter } from 'next/navigation';
import { CompanyLogo } from './Header';


export default function MobileNav() {
    const router = useRouter();

    return (
        <Sheet >
            <SheetTrigger
                className="border p-2.5 rounded-lg text-foreground/60 hover:dark:bg-[#191919] hover:bg-gray-100"
                aria-label="mob-nav-menu"
            >
                <Menu className="w-4 h-4" />
            </SheetTrigger>
            <SheetContent className="w-full">
                <SheetHeader className="h-fit rounded-xl border dark:border-[#1E293B]">
                    <SheetTitle className="w-full flex justify-between items-center p-3  border-b dark:border-b-[#1E293B]">
                        <CompanyLogo />
                        <SheetClose className="rounded-sm h-fit opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none  disabled:pointer-events-none data-[state=open]:bg-secondary">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                    </SheetTitle>
                    <ul className="flex flex-col gap-2 text-sm justify-items-start px-4 py-2">
                        <div className="w-full flex items-center">

                            <li className="my-1 dark:hover:bg-slate-800 hover:bg-slate-50 p-2 rounded-lg">
                                
                                    <SheetClose className='flex flex-col-reverse gap-3'>
                                        <div className='flex gap-2'>
                                        <Contact className='text-gray-400'/>
                                        <p className="dark:text-[#F8FAFC] text-[#212121] font-medium text-lg">Contact Us</p>
                                        </div>
                                        
                                        <div className='flex gap-2'>
                                        <PackageSearch className='text-gray-400 '/>
                                        <p className="dark:text-[#F8FAFC] text-[#212121] font-medium text-lg">Explore Jobs</p>
                                        </div>
                                    </SheetClose>
        
                            </li>
                        </div>
                    </ul>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}


