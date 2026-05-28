import process from 'node:process'
import { fileURLToPath, URL } from 'node:url'
import { Octokit } from '@octokit/rest'
import ElementPlus from 'unplugin-element-plus/vite'
import { defineConfig, loadEnv } from 'vitepress'

// Theme related config
import headConfig from './config/headConfig'

// Enhanced meta generation
import generateFeed from './config/hooks/generateFeed'

import generateMeta from './config/hooks/generateMeta'

// Provides how to generate Meta head tags

// Allows generation of RSS feed
import generateOgImages from './config/hooks/generateOgImages'

import markdownConfig from './config/markdownConfig'

// For use with loading Markdown plugins
import themeConfig from './config/themeConfig'

const octokit = new Octokit()
const releaseDateCache = new Map<string, string>()

const title = 'Eternity'
const description = 'Discover and read novels and more – easier than ever on your Android device.'

const env = loadEnv('', process.cwd())
const hostname: string = env.VITE_HOSTNAME || 'http://localhost:4173'

export default defineConfig({
  outDir: '../dist',
  lastUpdated: true,
  cleanUrls: true,
  title,
  description,
  sitemap: {
    hostname,
  },
  head: headConfig,
  markdown: markdownConfig,
  themeConfig,
  transformPageData: async (pageData) => {
    return pageData
  },
  transformHead: async context => generateMeta(context, hostname),
  buildEnd: async (context) => {
    generateFeed(context, hostname)
    generateOgImages(context)
  },
  vite: {
    plugins: [ElementPlus({})],
    ssr: {
      noExternal: ['element-plus'],
    },
  },
})
