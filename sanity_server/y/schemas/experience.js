export default {
  name: 'experience',
  title: 'Experiences',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'works',
      title: 'Works',
      type: 'reference',
    },
  ],
}
