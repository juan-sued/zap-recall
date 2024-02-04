import { ICategory } from './categories'
import { IUser } from './userInterfaces'

export enum Difficulties {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export interface IZapBasic {
  id: number
  title: string
  description: string
  category: string
  difficulty: Difficulties
  endings: number
  attempts: number
  creatAt: string
  updatedAt: string
}

export interface IQuestion {
  id: number
  question: string
  response: string
}

export interface IQuestions {
  id: number
  question: string
  response: string
}

export interface IZap {
  id: number
  title: string
  description: string
  attempts: number
  percentEndings: number
  difficulty: Difficulties
  category: ICategory
  user: IUser
  questions: IQuestions[]
  isLiked: boolean | null
}
