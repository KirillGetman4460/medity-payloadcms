import type { CollectionConfig } from 'payload/types'
import { publicCollection } from '../utils/publicCollection'

const Ckakra: CollectionConfig = {
  slug: 'ckakra',
  access:{
    create: () => true,
    read: publicCollection,
    update:() => true,
    delete:() => true,
    admin:() => true
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'type',
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
      name: 'category',
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
    {
      name: 'image',
      type: 'upload',
      relationTo: 'image',
      required: false,
    },
  ],
}

export default Ckakra