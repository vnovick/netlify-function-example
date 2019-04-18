exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'World'
  const request = JSON.parse(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(request.event.data)
  }
}
