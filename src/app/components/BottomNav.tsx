'use client'

import { User, House, Search } from 'lucide-react';
import Link from 'next/link';

export default function BottomNav(){

    const navItems = [
        {
            icon: House,
            label: 'Home',
            href:'/',
        },
        {
            icon: Search,
            label: 'Search',
            href:'/search',
        },
        {
            icon: User,
            label: 'Authentication',
            href:'/authentication',
        }

    ];
    return(
        <div className='fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none'>  
    <div className='max-w-lg mx-auto flex items-center justify-around pointer-events-auto'>
        {navItems.map((item) => {
            return (
                <Link href={item.href} className='relative bg-white/80 backdrop-blur-lg rounded-full p-1 shadow-lg' key={item.href}>
                    <div className='flex flex-col items-center justify-center w-16 h-16 rounded-full hover:scale-110 hover:bg-gray-100 hover:shadow-lg transition-all duration-200'>
                        <item.icon className='h-6 w-6' />
                        {/* <span>{item.label}</span> */}
                    </div>
                </Link>
            )
        })}
    </div>
</div>
    );
}