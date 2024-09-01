import type { CollectionConfig } from 'payload/types'
import { publicCollection } from '../utils/publicCollection'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: publicCollection,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}

export default Categories