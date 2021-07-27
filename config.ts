import dotenv from 'dotenv'
dotenv.config()

interface IConfig {
  port: number
  isProduction: boolean
  isDevelopment: boolean
  isTestEnvironment: boolean
}

export const initConfig = (): IConfig => {
  const { NODE_ENV, PORT } = process.env
  console.log({ PORT, NODE_ENV })
  switch (NODE_ENV) {
    case 'development':
      return {
        isProduction: false,
        isDevelopment: true,
        isTestEnvironment: false,
        port: Number(PORT) || 3001
      }
    case 'production':
      return {
        isProduction: true,
        isDevelopment: false,
        isTestEnvironment: false,
        port: Number(PORT) || 3001
      }
    case 'test':
      return {
        isProduction: false,
        isDevelopment: false,
        isTestEnvironment: true,
        port: Number(PORT) || 4000
      }
    default:
      return {
        isProduction: false,
        isDevelopment: true,
        isTestEnvironment: false,
        port: Number(PORT) || 3001
      }
  }
}

export const config = initConfig()
