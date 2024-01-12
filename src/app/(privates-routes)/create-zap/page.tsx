import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import FormCreateZap from './FormCreateZap'

export default function CreateZapPage() {
  return (
    <PageBasicTemplate
      titlePage="Criar Zap"
      cardTitle="Rápido e Fácil"
      cardDescription="Em alguns passos você ajuda alguém a se divertir estudando."
    >
      <FormCreateZap />
    </PageBasicTemplate>
  )
}
