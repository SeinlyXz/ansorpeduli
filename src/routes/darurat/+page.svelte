<script lang="ts">
	import { page } from "$app/stores";
	import DaruratNav from "$lib/components/DaruratNav.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import bencana from "$lib/images/bencana.png";
    import kebakaran from "$lib/images/kebakaran.png";
    import keamanan from "$lib/images/keamanan.png";
    import ambulance from "$lib/logos/Ambulance.png";
    import ketertiban from "$lib/images/ketertiban.png";
    
    let pathname = $page.url.pathname;

    let datas = [
        {
            emergence: "BENCANA",
            icon: bencana,
            slug: "bencana",
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.",
            mitra: [
                'BNPB','BMKG','SAR','BANSER'
            ]
        },
        {
            emergence: "KEBAKARAN",
            slug: "kebakaran",
            icon: kebakaran,
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.",
            mitra: [
                'POLISI',
                'BANSER',
            ]
        },
        {
            emergence: "KEAMANAN",
            slug: "keamanan",
            icon: keamanan,
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.",
            mitra: [
                'AMBULAN',
                'RUMAH SAKIT',
                'PMI',
                'BANSER'
            ]
        },
        {
            emergence: "KESEHATAN",
            slug: "kesehatan",
            icon: ambulance,
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.",
            mitra: [
                'DAMKAR',
                'PLN',
                'BANSER',
            ]
        },
        {
            emergence: "KETERTIBAN",
            slug: "ketertiban",
            icon: ketertiban,
            description: "Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.",
            mitra: [
                'POLISI',
                'SATPOL PP',
                'BANSER',
            ]
        },
    ]
</script>
<Seo title="Ansor Darurat" />
<DaruratNav {pathname}/>
<section class="px-[16px] pt-[16px] pb-[32px] flex flex-col lg:gap-y-5 gap-y-2">
    {#each datas as data}
        <a href="/darurat/{data.slug}" class="rounded-[8px] border border-gray-300 hover:bg-[#EDFFF5] group hover:border-[#AFFFD5] ease-in-out duration-300">
            <section class="rounded-t-xl flex gap-x-2 items-center border-b-[1px] border-gray-300 group-hover:border-[#AFFFD5] px-[16px] py-[12px]">
                <img src="{data.icon}" alt="" class="h-[28px] w-[28px]" />
                <h3 class="font-semibold text-[16px]">
                    {data.emergence}
                </h3>
            </section>
            <section class="px-[16px] py-[14px]">
                <p class="text-[16px]">
                    {data.description}
                </p>
                <section class="flex gap-x-[10px] mt-3 items-center">
                    <p class="text-[14px] font-semibold">
                        MITRA
                    </p>
                    <section class="flex flex-wrap gap-1">
                        {#each data.mitra as mitra}
                            <p class="bg-[#DEF7EC] text-[#03543F] px-[10px] py-[2px] rounded-[6px] text-center font-semibold lg:text-[14px] text-[12px]"> 
                                {mitra}
                            </p>
                        {/each}
                    </section>
                </section>
            </section>
        </a>
    {/each}
</section>