import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'olpgvq7b', // Set to owner's project ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source).auto('format').fit('max');

// Helper function to fetch data
export async function getSiteContent() {
  const query = `*[_type in ["hero", "service", "testimonial"]]`;
  const data = await client.fetch(query);
  return data;
}
