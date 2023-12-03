import fs from 'fs'
import path from 'path'
import { faker } from '@faker-js/faker'
import { elos } from './data'

const playersRanking = Array.from({ length: 100 }, () => ({
  id: faker.number.int({ min: 0, max: 9999 }),
  player: faker.person.fullName(),
  elo: faker.helpers.arrayElement(elos).value,
}))

fs.writeFileSync(
  path.join(__dirname, 'players-ranking.json'),
  JSON.stringify(playersRanking, null, 2),
)

console.log('✅ Players Ranking data generated.')
