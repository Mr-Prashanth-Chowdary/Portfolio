
import { useState } from 'react';
import MiniNav from './MiniNav';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const title = {
        name: "PC",
        code: "007"
    }
    const navItems = [
        {
            label: "ABOUT ME",
            href: "/"
        },
        {
            label: "PORTFOLIO",
            href: "/"
        },
        {
            label: "CONTACT ME",
            href: "/"
        },
        {
            label: "LET’S CONNECT",
            href: "/"
        }
    ]

    return (
        <div>
            <nav className='absolute z-10 w-full inset-x-0 px-4'>
                <ul className='flex justify-between w-full items-start'>
                    <h1 className={`${isMenuOpen ? "text-primary-foreground" : "text-primary"} text-2xl font-bold`}>
                        {title.name}
                        <p className='leading-2'>{title.code}</p>
                    </h1>

                    {/* Desktop Navigation */}
                    {navItems.map((item) => (
                        <li key={item.label} className='list-none hidden lg:flex gap-6 text-sm'>
                            <a href={item.href} className='hover:text-primary transition-colors'>
                                {`[ ${item.label} ]`}
                            </a>
                        </li>
                    ))}

                    {/* Mobile Menu Button */}
                    <li className='lg:hidden list-none text-sm'>
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className= {`${isMenuOpen ? "text-primary-foreground" : "text-primary"} hover:text-primary transition-colors cursor-pointer`}
                        >
                            {isMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}
                        </button>
                    </li>
                </ul>
            </nav>
             <MiniNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navItems={navItems} />
        </div>
    )
}
