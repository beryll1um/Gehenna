import "module-alias/register"

import express from 'express'

import Database from '@/lib/Database'
import Logger from "@/lib/Logger"

const database = new Database('mongodb://gehenna:password@database:27017/gehenna', 2500, new Logger('Database'), {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const http = express()
const httpPort = process.env['PORT'] ? process.env['PORT'] : 3000
const httpLogger = new Logger('HTTP')

async function main() {

  database.connect()

  http.get('/', (req, res) => res.send('Hello World!'))
  
  http.listen(httpPort, () => {
    httpLogger.success(`Listening at 'http://localhost:${httpPort}'`)
  })

}

main()