import React, { useEffect, useState } from "react"
import { Menu, X, ChevronDown } from 'lucide-react';
import { SchoolData } from "../data/Data.js";

function Header(){
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSubMenuOpened, setSubMenuOpened] = useState(false);
    const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', setIsScrolled(window.scrollY > 50))
        return () => window.removeEventListener('scroll', setIsScrolled(window.scrollY > 50))
    }, []);

    return (
        <header>
            <div>
                {/**Logo */}
                <div>
                    <div>{SchoolData.logoText}</div>
                    <span>{SchoolData.logoName}</span>
                </div>
                {/**Menu */}
                <div>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Academics</a>
                    <a href="#">Faculty</a>
                    <a href="#">Contact</a>
                </div>
                {/**Button */}
                <div>
                    <a href="#">Request Brochure</a>
                </div>
            </div>
        </header>
    );
}
export default Header