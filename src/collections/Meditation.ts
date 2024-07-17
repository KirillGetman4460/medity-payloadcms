import type { CollectionConfig } from 'payload/types'

const Meditation: CollectionConfig = {
  slug: 'meditation',
  auth: false,
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'duration',
      type: 'number',
      label: 'Duration (minutes)',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      required: false,
    },
    {
      name: 'categoryId',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Category',
      required: true,
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default Meditation