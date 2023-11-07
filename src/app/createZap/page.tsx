import Main from '@/components/layout/Main'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
import FormCreateZap from './FormCreateZap'

export default function CreateZapPage() {
  return (
    <Main className="animate__animated animate__fadeIn">
      <section className="titleCreateZap ">
        <h1 className="drop-shadow text-5xl">Criar Zap</h1>
      </section>
      <section className="sectionFormCreateZap h-full w-full p-5 flex justify-center">
        <Card className="max-w-5xl min-w-[350px]  h-full flex flex-col content-between shadow-md  shadow-[hsla(0,0%,0%,0)] transition-all   ">
          <CardHeader>
            <CardTitle>Rápido e Fácil</CardTitle>
            <CardDescription>
              Em apenas alguns passos, você ajuda pessoas a se divertir e
              estudar!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormCreateZap />
          </CardContent>
          <CardFooter className="text-muted-foreground  justify-center">
            &quot;O aprendizado é a única coisa que a mente nunca se cansa,
            nunca tem medo e nunca se arrepende&#46;&quot;
            <br /> &#45; Leonardo da Vinci
          </CardFooter>
        </Card>
      </section>
      <div id="down-page" className="anchor"></div>
    </Main>
  )
}
