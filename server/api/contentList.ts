import { MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'
import type { IncomingMessage, ServerResponse } from 'http'
import client from '../client'
import { Content } from '../types'



export default async (req: IncomingMessage, res: ServerResponse) => {
  const data = client.getList<Content>({
    endpoint: 'blogs',
  })
  return data
}
