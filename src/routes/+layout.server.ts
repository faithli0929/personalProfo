import type { LayoutLoad } from './$types';

import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
import { error } from '@sveltejs/kit';

export const load = (async ({fetch}) => {
    try {
    const directus = getDirectusInstance(fetch)
    const pages = await directus.request(readItems('pages'))
    const contacts = await directus.request(readItems('contacts'))
    
    return {
		global: pages,
        contacts: contacts
	}
    } catch(err) {
        console.log(err)
        throw error (404, 'Page not found');
    }
}) satisfies LayoutLoad;