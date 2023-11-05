import AddZapAllScreenButton from '@/components/Home/AddZapAllScreenButton'
import ListZaps from '@/components/Home/ListZaps'
import LogoAndName from '@/components/shared/LogoAndName'

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between pt-16 mt-7  ">
      <LogoAndName />
      <ListZaps />
      <AddZapAllScreenButton />
    </main>
  )
}
