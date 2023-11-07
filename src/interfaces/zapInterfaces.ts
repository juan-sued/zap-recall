export interface IZapBasic {
  id: number
  title: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  percentEndings: number
  attempts: number
  creatAt: string
  updatedAt: string
}
