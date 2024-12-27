<script lang="ts">
	let { content } = $props()
	import verified from "$lib/logos/verified.svg";
</script>

<div class="bg-base-100 border border-gray-300 text-gray-500 lg:w-96 w-80 rounded-xl">
	<figure>
		<img
			src="{content.img}"
			alt="Shoes"
			class="h-52 w-full object-cover rounded-t-xl"
		/>
	</figure>
	<div class="px-5 py-4 flex flex-col gap-y-3 justify-between">
		<h2 class="font-semibold text-gray-600 h-12 line-clamp-2">{content.title}</h2>
		<section class="flex items-center gap-x-2">
			<div class="bg-green-500 rounded-full w-4 h-4"></div>
			<section class="flex items-center gap-x-1">
				<p>{content.author}</p>
				{#if content.verified}
					<img src="{verified}" alt="" class="w-4 h-4" />
				{/if}
			</section>
		</section>
		<p>
			Terkumpul <span class="font-bold text-green-600">{content.collected}</span>
		</p>
	</div>
</div>
