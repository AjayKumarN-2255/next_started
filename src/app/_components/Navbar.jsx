import React from 'react'
import Link from 'next/link'
import LogOutBtn from './LogOutBtn';

function Navbar() {
    const session = false;
    return (
        <nav className='bg-white shadow-sm font-bold'>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href={'/'} className='text-xl font-bold text-blue-600'>
                    Contact Manager
                </Link>
                <div className='flex items-center space-x-4'>
                    {
                        session ? (
                            <>
                                <Link href={'/contact'}
                                    className='hover:text-blue-600 mr-8'>
                                    Contacts
                                </Link>
                                <LogOutBtn />
                            </>
                        )
                            :
                            (
                                <>
                                    <Link href={'/login'}
                                        className='hover:text-blue-600 mr-8'>
                                        login
                                    </Link>
                                    <Link href={'/register'}
                                        className='hover:text-blue-600 mr-8'>
                                        register
                                    </Link>
                                </>
                            )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar