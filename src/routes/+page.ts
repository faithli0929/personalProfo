import type { PageLoad } from './$types';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';


export const load = (async ({ fetch}) => {
  try {
    const directus = getDirectusInstance(fetch);
    const pageData = await directus.request(readItems('projects'));
    return {
      page: pageData
    };
  } catch (err) {
    console.error('Error in load function:', err);
    throw error(404, 'Page not found');
  }
}) satisfies PageLoad;