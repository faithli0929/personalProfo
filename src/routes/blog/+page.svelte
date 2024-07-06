<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { fade, fly } from 'svelte/transition';
    import { backIn, backOut,backInOut } from 'svelte/easing'
    import { PUBLIC_APIURL } from '$env/static/public'
	import Separator from '$lib/components/ui/separator/separator.svelte';


    export let data;
    $:contents = data.page
    console.log(contents)

    let scrPath = PUBLIC_APIURL+ "/assets/"
    

</script>

<div class="space-y-20 flex flex-col">
   {#if contents !== null}
        {#each contents as content}
        <a href ="/blog/{content.slug}" sveltekit:prefetch>
            <div class="w-full md:w-11/12 hover:opacity-80 hover:underline mx-auto flex flex-row justify-between align-middle gap-20">
                <div class="flex flex-col justify-center gap-1 flex-grow">
                    <h1 class="font-black text-lg mt-2">{content.title}</h1>
                    <p class="flex-shrink-0 text-sm font-light line-clamp-1">{@html content.content}</p>
                    {#if content.tags}
                        {#each content.tags as tag }
                            <p class="font-thin text-xs">#{tag}</p>
                        {/each}
                    {/if}
                </div>
                <div class="flex flex-col items-end flex-shrink-0">
                    <img class="rounded object-contain" style="width: 160px; height: 107px;" src="{scrPath}{content.heroImage}" alt="{content.title}">
                </div>
            </div>
            
        </a>
        <Separator class="-scale-75"/>
        {/each}
     {:else}
   {/if}
</div>

<style>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
}
</style>