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
  percentEndings: number
  attempts: number
  creatAt: string
  updatedAt: string
}
