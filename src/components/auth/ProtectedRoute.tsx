"use client"

import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

export default function ProtectedRoute({children} : {children: React.ReactNode}){
    const [user, setUser] = useState<User | null >();
    const router = useRouter();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            } else {
                router.push("/authentication");
            }         
        });

        return () => unsubscribe();
    }, [router]);


    return children;
}