import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import ContentMenu from './ContentMenu'

export default function MenuMobile() {
  return (
    <>
      <nav className="menuMobile block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <ContentMenu />
        </Sheet>
      </nav>
    </>
  )
}
