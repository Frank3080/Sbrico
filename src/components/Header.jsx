import React from 'react'

export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Scrib<span className='text-purple-400 bold'>O</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="/" className='flex items-center gap-2 specialBtn px-3 py-2 rounded-lg text-purple-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </a>
            </div>
        </header>
    )
}