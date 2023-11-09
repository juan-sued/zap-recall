export default interface IMetaData {
  bestZap: {
    id: number
    title: string
    percentCompletion: number
    likes: number
  }
  allZaps: { totalZaps: number; percentAverageCompletion: number }
  likes: { totalLikes: number; averageCompletion: number }
  moral: {
    title: string
    points: number
  }
}
