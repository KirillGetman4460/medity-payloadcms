import type { CollectionConfig } from 'payload/types';
import { publicCollection } from '../utils/publicCollection';

const Meditation: CollectionConfig = {
  slug: 'meditation',
  auth: false,
  access: {
    create: () => true,
    read: publicCollection,
    update: () => true,
    delete: () => true,
    admin: () => true,
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
      name: 'mainCategory',
      type: 'select',
      label: 'Main Category',
      required: true,
      options: [
        { label: 'Sleep', value: 'sleep' },
        { label: 'Relax', value: 'relax' },
      ],
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
};

export default Meditation;
