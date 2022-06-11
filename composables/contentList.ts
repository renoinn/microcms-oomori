import { createClient, MicroCMSListContent, MicroCMSListResponse } from 'microcms-js-sdk'

type Content = {
  id: string;
  title: String;
  contents: String;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "oomori",
  apiKey: "",
});

export const contentList =async (): Promise<MicroCMSListResponse<Content>> => {
  const res = await client.getList({
    endpoint: 'blogs',
  })
  return res
}

export {
  Content
}
