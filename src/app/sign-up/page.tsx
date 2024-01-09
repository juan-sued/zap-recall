import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'
import FormSignUp from './FormSignUp'

export default function SignUpPage() {
  return (
    <PageBasicTemplate
      titlePage="Cadastro"
      cardTitle="Bem-vindo!"
      cardDescription="Entre, explore e divirta-se"
      className="max-w-lg"
    >
      <FormSignUp />
    </PageBasicTemplate>
  )
}
