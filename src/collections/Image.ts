import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Image: CollectionConfig = {
  slug: 'image',
  upload: {
    staticDir: path.resolve(__dirname, '../../image'), // Путь к папке media
    adminThumbnail: ({ doc }) =>
      `https://medity.slan.studio/media/${doc.filename}`, // Замените на ваш домен
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    // Поля для коллекции Image
  ],
};

export default Image;
