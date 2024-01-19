import { Difficulties, IZapBasic } from '@/interfaces/zapInterfaces'
import CardZap from '../shared/Cards/CardZap'
import LoaderSpinner from '../shared/Loaders/LoaderSpinner/LoaderSpinner'

interface IListCardZaps {
  zapList: IZapBasic[] | undefined
  isFetching: boolean
  isError: boolean
}

export function ListCardsZaps({ zapList, isFetching, isError }: IListCardZaps) {
  if (zapList && zapList.length > 0) {
    return (
      <>
        <div className="listCardZaps  w-full h-full p-8 sm:p-20 ">
          <div className=" h-full grid grid-cols-1  gap-4  min-[890px]:grid-cols-2 min-[1270px]:grid-cols-3 min-[1580px]:grid-cols-4  place-items-center">
            {zapList.map((zap, index) => {
              let bgColor = 'bg-black'

              switch (zap.difficulty) {
                case Difficulties.EASY:
                  bgColor = 'text-green-500'
                  break
                case Difficulties.MEDIUM:
                  bgColor = 'text-yellow-500'
                  break
                case Difficulties.HARD:
                  bgColor = 'text-red-500'
                  break
              }

              return (
                <CardZap
                  key={index}
                  id={zap.id}
                  title={zap.title}
                  category={zap.category}
                  description={zap.description}
                  percentEndings={zap.percentEndings}
                  updatedAt={zap.updatedAt}
                  creatAt={zap.creatAt}
                  attempts={zap.attempts}
                  className={bgColor}
                />
              )
            })}
          </div>
        </div>
      </>
    )
  } else if (isFetching) {
    return (
      <>
        <div className="p-8">
          <LoaderSpinner />
        </div>
      </>
    )
  } else if (isError) {
    return (
      <>
        <div className="p-8">
          <h1>Ops!! Parece que deu um erro. Tente novamente!</h1>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="w-full h-full p-20 flex justify-center items-center">
          <div className="p-4 bg-opacity-5  bg-black rounded-lg dark:bg-white dark:bg-opacity-5 ">
            <h1>
              Ops! Parece que não existe zap com esse nome ainda... Crie um!
            </h1>
          </div>
        </div>
      </>
    )
  }
}
