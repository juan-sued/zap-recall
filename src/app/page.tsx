import AddZapAllScreenButton from '@/components/Home/AddZapAllScreenButton'
import ListZaps from '@/components/Home/ListZaps'
import Main from '@/components/layout/Main'
import LogoAndName from '@/components/shared/LogoAndName'

export default function Home() {
  return (
    <Main>
      <LogoAndName />
      <ListZaps />
      <AddZapAllScreenButton />
    </Main>
  )
}
