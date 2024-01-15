import Link from 'next/link'
import PageBasicTemplate from '../templates/PageBasicTemplate'
import { Button } from '@/components/ui/button'

export default function ConstructionPage() {
  return (
    <PageBasicTemplate
      titlePage="Ops!!"
      cardTitle="Desculpe, ainda estamos trabalhando nessa página."
      haveMotivations={false}
    >
      <div className="flex justify-center">
        <Link className="w-full max-w-[400px]" href="/">
          <Button className="w-full" variant={'outline'}>
            Voltar
          </Button>
        </Link>
      </div>
    </PageBasicTemplate>
  )
}
