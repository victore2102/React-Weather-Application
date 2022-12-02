const fs = require('fs')
const path = `./.env`
const vars = `
REACT_APP_WEATHER_API_KEY=${process.env.API_KEY_NETLIFY}\n
`
fs.writeFileSync(path, vars)