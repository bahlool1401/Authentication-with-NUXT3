// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineAppConfig } from 'nuxt/app'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],

  
  modules:[
    // "@nuxtjs/tailwindcss",
    "nuxt-server-utils",
    "@sidebase/nuxt-auth"
  ],

  nuxtServerUtils: {
    mongodbUri: process.env.MONGODB_URI,
  },
  


  //* this is for Authentication package👇👇
  auth:{
    provider:{
      type:'authjs'
    }
  },
  // authjs is a JS package which provides a different authentication services

  // typescript: {
  //   typeCheck: true,
  // },
})
