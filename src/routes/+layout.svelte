<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	let y = $state(0)
</script>
<svelte:window bind:scrollY={y}/>
<section class="lg:max-w-screen-sm mx-auto h-screen bg-base-100 shadow-xl overflow-y-scroll">
	<Navbar	/>
	{@render children()}
</section>
