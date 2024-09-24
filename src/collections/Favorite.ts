import type { CollectionConfig } from 'payload/types';
import { publicCollection } from '../utils/publicCollection';

const Favorite: CollectionConfig = {
  slug: 'Favorite',
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
        name: 'meditationId',
        type: 'number',
        label: 'meditationId',  
    },
  ],
};

export default Favorite;