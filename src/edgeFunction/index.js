'use strict'

exports.handler = async (event) => {
    const request = event.Records[0].cf.request
    const headers = request.headers

    console.log(JSON.stringify(request))
    console.log(JSON.stringify(request.uri))

    const auPath = '/au'
    const brPath = '/br'
    const euPath = '/eu'
    const sgPath = '/sg'
    const usPath = '/us'

    if (headers['cloudfront-viewer-country']) {
        const countryCode = headers['cloudfront-viewer-country'][0].value
        if (countryCode === 'AU') {
          request.uri = auPath + request.uri
        } else if(countryCode === 'BR') {
          request.uri = brPath + request.uri
        } else if (countryCode === 'EU') {
          request.uri = euPath + request.uri
        } else if (countryCode === 'SG') {
          request.uri = sgPath + request.uri
        } else if (countryCode === 'US') {
          request.uri = usPath + request.uri
        }
    }
    console.log(`Request uri set to "${request.uri}"`)
    
    return request
}
