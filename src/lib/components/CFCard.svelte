<script lang="ts">
	let { content } = $props();
	import verified from '$lib/logos/verified.svg';
</script>

<div class="w-80 rounded-xl border border-gray-300 bg-base-100 text-gray-500 lg:w-96">
	<figure>
		<img src={content.img} alt="Shoes" class="h-52 w-full rounded-t-xl object-cover" />
	</figure>
	<div class="flex flex-col justify-between gap-y-3 px-5 py-4">
		<h2 class="line-clamp-2 h-14 font-semibold text-gray-700 text-lg">{content.title}</h2>
		<section class="flex items-center gap-x-2">
			<div class="h-4 w-4 rounded-full bg-green-500"></div>
			<section class="flex items-center gap-x-1">
				<p>{content.author.name}</p>
				{#if content.author.verified}
					<img src={verified} alt="" class="h-4 w-4" />
				{/if}
			</section>
		</section>
		<p>
			Terkumpul <span class="font-bold text-green-600">{content.collected}</span>
		</p>
	</div>
</div>
