<script lang="ts">
	interface CardProps {
		title: string;
		description: string;
	}
	let contents = [
		{
			title: 'Shoes',
			description: 'If a dog chews shoes whose shoes does he choose?'
		},
		{
			title: 'Shoes',
			description: 'If a dog chews shoes whose shoes does he choose?'
		},
		{
			title: 'Shoes',
			description: 'If a dog chews shoes whose shoes does he choose?'
		},
		{
			title: 'Shoes',
			description: 'If a dog chews shoes whose shoes does he choose?'
		}
	];
</script>

<section class="grid grid-cols-1 p-10 gap-4">
	{#each contents as content}
		<div class="card bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
					alt="Shoes"
					class="h-32 w-full object-cover"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">{content.title}</h2>
				<p>{content.description}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Pilih</button>
				</div>
			</div>
		</div>
	{/each}
</section>
