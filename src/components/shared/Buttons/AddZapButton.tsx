import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function AddZapButton({ children }: { children: ReactNode }) {
  return (
    <Button
      asChild
      className="w-fit h-full rounded-xl bg-green-400  transition-all active:scale-95 hover:scale-105 hover:bg-green-500  shadow-2xl shadow-green-950"
    >
      <Link href="/createZap">{children}</Link>
    </Button>
  )
}
