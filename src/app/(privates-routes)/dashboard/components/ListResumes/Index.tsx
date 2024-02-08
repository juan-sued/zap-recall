import CardResume from './CardResume'
import { ClipboardList, Crown, Smile, ThumbsUp } from 'lucide-react'
import { IChampionZap, ILikeMetaData } from '@/interfaces/metaDataInterface'

interface IListResumes extends ILikeMetaData {
  totalZaps: number
  averageCompletion: number
  championZap: IChampionZap
}
export default function ListResumes({
  totalZaps,
  averageCompletion,
  totalLikes,
  averageLikes,
  championZap,
}: IListResumes) {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardResume
          title="Total de Zaps"
          value={totalZaps}
          valueDetail={`Uma média de ${averageCompletion} de conclusões por zap`}
        >
          <ClipboardList />
        </CardResume>
        <CardResume
          title="Total de likes"
          value={totalLikes}
          valueDetail={`Uma média de ${averageLikes} likes por zap`}
        >
          <ThumbsUp />
        </CardResume>
        <CardResume
          title="Zap campeão"
          value={championZap.quiz?.title}
          valueDetail={`${championZap.percentConclusion}% de conclusões e ${championZap.totalLikes} likes`}
          classNameValue="text-md"
        >
          <Crown />
        </CardResume>
        <CardResume
          title="Moral"
          value={'Bom'}
          valueDetail={`Você tem ${'75'} pontos de moral`}
        >
          <Smile />
        </CardResume>
      </div>
    </>
  )
}
