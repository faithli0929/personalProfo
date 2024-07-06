<script lang="ts">
    import { PUBLIC_APIURL } from '$env/static/public'


    export let data;
    $:contents = data.page
    console.log(contents)

    let scrPath = PUBLIC_APIURL+ "/assets/"
    

</script>

<div class="space-y-20 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-y-4">
   {#if contents !== null}
   {#each contents as content}
   <a href ="/travels/{content.slug}" sveltekit:prefetch>
       <div class = "w-full md:w-11/12 hover:opacity-80 hover:underline mx-auto">
           <img class = "aspect-5/4 h-auto w-full object-cover rounded" src = {scrPath}{content.heroImage} alt={content.title}>
           <div class="flex flex-row justify-between items-center mt-2">
               <p class="font-light text-sm uppercase w-full">{content.title}</p>
               <div class="flex justify-end gap-2 w-full truncate">
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