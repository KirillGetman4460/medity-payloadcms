import type { CollectionConfig } from 'payload/types'

const Question: CollectionConfig = {
  slug: 'question',
  auth: false,
  admin: {
    useAsTitle: 'question', 
  },
  access:{
    create: () => true,
    read:() => true,
    update:() => true,
    delete:() => true,
    admin:() => true
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      label: 'Question',
      required: true,
    },
    {
        name: 'options',
        type: 'array',
        label: 'Options',
        fields: [
          {
            name: 'option',
            type: 'text',
            label: 'Option',
            required: true,
          },
        ],
        required: true,
      },
  ],
}

export default Question