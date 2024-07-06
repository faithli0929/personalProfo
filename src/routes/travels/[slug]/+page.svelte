<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { fade, fly } from 'svelte/transition';
    import { backIn, backOut, backInOut } from 'svelte/easing'
    import moment from 'moment';

    export let data;
    $:content = data.page[0]
    

</script>

<div class="space-y-10">
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

    <div class="flex flex-row max-xl:flex-col gap-2">
      {#if content.tags}
        {#each content.tags as tag}
            <p class="font-light text-xs uppercase my-auto">#{tag}</p>
        {/each}
      {/if}
    </div>
  </div>
   {#if content.content !== null}
     <p transition:fade class="text-left text-sm text-pretty pt-2">{@html content.content}</p>
     {:else}
   {/if}


</div>