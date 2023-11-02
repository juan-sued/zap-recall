'use client'

import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import ButtonsMenu from './ButtonsMenu'
import { Button } from '@/components/ui/button'
import { Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function ContentMenu() {
  const LINK_WHATSAPP =
    'https://api.whatsapp.com/send?phone=5521984980723&text=Ol%C3%A1,%20Juan!%20Tenho%20uma%20prop%C3%B3sta%20irrecus%C3%A1vel!'

  return (
    <SheetContent className="bg-red-500 bg-opacity-70 shadow transition delay-200  border-0  opacity-100 animate__animated animate__fadeInRight text-white">
      <SheetHeader>
        <SheetTitle className="text-white">Menu</SheetTitle>
        <SheetDescription className="text-white">
          &quot;O maior vencedor é aquele que nunca para de tentar&quot;&#46;
          <br />
          <br />
          &#45; Albert Einstein
        </SheetDescription>
      </SheetHeader>
      <ButtonsMenu />
      <SheetFooter>
        <SheetClose asChild>
          <Link href={LINK_WHATSAPP} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" type="submit" className="w-full">
              <div className="row flex gap-2 justify-center items-center">
                <Smartphone />
                <h4>Entrar em contato</h4>
              </div>
            </Button>
          </Link>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  )
}
