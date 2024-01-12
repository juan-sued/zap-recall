import { META_DATA_LIST } from '@/Mock/MetaDataMock'
import CardResume from './CardResume'
import { ClipboardList, Crown, Smile, ThumbsUp } from 'lucide-react'

export default function ListResumes() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardResume
          title="Total de Zaps"
          value={`${META_DATA_LIST.allZaps.totalZaps}`}
          valueDetail={`Uma média de ${META_DATA_LIST.allZaps.percentAverageCompletion}% de conclusões por zap.`}
        >
          <ClipboardList />
        </CardResume>
        <CardResume
          title="Total de likes"
          value={`${META_DATA_LIST.likes.totalLikes}`}
          valueDetail={`Uma média de ${META_DATA_LIST.likes.averageCompletion} likes por zap.`}
        >
          <ThumbsUp />
        </CardResume>
        <CardResume
          title="Zap campeão"
          value={`${META_DATA_LIST.bestZap.title}`}
          valueDetail={`${META_DATA_LIST.bestZap.percentCompletion}% de conclusões e ${META_DATA_LIST.bestZap.likes} likes!`}
          classNameValue="text-md"
        >
          <Crown />
        </CardResume>
        <CardResume
          title="Moral"
          value={`${META_DATA_LIST.moral.title}`}
          valueDetail={`Você tem ${META_DATA_LIST.moral.points} pontos de moral.`}
        >
          <Smile />
        </CardResume>
      </div>
    </>
  )
}
