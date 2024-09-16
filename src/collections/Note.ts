import type { CollectionConfig } from 'payload/types';
import { publicCollection } from '../utils/publicCollection';

const Note: CollectionConfig = {
  slug: 'note',
  auth: false,
  access: {
    create: publicCollection,
    read: publicCollection,
    update: publicCollection,
    delete: publicCollection,
    admin: publicCollection,
  },
  fields: [
    {
      name: 'userId',
      type: 'text',
      label: 'userId',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'content',
      type: 'text',
      label: 'Content',
    },
  ]
};

export default Note;
