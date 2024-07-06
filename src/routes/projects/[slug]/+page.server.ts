import type { PageLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';


export const load = (async ({ fetch, params, depends }) => {
  try {
    const directus = getDirectusInstance(fetch);
    const query: Query<any, any> = {
      filter: { slug: { _eq: params.slug },status:{ _eq: "published" }  }
    };
    const pageData = await directus.request(readItems('projects', query));
    return {
      page: pageData
    };
  } catch (err) {
    console.error('Error in load function:', err);
    throw error(404, 'Page not found');
  }
}) satisfies PageLoad;