import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
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
      name: 'googleAccessToken',
      type: 'text',
      label: 'Google Access Token',
      required: false,
    }
  ],
}

export default Users
