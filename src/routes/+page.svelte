<script>
	import EmergencyCard from "$lib/components/EmergencyCard.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import banner from "$lib/images/Banner.png";
    import warning from "$lib/logos/Warning.png";
    import arrow from "$lib/logos/arrow-narrow-right.svg";

    import gift from "$lib/logos/Gift.png";
    import cap from "$lib/logos/Cap.png";
    import ambulance from "$lib/logos/Ambulance.png";
    import sirine from "$lib/logos/Sirine.png";
	import CrowdFundingCard from "$lib/components/CrowdFundingCard.svelte";

    const care_categories = [
        {
            caption: 'Social',
            icon: gift,
        },
        {
            caption: 'Pendidikan',
            icon: cap,
        },
        {
            caption: 'Kesehatan',
            icon: ambulance,
        },
        {
            caption: 'Bencana',
            icon: sirine,
        }
    ]

    const crowdfunding = [
        {
            title: "Crowdfunding",
            description: "Crowdfunding",
        },
        {
            title: "Crowdfunding",
            description: "Crowdfunding",
        },
		{
            title: "Crowdfunding",
            description: "Crowdfunding",
        }
    ]

</script>
<Seo title="Ansor Peduli" />
<section class="flex flex-col gap-y-10 px-5">
    <section class="">
        <img src="{banner}" alt="Banner" class="w-full rounded-xl lg:h-80 h-60 object-cover" />
        <section class="flex justify-center mt-3 gap-x-3">
            <button class="w-10 h-2 bg-gray-200 rounded-xl" aria-label="1"></button>
            <button class="w-10 h-2 bg-green-500 rounded-xl" aria-label="2"></button>
            <button class="w-10 h-2 bg-gray-200 rounded-xl" aria-label="3"></button>
        </section>
    </section>
    <section class="">
        <section class="bg-[#E22020] lg:px-10 lg:p-10 p-5 rounded-xl flex items-center relative overflow-hidden">
            <section class="w-[80%] flex flex-col gap-y-3">
                <h1 class="lg:w-80 w-52 font-semibold text-white lg:text-2xl">
                    Siap siaga untuk Anda! Hubungi SIGAB kapan saja, di mana saja.
                </h1>
                <button class="bg-white text-black rounded-xl px-4 py-2 w-44 flex gap-x-3 items-center justify-center">
                    Lapor Sigab
                    <img src="{arrow}" alt="" />
                </button>
            </section>
            <section class="w-[20%]">
                <img src="{warning}" alt="" class="relative z-50">
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-40 lg:w-28 lg:h-28 w-20 h-20 rounded-full bg-red-700 opacity-100"></div>
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-30 lg:w-44 lg:h-44 w-36 h-36 rounded-full bg-red-700 opacity-60"></div>
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-20 lg:w-60 lg:h-60 w-52 h-52 rounded-full bg-red-700 opacity-30"></div>
            </section>
        </section>
    </section>
    <section class="flex flex-col gap-y-5">
        <h1 class="text-2xl font-semibold">
            Kategori Peduli
        </h1>
        <section class="flex flex-wrap lg:justify-around justify-between lg:gap-x-10">
            {#each care_categories as category}
                <section class="flex flex-col items-center">
                    <section class="bg-[#D6FFEA] w-16 h-16 rounded-full flex justify-center items-center">
                        <img src="{category.icon}" alt="" class="rounded-full w-10 h-10 object-cover" />
                    </section>
                    <p>
                        {category.caption}
                    </p>
                </section>
            {/each}
        </section>
        <section class="flex justify-between gap-x-5">
            <section class="bg-[#00BF59] p-5 rounded-xl text-white w-full">
                <p class="font-medium">
                    Infaq/Shodaqoh
                </p>
            </section>
            <section class="bg-[#00BF59] p-5 rounded-xl text-white w-full">
                <p class="font-medium">
                    Iuran Ansor
                </p>
            </section>
        </section>
    </section>
    <section class="flex flex-col gap-y-5">
        <h1 class="text-2xl font-semibold">
            Program Peduli
        </h1>
        <div class="carousel carousel-center max-w-md space-x-4">
            <div class="carousel-item">
                <!-- <CrowdFundingCard content={crowdfunding[0]} /> -->
            </div>
        </div>
    </section>
</section>