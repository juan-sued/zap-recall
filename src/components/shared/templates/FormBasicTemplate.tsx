import Main from '@/components/layout/Main'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface IFormBasicTemplate {
  children: ReactNode
  titlePage: string
  cardTitle: string
  cardDescription: string
  className?: string
}

export default function FormBasicTemplate({
  children,
  titlePage,
  cardTitle,
  cardDescription,
  className,
}: IFormBasicTemplate) {
  return (
    <Main className="animate__animated animate__fadeIn">
      <section className="titleCreateZap ">
        <h1 className="drop-shadow text-5xl">{titlePage}</h1>
      </section>
      <section className="sectionFormCreateZap h-full w-full p-5 flex justify-center">
        <Card
          className={cn(
            'max-w-5xl min-w-[350px]  h-full flex flex-col content-between shadow-md  shadow-[hsla(0,0%,0%,0)] transition-all',
            className,
          )}
        >
          <CardHeader>
            <CardTitle>{cardTitle}</CardTitle>
            <CardDescription>{cardDescription}</CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>
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
