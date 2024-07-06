<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { fade, fly, blur } from 'svelte/transition';
    import { backIn, backInOut, backOut } from 'svelte/easing'
    import { PUBLIC_APIURL } from '$env/static/public'
    let scrPath = PUBLIC_APIURL+ "/assets/"

    export let data;
    $:contents = data.page
    console.log(contents)

    
    

</script>

<div class="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-y-4 space-y-20">
    
   {#if contents !== null}
        {#each contents as content}
        <a href ="/projects/{content.slug}">
            <div class = "w-full md:w-11/12 hover:opacity-80 hover:underline mx-auto">
                <img class = "aspect-5/4 h-auto w-full object-cover rounded" src = {scrPath}{content.heroImage} alt={content.title}>
                <div class="flex flex-row justify-between items-center mt-2">
                    <p class="font-light text-sm uppercase w-full">{content.title}</p>
                    <div class="flex w-full justify-end gap-2 truncate">
                        {#each content.tags as tag}
                            <p class="font-light text-xs uppercase my-auto">#{tag}</p>
                        {/each}
                    </div>
                </div>
            </div>
        </a>
        {/each}
     {:else}
   {/if}
</div>