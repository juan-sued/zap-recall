import FormBasicTemplate from '@/components/shared/templates/FormBasicTemplate'
import FormSignUp from './FormSignUp'

export default function SignUpPage() {
  return (
    <FormBasicTemplate
      titlePage="Login"
      cardTitle="Que bom te ver por aqui!"
      cardDescription="Entre e dê um Zap."
      className="max-w-lg"
    >
      <FormSignUp />
    </FormBasicTemplate>
  )
}
