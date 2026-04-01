// This is the blueprint for your Sanity Dashboard.
// You can copy these into your Sanity Studio project.

export const siteSchemas = [
  {
    name: 'hero',
    title: 'Home Hero Section',
    type: 'document',
    fields: [
      { name: 'title', title: 'Main Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle (Small Text)', type: 'string' },
      { name: 'description', title: 'Description Paragraph', type: 'text' },
      { name: 'heroImage', title: 'Background Image', type: 'image' }
    ]
  },
  {
    name: 'service',
    title: 'Services',
    type: 'document',
    fields: [
      { name: 'title', title: 'Service Title', type: 'string' },
      { name: 'description', title: 'Short Description', type: 'text' },
      { name: 'icon', title: 'Icon (e.g., Shield, Heart)', type: 'string' },
      { name: 'details', title: 'Full Details', type: 'text' },
      { name: 'image', title: 'Service Image', type: 'image' }
    ]
  },
  {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
      { name: 'name', title: 'Client Name', type: 'string' },
      { name: 'role', title: 'Role/Company', type: 'string' },
      { name: 'text', title: 'Review Content', type: 'text' },
      { name: 'stars', title: 'Rating (1-5)', type: 'number' },
      { name: 'photo', title: 'Client Photo', type: 'image' }
    ]
  }
];
