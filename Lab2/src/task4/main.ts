import { Virus } from '@/task4/virus.js'

const grandChildren1 = new Virus(
  0.1,
  2,
  'Grandchildren 1',
  'Some type of virus'
)
const grandChildren2 = new Virus(
  0.2,
  2,
  'Grandchildren 1',
  'Some type of virus'
)

const children1 = new Virus(1, 20, 'Children 1', 'Some type of virus', [
  grandChildren1,
  grandChildren2
])
const children2 = new Virus(1, 20, 'Children 2', 'Some type of virus')

const parent = new Virus(2, 30, 'Parent', 'Some type of virus', [
  children1,
  children2
])

const clonedParent = parent.clone()
console.log(clonedParent)
clonedParent.children.forEach((children, children_idx) =>
  console.log(
    `Grandchildren of children №${children_idx + 1}`,
    children.children
  )
)
