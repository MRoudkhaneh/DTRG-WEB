import axios from 'axios'

const isProd = process.env.variable === 'prod'

axios.defaults.baseURL = isProd
  ? 'https://wa-syd-prod-kl-dtrgcrmbe.azurewebsites.net'
  : 'https://wa-syd-dev-kl-dtrgcrmbe.azurewebsites.net'

const Request = axios.create()

Request.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    // config.headers['Content-Type'] = 'application/json'
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { Request }
