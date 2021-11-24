import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'
import { ApiBaseurl } from 'utils'

const mockServer = (
  url: string,
  options?: {
    get?: { res?: Record<string, any>; status?: number }
    post?: { res?: Record<string, any>; status?: number }
    put?: { res?: Record<string, any>; status?: number }
    delete?: { res?: Record<string, any>; status?: number }
  }
) =>
  setupServer(
    rest.get('*', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json('Success get'))
    }),
    rest.get(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(
        ctx.status(options?.get?.status || 200),
        ctx.json(options?.get?.res ?? 'Success get all')
      )
    }),
    rest.post(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(
        ctx.status(options?.post?.status || 200),
        ctx.json(options?.post?.res ?? req.body)
      )
    }),
    rest.put(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(
        ctx.status(options?.put?.status || 200),
        ctx.json(options?.put?.res ?? req.body)
      )
    }),
    rest.delete(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(
        ctx.status(options?.delete?.status || 200),
        ctx.json(options?.delete?.res ?? 'Success delete')
      )
    })
  )

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider
    client={
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
    }
  >
    {children}
  </QueryClientProvider>
)

const mockCycles = (worker: any) => {
  beforeAll(() => worker.listen())
  afterAll(() => worker.close())
  afterEach(() => worker.resetHandlers())
}

export { wrapper, mockServer, rest, mockCycles }
