import { Righteous } from 'next/font/google'
import Image from 'next/image'

const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400'],
})
export default function LogoAndNameHeader() {
  return (
    <>
      <div className="flex space-x-5 w-1/3 items-center">
        <Image
          src="/image/logo.png"
          width="1080"
          height="1080"
          className="animate__animated animate__fadeInLeftBig w-12 drop-shadow-sm

          "
          alt="Ir para Home"
          loading="eager"
        />
        <h4 className={`${righteous.className} text-sm`}>
          <strong
            className="font-light text-xl drop-shadow-sm

"
          >
            ZapRecall
          </strong>
          <br />
          by Juan Sued
        </h4>
      </div>
    </>
  )
}
