<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { onMount } from "svelte";
	import { page } from '$app/stores';


	let rootPath = '';

	$: {
	rootPath = $page.url.pathname;
	}
	console.log($page.url.pathname)

let windowWidth = 0;

const updateWindowWidth = () => {
	windowWidth = window.innerWidth;
};

onMount(() => {
	updateWindowWidth();
	window.addEventListener('resize', updateWindowWidth);

	return () => {
		window.removeEventListener('resize', updateWindowWidth);
	};
});
	

	let openDrawer = false;
	function setDrawer() {
		openDrawer = !openDrawer;
	}
	
	export let data;

	const navs = data.global

	const contacts = data.contacts
	console.log(contacts)



	let chevron;

	function scrollToSection() {
    const targetSection = document.getElementById('target-section');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const url = import.meta.env.VITE_APP_URL; // 加上網址
  const title = 'Faith 邁向工程師之路'; // 加上標題
  $: description = navs.find(item => item.slug === 'about').seo
</script>


<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- 加上關鍵字 -->
  <meta name="keywords" content="前端 後端 全端 網頁設計 接案 個人部落 旅行" />
  <!-- 加上作者 -->
  <meta name="author" content="Faith LI" /> 
  <meta name="robots" content="index, follow" />
  <meta name="og:title" content={title} />
  <meta name="og:description" content={description} />
  <meta name="og:type" content="website" />
  <meta name="og:url" content={url} />
  <!-- 加上封面 -->
  <meta name="og:image" content="{url}/assets/b3b43c14-1a27-4a48-9925-2170a3793641" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <!-- 加上封面 -->
  <meta name="twitter:image" content="{url}/assets/b3b43c14-1a27-4a48-9925-2170a3793641" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</svelte:head>



	{#if $page.url.pathname == '/'}
	<div class="w-screen h-screen flex f-screen justify-center fixed top-0 bg-[#e6e3d3] hover:opacity-95">
		<div class="my-auto animate-pulse">
		<svg width="135" height="101.25" viewBox="0 0 1080 810" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M94 723.411C94 723.411 132.325 121.69 360.942 90.101C767.686 33.8958 633.6 572.247 732.345 675.33C828.088 775.279 987 686.01 987 686.01" stroke="black" stroke-width="15" stroke-miterlimit="10" stroke-linecap="round"/>
			<path d="M732.345 675.33C732.345 675.33 526.198 597.492 400.689 500.309C275.172 403.135 227.99 200.295 227.99 200.295" stroke="black" stroke-width="15" stroke-miterlimit="10" stroke-linecap="round"/>
			<path d="M856.082 606.254C856.082 594.517 865.593 585.006 877.33 585.006C889.066 585.006 898.578 594.517 898.578 606.254C898.578 617.991 889.066 627.502 877.33 627.502C865.593 627.502 856.082 617.991 856.082 606.254Z" fill="black"/>
		</svg>
		<button type="button" bind:this={chevron} on:click={scrollToSection}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100"
				height="100"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="0.2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-chevron-down">
				<path d="m6 9 6 6 6-6"/>
			</svg>
		</button>
		</div>
	</div>
	{/if}

{#if openDrawer}
	<div class= "bg-slate-50 w-full h-full z-50 fixed inset-0 flex flex-col justify-between" transition:fade="{{ duration: 300}}">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class = "flex flex-row justify-end mx-10 mt-12 hover:opacity-60" on:click={setDrawer} >
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		</div>
		<div class = "flex flex-col h-full justify-evenly gap-4">
			{#each navs as nav}
				<a href="/{nav.slug}" on:click={setDrawer}>
					<nav class = "uppercase font-light hover:font-normal hover:underline text-center" sveltekit:prefetch>{nav.slug}</nav>
				</a>
			{/each}
			
		</div>
		<div class="bg-white flex w-full h-[10%] rounded-t-sm">
			<div id = 'contactIcon' class = 'flex w-full justify-evenly my-auto gap-4'>
				{#each contacts as contact}
					<a id = {contact.slug} href = {contact.url} class="hover:opacity-50">
						{@html contact.icon}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}
{#if $page.url.pathname == '/'}
<div id="target-section" class= 'rounded relative z-10 mt-[36rem] max-xl:mt-[48rem] pt-12 bg-white'>
	
	<div class = "grid grid-row-1 max-xl:grid-row max-xl:grid-rows-10 xl:grid-cols-5 min-h-screen mx-10 xl:mx-28 my-12 align-top xl:justify-between xl:space-x-24">
		{#if windowWidth < 1280}
			<div class = "xl:hidden mb-12 flex flex-auto justify-between align-bottom">
				<a href="/" sveltekit:prefetch>
					<svg width="55" height="43.75" viewBox="0 0 1080 810" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M94 723.411C94 723.411 132.325 121.69 360.942 90.101C767.686 33.8958 633.6 572.247 732.345 675.33C828.088 775.279 987 686.01 987 686.01" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
						<path d="M732.345 675.33C732.345 675.33 526.198 597.492 400.689 500.309C275.172 403.135 227.99 200.295 227.99 200.295" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
						<path d="M856.082 606.254C856.082 594.517 865.593 585.006 877.33 585.006C889.066 585.006 898.578 594.517 898.578 606.254C898.578 617.991 889.066 627.502 877.33 627.502C865.593 627.502 856.082 617.991 856.082 606.254Z" fill="black"/>
						</svg>
				</a>
				{#if openDrawer == false}
					<Button variant="ghost" class="relative inset-x-auto" on:click={setDrawer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify" transition:fade><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg></Button>
				{/if}
			</div>
			{:else}
			<div class = "space-y-10 flex flex-col justify-start">
				<a href="/" sveltekit:prefetch>
					<svg width="90" height="67.5" viewBox="0 0 1080 810" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M94 723.411C94 723.411 132.325 121.69 360.942 90.101C767.686 33.8958 633.6 572.247 732.345 675.33C828.088 775.279 987 686.01 987 686.01" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
						<path d="M732.345 675.33C732.345 675.33 526.198 597.492 400.689 500.309C275.172 403.135 227.99 200.295 227.99 200.295" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
						<path d="M856.082 606.254C856.082 594.517 865.593 585.006 877.33 585.006C889.066 585.006 898.578 594.517 898.578 606.254C898.578 617.991 889.066 627.502 877.33 627.502C865.593 627.502 856.082 617.991 856.082 606.254Z" fill="black"/>
						</svg>
						
				</a>
				<div class = "mt-6 flex flex-col justify-evenly gap-4">
					{#each navs as nav}
							<a href="/{nav.slug}">
								<nav class = "uppercase font-light hover:font-normal hover:underline"sveltekit:prefetch>{nav.slug}</nav>
							</a>
					{/each}
					<div id = 'contactIconHome' class = 'flex justify-start gap-4 mt-4'>
						{#each contacts as contact}
							<a id = {contact.slug} href = {contact.url} class="hover:opacity-50">
								{@html contact.icon}
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/if}
		<div class = "max-xl:row-start-2 max-xl:row-end-10 xl:col-start-2 xl:col-end-6">
			<slot></slot>
		</div>
	</div>
	<footer class = "flex flex-row items-center justify-center bg-white z-10">
		<p class="font-light uppercase text-xs my-12"><a href="https://tegusu.com/">Copyright © faithli All Rights Reserved.</a></p>
	</footer>
</div>
{:else}
<div class = "grid grid-row-1 max-xl:grid-row max-xl:grid-rows-10 xl:grid-cols-5 min-h-screen mx-10 xl:mx-28 my-12 align-top xl:justify-between xl:space-x-24">
	{#if windowWidth < 1280}
		<div class = "xl:hidden mb-12 flex flex-auto justify-between align-bottom">
			<a href="/" sveltekit:prefetch>
				<svg width="55" height="43.75" viewBox="0 0 1080 810" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M94 723.411C94 723.411 132.325 121.69 360.942 90.101C767.686 33.8958 633.6 572.247 732.345 675.33C828.088 775.279 987 686.01 987 686.01" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
					<path d="M732.345 675.33C732.345 675.33 526.198 597.492 400.689 500.309C275.172 403.135 227.99 200.295 227.99 200.295" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
					<path d="M856.082 606.254C856.082 594.517 865.593 585.006 877.33 585.006C889.066 585.006 898.578 594.517 898.578 606.254C898.578 617.991 889.066 627.502 877.33 627.502C865.593 627.502 856.082 617.991 856.082 606.254Z" fill="black"/>
					</svg>
			</a>
			{#if openDrawer == false}
				<Button variant="ghost" class="relative inset-x-auto" on:click={setDrawer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify" transition:fade><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg></Button>
			{/if}
		</div>
		{:else}
		<div class = "space-y-10 flex flex-col justify-start">
			<a href="/" sveltekit:prefetch>
				<svg width="90" height="67.5" viewBox="0 0 1080 810" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M94 723.411C94 723.411 132.325 121.69 360.942 90.101C767.686 33.8958 633.6 572.247 732.345 675.33C828.088 775.279 987 686.01 987 686.01" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
					<path d="M732.345 675.33C732.345 675.33 526.198 597.492 400.689 500.309C275.172 403.135 227.99 200.295 227.99 200.295" stroke="black" stroke-width="20" stroke-miterlimit="10" stroke-linecap="round"/>
					<path d="M856.082 606.254C856.082 594.517 865.593 585.006 877.33 585.006C889.066 585.006 898.578 594.517 898.578 606.254C898.578 617.991 889.066 627.502 877.33 627.502C865.593 627.502 856.082 617.991 856.082 606.254Z" fill="black"/>
					</svg>
			</a>
			<div class = "mt-6 flex flex-col justify-evenly gap-4">
				{#each navs as nav}
						<a href="/{nav.slug}">
							<nav class = "uppercase font-light hover:font-normal hover:underline" sveltekit:prefetch>{nav.slug}</nav>
						</a>
				{/each}
				<div id = 'contactIcon' class = 'flex justify-start gap-4 mt-4'>
					{#each contacts as contact}
						<a id = {contact.slug} href = {contact.url} class="hover:opacity-50">
							{@html contact.icon}
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}
	<div class = "max-xl:row-start-2 max-xl:row-end-10 xl:col-start-2 xl:col-end-6">
		<slot></slot>
	</div>
</div>
<footer class = "flex flex-row items-center justify-center bg-white z-10">
	<p class="font-light uppercase text-xs my-12"><a href="https://tegusu.com/">Copyright © faithli All Rights Reserved.</a></p>
</footer>

{/if}
<button type = "button" class="fixed bottom-[10%] right-[10%] z-30 hover:opacity-40" on:click={scrollToTop}>
	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>
</button>



