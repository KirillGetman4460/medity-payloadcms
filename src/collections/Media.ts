import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    adminThumbnail: ({ doc }) =>
      `https://google.com/custom-path-to-file/${doc.filename}`,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
  ],
}