const config = {
  port: process.env.PORT || 3000,
  isProduction: process.env.NODE_ENV === 'production',
  apiUrl: process.env.API_URL || ''
}

export { config }
