<script lang="ts">
	let { content } = $props();
	import verified from '$lib/logos/verified.svg';
</script>

<div class="w-full rounded-[8px] border border-gray-300 bg-base-100 text-gray-500 flex p-3">
    <figure class="w-[200px] lg:w-[175px]">
        <img src={content.img} alt="Shoes" class="w-[102px] h-[102px] aspect-square rounded-[8px] object-cover" />
    </figure>
    <div class="flex flex-col justify-between ps-3 gap-y-2">
        <section class="flex flex-col gap-y-2">
            <h2 class="line-clamp-2 h-12 font-semibold text-gray-700">{content.title}</h2>
            <section class="flex items-center gap-x-2">
                <div class="h-4 w-4 rounded-full bg-green-500"></div>
                <section class="flex items-center gap-x-1 text-[14px]">
                    <p>{content.author.name}</p>
                    {#if content.author.verified}
                        <img src={verified} alt="" class="h-4 w-4" />
                    {/if}
                </section>
            </section>
        </section>
        <p class="text-[14px] flex gap-x-1">
            Terkumpul <span class="font-bold text-green-600">{content.collected}</span>
        </p>
    </div>
</div>