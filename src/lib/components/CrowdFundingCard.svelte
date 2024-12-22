<script lang="ts">
	let content = $props()
</script>

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
