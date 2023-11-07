import FormBasicTemplate from '@/components/shared/templates/FormBasicTemplate'
import FormSignUp from './FormSignUp'

export default function SignUpPage() {
  return (
    <FormBasicTemplate
      titlePage="Cadastro"
      cardTitle="Bem-vindo!"
      cardDescription="Entre, explore e divirta-se"
      className="max-w-lg"
    >
      <FormSignUp />
    </FormBasicTemplate>
  )
}
