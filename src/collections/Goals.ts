import type { CollectionConfig } from 'payload/types';
import { publicCollection } from '../utils/publicCollection';

const Goal: CollectionConfig = {
  slug: 'Goals',
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
        name: 'sleep',
        type: 'text',
        label: 'sleep',  
    },
    {
        name: 'mindfulness',
        type: 'text',
        label: 'mindfulness',  
    },
    {
        name: 'better_sleep',
        type: 'checkbox',
        label: 'better_sleep',
        defaultValue: false,
    },
    {
        name: 'reduce_stress',
        type: 'checkbox',
        label: 'reduce_stress',
        defaultValue: false,
    },
    {
        name: 'declutter_mind',
        type: 'checkbox',
        label: 'declutter_mind',
        defaultValue: false,
    },
  ],
};

export default Goal;