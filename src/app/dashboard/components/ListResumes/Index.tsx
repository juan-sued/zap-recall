import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CardResume from './CardResume'
import { List } from 'lucide-react'

interface IMetaDataList {
  totalAttempt: number
  peopleReached: number
}

const META_DATA_LIST: IMetaDataList = {
  totalAttempt: 420,
  peopleReached: 230,
}

export default function ListResumes() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardResume
          title="Total de Tentativas"
          value={`${META_DATA_LIST.totalAttempt}`}
          valueDetail="Número de tentativas em seus Zaps!"
        >
          <List />
        </CardResume>
        <CardResume
          title="Total de Pessoas Alcançadas"
          value={`${META_DATA_LIST.peopleReached}`}
          valueDetail="Número de pessoas que você ajudou!"
        >
          <List />
        </CardResume>
        <CardResume
          title="Total de Pessoas Alcançadas"
          value={`${META_DATA_LIST.peopleReached}`}
          valueDetail="Número de pessoas que você ajudou!"
        >
          <List />
        </CardResume>
        <CardResume
          title="Total de Pessoas Alcançadas"
          value={`${META_DATA_LIST.peopleReached}`}
          valueDetail="Número de pessoas que você ajudou!"
        >
          <List />
        </CardResume>
      </div>
    </>
  )
}
