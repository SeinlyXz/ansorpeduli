<script lang="ts">
	import { page } from "$app/stores";
	import DaruratNav from "$lib/components/DaruratNav.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import arrow_left from '$lib/icons/ArrowLeft.svg';
    
    let pathname = $page.url.pathname;

    let datas = [
        {
            emergence: "BENCANA",
            slug: "bencana",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset."
        },
        {
            emergence: "KEBAKARAN",
            slug: "kebakaran",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset."
        },
        {
            emergence: "KEAMANAN",
            slug: "keamanan",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset."
        },
        {
            emergence: "KESEHATAN",
            slug: "kesehatan",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset."
        },
        {
            emergence: "KETERTIBAN",
            slug: "ketertiban",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset."
        },
    ]
</script>
<Seo title="Ansor Darurat" />
<DaruratNav {pathname}/>
<section class="px-[16px] py-[16px] flex flex-col lg:gap-y-5 gap-y-2">
    {#each datas as data}
        <a href="/darurat/{data.slug}" class="rounded-xl border border-gray-300 hover:bg-gray-100">
            <section class="rounded-t-xl flex gap-x-3 items-center border-b-[1px] border-gray-300 px-[16px] py-[12px]">
                <div class="rounded-lg p-3 bg-green-500">
                </div>
                <h3 class="font-semibold">
                    {data.emergence}
                </h3>
            </section>
            <section class="px-[16px] py-[12px]">
                <p>
                    {data.description}
                </p>
            </section>
        </a>
    {/each}
</section>