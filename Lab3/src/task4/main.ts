import { SmartTextChecker, SmartTextReaderLocker } from '@/task4/index.js'

const logTitle = (title: string) => console.log(`\n==== ${title} ====\n`)

try {
  const textChecker = new SmartTextChecker()
  const textLocker = new SmartTextReaderLocker(/.restricted/)

  logTitle('SmartTextChecker')
  await textChecker.readText('example_files/sample.txt')

  logTitle('SmartTextReaderLocker')
  await textLocker.readText('example_files/sample.txt')
  await textLocker.readText('example_files/restricted.txt')
} catch (e) {
  console.error("Don't worry, be happy", e)
}
