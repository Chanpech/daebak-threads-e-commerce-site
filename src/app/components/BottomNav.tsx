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
        <div>  
            <div>
                {navItems.map((item) => {
                    return (
                        <Link href={item.href}>
                            <div>
                                <item.icon />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}