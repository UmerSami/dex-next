 const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants')
    
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  
    const env = {
        ASSETS_BUCKET: (() => {
        if (isDev) return 'https://s3.us-east-1.amazonaws.com/assets.standardsolutions.tech/pokemon/assets/'
        if (isProd) {
          return 'https://s3.us-east-1.amazonaws.com/assets.standardsolutions.tech/pokemon/assets/'
        }
        if (isStaging) return 'https://s3.us-east-1.amazonaws.com/assets.standardsolutions.tech/pokemon/assets/'
        return 'ASSETS_BUCKET:not (isDev,isProd && !isStaging,isProd && isStaging)'
      })()
    }
  
  
    // next.config.js object
    return {
       env
    }
  } 