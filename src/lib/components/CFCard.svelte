<script lang="ts">
	let { content } = $props();
	import verified from '$lib/logos/verified.svg';
</script>

<div class="lg:w-[372px] w-[340px] rounded-[8px] border border-gray-300 bg-base-100 text-gray-500">
	<figure>
		<img src={content.img} alt="Shoes" class="h-52 w-full rounded-t-[8px] object-cover" />
	</figure>
	<div class="flex flex-col justify-between gap-y-[16px] p-[16px]">
		<section class="flex flex-col gap-y-[8px]">
			<h2 class="line-clamp-2 h-14 font-semibold text-gray-700 text-lg">{content.title}</h2>
			<section class="flex items-center gap-x-2">
				<div class="h-4 w-4 rounded-full bg-green-500"></div>
				<section class="flex items-center gap-x-1 font-medium text-[14px]">
					<p>{content.author.name}</p>
					{#if content.author.verified}
						<img src={verified} alt="" class="h-4 w-4" />
					{/if}
				</section>
			</section>
		</section>
		<p>
			Terkumpul <span class="font-bold text-green-600">{content.collected}</span>
		</p>
	</div>
</div>
