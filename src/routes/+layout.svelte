<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	let y = $state(0)
</script>
<svelte:window bind:scrollY={y}/>
<section class="bg-[#f7f7f7]">
	<section class="lg:max-w-screen-sm max-w-screen-sm mx-auto min-h-screen bg-white">
		<Navbar	/>
		{@render children()}
	</section>
</section>
