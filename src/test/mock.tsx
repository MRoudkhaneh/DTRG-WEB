import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactNode } from 'react'
import { ApiBaseurl } from 'utils'

export const mockServer = (
  url: string,
  options?: {
    get?: Record<string, any> | boolean
    post?: Record<string, any> | boolean
    put?: Record<string, any> | boolean
    delete?: Record<string, any> | boolean
  }
) =>
  setupServer(
    rest.get(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(
        ctx.json(
          options?.get ?? {
            title: 'Lord of the Rings',
            author: 'J. R. R. Tolkien',
          }
        )
      )
    }),
    rest.post(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(ctx.json(options?.post ?? req.body))
    }),
    rest.put(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(ctx.json(options?.put ?? req.body))
    }),
    rest.delete(`${ApiBaseurl.dev}/${url}`, (req, res, ctx) => {
      return res(ctx.json(options?.delete ?? 'Success delete'))
    })
  )

export const wrapper = ({ children }: { children: ReactNode }) => (
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
