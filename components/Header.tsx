'use client'

import { useSideBarStore } from '@/lib/store'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { ModeToggle } from './ModeToggle'
const Header = () => {
  const {setShowSideBar, showSideBar} = useSideBarStore();


  return (
    <header className='w-full flex justify-between px-5 gap-3 items-center h-16 shadow-md fixed top-0 left-0 right-0 bg-white dark:bg-black z-20'>
      <div className='flex items-center gap-3'>
        <Button size="icon" variant="ghost" className='h-8 w-8' onClick={() => setShowSideBar(!showSideBar)} >
          <Menu className='h-[1rem] w-[1rem]' />
        </Button>
        <Image src="/logo_light.png" alt='logo' height={45} width={149} priority/>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header