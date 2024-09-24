import type { CollectionConfig } from 'payload/types';
import supabase from '../utils/supabase';

const Profile: CollectionConfig = {
  slug: 'profiles',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'ID',
      admin: {
        disabled: true, 
      },
      hooks: {
        beforeChange: [
          ({ data, operation }) => {
            if (operation === 'create' && !data.id) {
              data.id = crypto.randomUUID(); 
            }
          },
        ],
      },
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email',
    },
    {
      name: 'full_name',
      type: 'text',
      label: 'Full Name',
    },
    {
      name: 'birthday',
      type: 'text',
      label: 'Birthday',
    },
    {
      name: 'gender',
      type: 'text',
      label: 'Gender',
    },
    {
      name: 'premium',
      type: 'checkbox',
      label: 'Premium',
      defaultValue: false,
    },
  ],
};

export default Profile;