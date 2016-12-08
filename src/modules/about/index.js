import { createRoutes } from './routes'

export default ({ registerModule, registerRoutes }, options = {}, next) => {
  const { name = 'about', prefix = 'about' } = options

  registerRoutes(createRoutes({ prefix }))

  next(() => {
    __PROD__ || console.log(`use module "${name}", with prefix "${prefix}" for routes`)
  })
}