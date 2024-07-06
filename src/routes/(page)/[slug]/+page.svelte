<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { fade, fly } from 'svelte/transition';
    import { backIn, backOut, backInOut } from 'svelte/easing'

    export let data;
    $:content = data.page[0]


</script>


<div class="">
   {#if content.content !== null}
     <p class="text-left text-sm text-pretty pt-2">{@html content.content}</p>
     {:else}
   {/if}
</div>