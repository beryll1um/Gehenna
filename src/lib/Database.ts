import mongoose from 'mongoose'

import Logger from '@/lib/Logger'

import { delay } from '@/lib/Utils'

export default class Database {

  constructor(protected uri: string, protected ms: number, protected logger: Logger, protected options?: mongoose.ConnectOptions) { 
    this.setupCallbacks()
  }

  public async connect() {
    return mongoose.connect(this.uri, this.options).catch((err: any) => this.logger.error(err))
  }

  protected setupCallbacks() {
    mongoose.connection.on('connected', () => this.logger.success('Connected!'))
    mongoose.connection.on('disconnected', async () => {
      this.logger.status('Reconnecting...')
      await delay(this.ms)
      this.connect()
    })
  }

}

export {
  mongoose
}