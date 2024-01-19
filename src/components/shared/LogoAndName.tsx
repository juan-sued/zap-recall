import { Righteous } from 'next/font/google'
import Image from 'next/image'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})
export default function LogoAndName() {
  return (
    <>
      <div className="hidden sm:flex space-x-5 w-full items-center justify-center h-[180px]">
        <Image
          src="/image/logo.png"
          width="1080"
          height="1080"
          className="animate__animated animate__fadeInBottomLeft w-36 drop-shadow-md"
          alt="Ir para Home"
          priority
        />
        <h4 className={`${righteous.className} text-7xl drop-shadow-md`}>
          ZapRecall
        </h4>
      </div>
    </>
  )
}
