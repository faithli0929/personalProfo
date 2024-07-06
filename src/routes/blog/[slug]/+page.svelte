<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { fade, fly } from 'svelte/transition';
  import { backIn, backOut, backInOut } from 'svelte/easing'
  import moment from 'moment';
  import { PUBLIC_APIURL } from '$env/static/public'

    export let data;
    $:content = data.page[0]
    
    let scrPath = PUBLIC_APIURL+ "/assets/"
</script>
  

<div class="space-y-10">
  <div class="flex flex-row items-end w-full">
    <img class="rounded object-cover" style="width: 100%; height: 150px;" src="{scrPath}{content.heroImage}" alt="{content.title}">
  </div>   
  <div class = "flex flex-row justify-between w-full items-baseline">
    <div class="flex flex-col space-y-4">
      <h1 class = "font-bold uppercase">{content.title}</h1>
      <div class = "flex max-xl:flex-col gap-2">
        <h3 class="font-light text-xs uppercase my-auto">
          created at: {moment(content.date_created).format('YYYY-MM-DD')}
        </h3>
        {#if content.date_updated}
          <h3 class="font-light text-xs uppercase my-auto">
            updated at: {moment(content.date_updated).format('YYYY-MM-DD')}
          </h3>
        {/if}
      </div>
    </div>
    {#if content.tags}
      <div class="flex flex-row max-xl:flex-col gap-2">
        {#each content.tags as tag}
            <p class="font-light text-xs uppercase my-auto">#{tag}</p>
        {/each}
      </div>
    {/if}
  </div>
   {#if content.content !== null}
     <p class="text-left text-sm text-pretty pt-2">{@html content.content}</p>
     {:else}
   {/if}


</div>