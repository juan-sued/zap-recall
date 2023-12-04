import FormSignIn from './FormSignIn'
import FormBasicTemplate from '@/components/shared/templates/FormBasicTemplate'

export default function SignInPage() {
  return (
    <FormBasicTemplate
      titlePage="Login"
      cardTitle="Que bom te ver por aqui!"
      cardDescription="Entre e dê um Zap."
      className="max-w-lg"
    >
      <FormSignIn />
    </FormBasicTemplate>
  )
}
