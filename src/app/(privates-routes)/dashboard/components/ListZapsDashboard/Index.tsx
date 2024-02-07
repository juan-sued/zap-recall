import CardListSimpleFlat from '@/components/shared/Cards/CardListSimpleFlat'
import { IMetaData } from '@/interfaces/metaDataInterface'

import { Difficulties } from '@/interfaces/zapInterfaces'
import { useQueryClient } from '@tanstack/react-query'

export function ListSimpleFlat() {
  const queryClient = useQueryClient()
  const metaData: IMetaData | undefined = queryClient.getQueryData(['metaData'])

  if (metaData) {
    return (
      <div className="space-y-4">
        {metaData?.zaps.recentsCreatedZaps.map((zap, index) => {
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

          const endings = zap.endings ?? 0
          const attempts = zap.attempts ?? 0

          const percentEndings = isNaN(endings / attempts)
            ? 0
            : Math.round((endings / attempts) * 100) ?? 0

          return (
            <CardListSimpleFlat
              key={index}
              title={zap.title ?? ''}
              description={zap.description ?? ''}
              avatarFallback={zap?.category?.title[0] ?? ''}
              value={percentEndings}
              className={bgColor}
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className=" w-full   h-[350px] flex justify-center items-center">
        <h1>Não há dados para monstrar</h1>
      </div>
    )
  }
}
