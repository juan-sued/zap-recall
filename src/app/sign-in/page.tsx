import FormSignIn from './FormSignIn'
import PageBasicTemplate from '@/components/shared/templates/PageBasicTemplate'

export default function SignInPage() {
  return (
    <PageBasicTemplate
      titlePage="Login"
      cardTitle="Que bom te ver por aqui!"
      cardDescription="Entre e dê um Zap."
      className="max-w-lg"
    >
      <FormSignIn />
    </PageBasicTemplate>
  )
}
