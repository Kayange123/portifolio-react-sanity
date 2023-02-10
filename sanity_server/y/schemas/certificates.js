export default {
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    {
      name: 'certImage',
      title: 'Certificate Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'course',
      title: 'Course',
      type: 'string',
    },
  ],
}
