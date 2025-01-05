<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
	let y = $state(0)
</script>
<svelte:window bind:scrollY={y}/>
<section class="bg-[#f7f7f7]">
    <Navbar />
    <section class="max-w-[480px] mx-auto min-h-screen bg-white overflow-x-hidden">
        {@render children()}
    </section>
</section>
