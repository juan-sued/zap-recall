import CardResume from './CardResume'
import { ClipboardList, Crown, Smile, ThumbsUp } from 'lucide-react'
import { useQueryClient } from '@tanstack/react-query'
import { IMetaData } from '@/interfaces/metaDataInterface'

export default function ListResumes() {
  const queryClient = useQueryClient()
  const metaData: IMetaData | undefined = queryClient.getQueryData(['metaData'])

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardResume
          title="Total de Zaps"
          value={metaData?.zaps.totalZaps ?? 0}
          valueDetail={`Uma média de ${
            metaData?.zaps.averageCompletion ?? 0
          } de conclusões por zap`}
        >
          <ClipboardList />
        </CardResume>
        <CardResume
          title="Total de likes"
          value={metaData?.likes.totalLikes ?? 0}
          valueDetail={`Uma média de ${
            metaData?.likes.averageLikes ?? 0
          } likes por zap`}
        >
          <ThumbsUp />
        </CardResume>
        <CardResume
          title="Zap campeão"
          value={metaData?.zaps.championZap.quiz.title ?? 'Nenhum'}
          valueDetail={`${metaData?.zaps.championZap.percentConclusion}% de conclusões e ${metaData?.zaps.championZap.totalLikes} likes`}
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
