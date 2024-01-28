"use client";
import { useEffect } from 'react';
import NavBar from "@/components/navbar/NavBar"
import Footer from "@/components/footer/Footer"

export default function page() {
    useEffect(() => {
        // Redirect to a different website
        window.location.href = "https://v1.swastikdan.in/projects/api-doc/random-joke-api";
    }, []);

    return (
        <>
            <NavBar/>
            <main className="h-screen ">
                <div className="text-center py-40 ">
                    This page has moved to a new location. Redirecting to 
                    <span className="text-mono animate-pulse">https://v1.swastikdan.in/projects/api-doc/random-joke-api</span>
                </div>
            </main>
            <Footer/>
        </>
    )
}