import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'
import { publicCollection } from '../utils/publicCollection';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'), 
    adminThumbnail: ({ doc }) =>
      `https://medity.slan.studio/media/${doc.filename}`,
  },
  access: {
    create: publicCollection,
    read: publicCollection,
    update: publicCollection,
    delete: publicCollection
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      access: {
        create: publicCollection,
      },
      admin: {
        disabled: true,
      },
    },
  ],
};

export default Media;
