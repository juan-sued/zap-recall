import FormCreateZap from './FormCreateZap'
import FormBasicTemplate from '@/components/shared/templates/FormBasicTemplate'

export default function CreateZapPage() {
  return (
    <FormBasicTemplate
      titlePage="Criar Zap"
      cardTitle="Rápido e Fácil"
      cardDescription="Em alguns passos você ajuda alguém a se divertir estudando."
    >
      <FormCreateZap />
    </FormBasicTemplate>
  )
}
