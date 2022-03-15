import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const links = [
        { name: 'Home', url: '/' },
        { name: 'Transcript', url: '/transcript' },
        { name: 'Account', url: '/account' },
        { name: 'Contact', url: '/contact' },
    ]

    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)

    const intercept = (e) => {
        e.preventDefault()
        setIsOpen(false)
        router.push(e.target.href)
    }

    return (

        <div className='w-full py-3 md:py-0 dark:bg-brand-dark dark:text-brand'>

            {/* Desktop Menu */}
            <nav>
                <ul className="hidden md:flex justify-between items-center ml-4 w-max">
                    {links.map(l => (
                        <li key={l.name}>
                            <Link href={l.url}>
                                <a
                                    href={l.url}
                                    className={`${router.pathname === l.url ? 'active-nav' : ''} border-b-2 border-transparent hover:border-b-2 hover:border-brand-dark dark:hover:border-b-2 dark:hover:border-brand transition-all p-4 block`}>

                                    {l.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <nav>
                {/* Mobile menu */}
                {isOpen &&
                    <ul className='md:hidden left-0 right-0 top-0 bottom-0 pt-20 z-10 text-brand-dark bg-white dark:bg-brand-dark dark:text-gray-300 relative h-screen'>
                        {links.map(path => (
                            <li key={path.name}>
                                <a
                                    href={path.url}
                                    onClick={intercept}
                                    className={`${router.pathname === path.url && 'active-nav shadow-sm'} 
                                w-full block text-2xl md:text-4xl text-center leading-loose px-8 py-2 md:py-8 
                                hover:bg-brand-dark hover:text-brand dark:hover:bg-brand dark:hover:text-brand-dark transition-all`}>
                                    {path.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                }

                {/* Mobile Hamburger Button */}
                <div className='flex md:hidden justify-between ml-4 w-max space-x-6'>
                    <button className='outline-none' onClick={() => setIsOpen(!isOpen)} aria-label='Open Mobile Navigation'>
                        {!isOpen ?
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-12 w-12 text-brand-dark dark:text-brand hover:opacity-80' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'>
                                <path d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                            :
                            <svg xmlns='http://www.w3.org/2000/svg' className='absolute top-4 left-4 z-10 h-12 w-12 text-brand-dark hover:opacity-80 dark:text-brand' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        }
                    </button>
                </div>

            </nav>
        </div>
    )
}

export default Nav
