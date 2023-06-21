
import { ENV } from '../config/config.js'
import winston from 'winston'

const winstonLoggerDev = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "debug",
    })
  ]
})

const winstonLoggerProd = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "http",
      filename: 'events.log'
    })
  ]
})

export let winstonLogger
if (ENV === 'production') {
  winstonLogger = winstonLoggerProd
} else {
  winstonLogger = winstonLoggerDev
}