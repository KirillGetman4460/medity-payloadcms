import type { CollectionConfig } from 'payload/types';
import { publicCollection } from '../utils/publicCollection';

const Ckakra: CollectionConfig = {
  slug: 'ckakra',
  access: {
    create: () => true,
    read: publicCollection,
    update: () => true,
    delete: () => true,
    admin: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'meditations',
      type: 'relationship',
      relationTo: 'meditation',
      label: 'Meditations',
      required: true,
      hasMany: true,   
    },
    {
      name: 'affirmations',
      type: 'array',
      label: 'Affirmations',
      fields: [
        {
          name: 'affirmation',
          type: 'text',
          label: 'Affirmation',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'image',
      required: false,
    },
  ],
};

export default Ckakra;