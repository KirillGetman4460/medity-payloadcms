import type { CollectionConfig } from 'payload/types'

const Ckakra: CollectionConfig = {
  slug: 'ckakra',
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
      required: true,
    },
    {
      name: 'categoryId',
      type: 'relationship',
      relationTo: 'categories',
      label: 'Category',
      required: true,
    }
  ],
}

export default Ckakra