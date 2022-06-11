import { defineNuxtConfig } from 'nuxt'
const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // privateRuntimeConfig: {
  //   apiKey: API_KEY,
  //   serviceDomain: SERVICE_DOMAIN,
  // },
  // publicRuntimeConfig: {
  //   apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
  //   serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
  // },
  ssr: true,
  runtimeConfig: {
    apiKey: API_KEY,
    serviceDomain: SERVICE_DOMAIN,
    public: {
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
      serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    }
  }
})
