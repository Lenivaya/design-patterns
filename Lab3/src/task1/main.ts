import {
  ILogger,
  Logger,
  FileLoggerAdapter,
  FileWriter
} from '@/task1/index.js'

const logger = new Logger()
logger.log('This is a log message')
logger.error('This is an error message')
logger.warn('This is a warning message')

const fileLoggerAdapter: ILogger = new FileLoggerAdapter(new FileWriter())
fileLoggerAdapter.log('This is a log message in file')
fileLoggerAdapter.error('This is an error message in file')
fileLoggerAdapter.warn('This is a warning message in file')
