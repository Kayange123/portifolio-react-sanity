export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
    },
    {
      name: 'imageURL',
      title: 'ImageUrl',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
}
