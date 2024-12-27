<script lang="ts">
	let { content } = $props();
	import verified from '$lib/logos/verified.svg';
</script>

<div class="w-full rounded-xl border border-gray-300 bg-base-100 text-gray-500 flex lg:p-5 p-3">
    <figure>
        <img src={content.img} alt="Shoes" class="w-72 aspect-square rounded-xl object-cover" />
    </figure>
    <div class="flex flex-col justify-between px-5 lg:gap-y-0 gap-y-2">
        <h2 class="line-clamp-2 lg:h-16 h-12 font-semibold text-gray-700 lg:text-xl text-base">{content.title}</h2>
        <section class="flex items-center gap-x-2">
            <div class="h-4 w-4 rounded-full bg-green-500"></div>
            <section class="flex items-center gap-x-1 lg:text-lg text-sm">
                <p>{content.author.name}</p>
                {#if content.author.verified}
                    <img src={verified} alt="" class="h-4 w-4" />
                {/if}
            </section>
        </section>
        <p class="lg:text-lg text-sm flex gap-x-1">
            Terkumpul <span class="font-bold text-green-600">{content.collected}</span>
        </p>
    </div>
</div>