import { CollectionConfig } from 'payload/types';
import supabase from '../utils/supabase';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/assets',
    staticDir: 'assets',
    disableLocalStorage: true,
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      access: {
        create: () => false,
      },
      admin: {
        disabled: true,
      },
      hooks: {
        afterRead: [
          async ({ data: doc }) => {
            const { data,} = await supabase.storage
              .from(process.env.SUPABASE_BUCKET)
              .getPublicUrl(doc.filename);


            return data.publicUrl;
          },
        ],
      },
    },
  ],
};

export default Media;