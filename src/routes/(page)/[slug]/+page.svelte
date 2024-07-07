<script lang="ts">

    export let data;
    $:content = data.page[0]


</script>


<div class="">
   {#if content.content !== null}
     <p class="text-left text-sm text-pretty pt-2">{@html content.content}</p>
     {:else}
   {/if}
</div>