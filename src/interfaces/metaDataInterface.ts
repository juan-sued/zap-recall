import { IZap } from './zapInterfaces'

export interface ILikeMetaData {
  totalLikes: number
  averageLikes: number
  totalDislikes: number
  averageDislikes: number
}

export interface IChampionZap {
  quiz: IZap
  totalLikes: number
  percentConclusion: number
}

interface IPlayersPerMonth {
  name: string
  total: number
}
interface IZapMetaData {
  totalZaps: number
  averageCompletion: number
  championZap: IChampionZap
  recentsCreatedZaps: Partial<IZap>[]
  playersCount: number
  playersPerMonth: IPlayersPerMonth[]
}
export interface IMetaData {
  likes: ILikeMetaData
  zaps: IZapMetaData
}
