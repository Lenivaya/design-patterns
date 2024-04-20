import chalk from 'chalk'
import { Aircraft, CommandCenter, Runway } from '@/task2/implementations'

const airCrafts = [
  new Aircraft('Boeing 737'),
  new Aircraft('Boeing 777'),
  new Aircraft('Boeing 747')
]
const runways = [new Runway(), new Runway()]
const commandCenter = new CommandCenter().addRunways(runways)

try {
  const runway = runways[0]
  const airCraft = airCrafts[0]

  airCraft.mediator = commandCenter

  // runway is free
  runway.highlightStatus()
  // Aircraft takes off
  // runway will be busy for the time
  // needed for take-off (1s)
  await airCraft.TakeOff({
    flightRaceName: 'Berlin -> London',
    runwayId: runway.id
  })

  // runway is free again
  runway.highlightStatus()

  // Aircraft lands
  // runway is busy
  await airCraft.Land({
    flightRaceName: 'London -> Berlin',
    runwayId: runway.id
  })
  runway.highlightStatus()
} catch (e) {
  console.log(chalk.bold.red(`Error: ${e}`))
}
