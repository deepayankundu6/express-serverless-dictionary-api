const serverlessExpress = require('@codegenie/serverless-express')
const app = require('./routes')

let serverlessExpressInstance

async function configure (event, context) {
  serverlessExpressInstance = serverlessExpress({ app })
  return serverlessExpressInstance(event, context)
}

async function lambdaHandler (event, context) {
  if (serverlessExpressInstance) return await serverlessExpressInstance(event, context)

  return configure(event, context)
}

exports.handler = lambdaHandler