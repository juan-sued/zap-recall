import zapMocks from '@/Mock/ZapMocks'
import CardListSimpleFlat from '../../../../components/shared/Cards/CardListSimpleFlat'

export function ListSimpleFlat() {
  return (
    <div className="space-y-4">
      {zapMocks.ZAP_BASIC.map((zap, index) => {
        let bgColor = 'bg-black'

        switch (zap.difficulty) {
          case 'easy':
            bgColor = 'bg-green-500 text-green-500'
            break
          case 'medium':
            bgColor = 'bg-yellow-500 text-yellow-500'
            break
          case 'hard':
            bgColor = 'bg-red-500 text-red-500'
            break
        }

        return (
          <CardListSimpleFlat
            key={index}
            title={zap.title}
            description={zap.description}
            avatarFallback={zap.category[0]}
            value={zap.percentEndings}
            className={bgColor}
          />
        )
      })}
    </div>
  )
}
