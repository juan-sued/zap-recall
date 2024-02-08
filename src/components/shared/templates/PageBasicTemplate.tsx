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

interface IPageBasicTemplate {
  children?: ReactNode
  titlePage?: string
  cardTitle?: string
  cardDescription?: string
  cardFooter?: string
  className?: string
  haveMotivations?: boolean
}

export default function PageBasicTemplate({
  children,
  titlePage,
  cardTitle,
  cardDescription,
  className,
  haveMotivations = true,
}: IPageBasicTemplate) {
  return (
    <Main className="animate__animated animate__fadeIn space-y-9">
      <section className="titleCreateZap  w-full flex justify-center ">
        <h1 className="drop-shadow w-full text-center h-full text-2xl sm:text-4xl lg:text-5xl break-words">
          {titlePage}
        </h1>
      </section>
      <section className="sectionFormCreateZap h-full w-full p-5 flex justify-center">
        <Card
          className={cn(
            'max-w-5xl min-w-[350px]  h-full flex flex-col content-between shadow-md  shadow-[hsla(0,0%,0%,0)] transition-all',
            className,
          )}
        >
          <CardHeader>
            <CardTitle className="text-slate-800 break-words dark:text-slate-200 ">
              {cardTitle}
            </CardTitle>
            <CardDescription className="text-md  break-words">
              {cardDescription}
            </CardDescription>
          </CardHeader>
          <CardContent>{children}</CardContent>

          {haveMotivations ? (
            <CardFooter className="text-muted-foreground  justify-center">
              &quot;O aprendizado é a única coisa que a mente nunca se cansa,
              nunca tem medo e nunca se arrepende&#46;&quot;
              <br /> &#45; Leonardo da Vinci
            </CardFooter>
          ) : (
            ''
          )}
        </Card>
      </section>
      <div id="down-page" className="anchor"></div>
    </Main>
  )
}
