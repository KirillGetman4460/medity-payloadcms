import type { CollectionConfig } from 'payload/types'

const Note: CollectionConfig = {
  slug: 'note',
  auth: false,
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