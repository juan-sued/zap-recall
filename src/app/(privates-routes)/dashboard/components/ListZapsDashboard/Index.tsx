import zapMocks from '@/Mock/ZapMocks'
import CardListSimpleFlat from '@/components/shared/Cards/CardListSimpleFlat'

import { Difficulties } from '@/interfaces/zapInterfaces'

export function ListSimpleFlat() {
  return (
    <div className="space-y-4">
      {zapMocks.ZAP_BASIC.map((zap, index) => {
        let bgColor = 'bg-black'

        switch (zap.difficulty) {
          case Difficulties.EASY:
            bgColor = 'bg-green-500 text-green-500'
            break
          case Difficulties.MEDIUM:
            bgColor = 'bg-yellow-500 text-yellow-500'
            break
          case Difficulties.HARD:
            bgColor = 'bg-red-500 text-red-500'
            break
        }

        return (
          <CardListSimpleFlat
            key={index}
            title={zap.title}
            description={zap.description}
            avatarFallback={zap.category[0]}
            value={zap.endings}
            className={bgColor}
          />
        )
      })}
    </div>
  )
}
