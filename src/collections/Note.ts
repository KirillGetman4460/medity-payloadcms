import type { CollectionConfig } from 'payload/types'

const Note: CollectionConfig = {
  slug: 'note',
  auth: false,
  access:{
    create: () => true,
    read:() => true,
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
      name: 'content',
      type: 'text',
      label: 'Content',
      required: true,
    },
  ],
}

export default Note