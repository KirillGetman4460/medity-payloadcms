import path from 'path'
import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seo from '@payloadcms/plugin-seo'

import Users from './collections/Users'
import Meditation from './collections/Meditation'
import Chakra from './collections/Chakra'
import Note from './collections/Note'
import Categories from './collections/Categories'
import Question from './collections/Quiz'
import Media from './collections/Media'
import Image from './collections/Image'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Meditation, Chakra, Note, Categories, Media, Question, Image],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seo({
      uploadsCollection: 'media',
    }),
  ],
  cors: "*",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})