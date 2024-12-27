<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	let y = $state(0)
</script>
<svelte:window bind:scrollY={y}/>
<section class="lg:max-w-screen-sm max-w-screen-md mx-auto min-h-screen">
	<Navbar	/>
	{@render children()}
</section>
