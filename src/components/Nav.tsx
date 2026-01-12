
export default function Nav() {
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
    <div className='min-h-24'>
        <nav>
            <ul className='flex justify-between w-full'>
                <h1 className='text-2xl font-bold'>
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

                {/* Mobile Menu Placeholder */}
                <li className='lg:hidden list-none text-sm'>
                    <a href="#" className='hover:text-primary transition-colors'>
                        [ MENU ]
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}
