import { CollectionConfig } from 'payload/types'
import { publicCollection } from '../utils/publicCollection'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access:{
    create: () => true,
    read:publicCollection,
    update:() => true,
    delete:() => true,
    admin:() => true
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      label: 'Email',
      required: false,
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'FirstName',
      required: false,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'LastName',
      required: false,
    },
    {
      name: 'dateBirthday',
      type: 'text',
      label: 'DateBirthday',
      required: false,
    },
    {
      name: 'premium',
      type: 'checkbox',
      label: 'Premium',
      defaultValue: false,
      required: false,
    },
  ],
}

export default Users
