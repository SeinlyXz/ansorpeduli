<script>
	import EmergencyCard from "$lib/components/EmergencyCard.svelte";
    import Seo from "$lib/components/Seo.svelte";
    import banner from "$lib/images/Banner.png";
    import warning from "$lib/logos/Warning.png";
    import arrow from "$lib/logos/arrow-narrow-right.svg";
    import handmade from "$lib/logos/handmade.svg";

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

    const crowdfundings = [
        {
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            img: "https://s3-alpha-sig.figma.com/img/a345/b1f3/1066788ab653d7338826292d7bebcad8?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StwvCDoGYfbSSDMmiatqMa1TCSw1dj29FAQ5A5K56U-C-RweFv0Cc~BfZq~RPmUiF47t7avwZEd7OSubNdTxPwgZHY0VIVg9MphZiZAmh6MkbXOOgCgBEwvAc-KWpa78ezPmvk7eONd-B397O6XjSgUGVfG~2UWBQTnOnRgLTXdkqJ0eD~j~MiWVOEtOWAEpxO6rc1wd9MITbZldQEYo5NqzKky1K34fnvCbgWwUnHB2ejQnpqzgyTxnyIhH8LbLWl25ezcR9iD0r1BAUmPHkX6fmg2pf6eBIyVvFENpLx29NbHZdI1-uHorIN4aqXkHNgzxkzHSaHXVcdN-EP8wHA__",
            author: "PW Ansor DIY",
            collected: "Rp. 102.360.000",
            verified: true,
        },
        {
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            img: "https://s3-alpha-sig.figma.com/img/7a0b/4ee7/d248529b057a41d3086490f75a303748?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbwFBFwZjVL~3M07Z1bPrBos9C4~MISfLJchBk1grvshDpCNIg5jke8U0YVs7VyuKFYtOuJ8kSNJuDIQj3QC-8rdttJFwN~f2ZwixU7hajFEkqGGjaYz8Lu9gcO~xoRvBFfCKvm3XAPl71-d3OS9wfqccafLAemRvRKvMNucjrR2DgVhnYINPwMRLsIf3-VmAw4XAjuDRQH8-t2uqlsrV8dQfLXd~pugiYHZk5oIoRqdx4GOy~Z4QUJBSQNB2u~HkNqUFEHPdsLBXvQ2xf~9OzZ2tRf6T-S1u058yfKeBXuldscs3tmDrM2PisiaG2cwNPD0m-nGtXp4RpPrbKQ5Aw__",
            author: "PW Ansor DIY",
            collected: "Rp. 100.000.000",
            verified: false,
        },
		{
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            img: "https://s3-alpha-sig.figma.com/img/7a0b/4ee7/d248529b057a41d3086490f75a303748?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbwFBFwZjVL~3M07Z1bPrBos9C4~MISfLJchBk1grvshDpCNIg5jke8U0YVs7VyuKFYtOuJ8kSNJuDIQj3QC-8rdttJFwN~f2ZwixU7hajFEkqGGjaYz8Lu9gcO~xoRvBFfCKvm3XAPl71-d3OS9wfqccafLAemRvRKvMNucjrR2DgVhnYINPwMRLsIf3-VmAw4XAjuDRQH8-t2uqlsrV8dQfLXd~pugiYHZk5oIoRqdx4GOy~Z4QUJBSQNB2u~HkNqUFEHPdsLBXvQ2xf~9OzZ2tRf6T-S1u058yfKeBXuldscs3tmDrM2PisiaG2cwNPD0m-nGtXp4RpPrbKQ5Aw__",
            author: "PW Ansor DIY",
            collected: "Rp. 100.000.000",
            verified: false,
        }
    ]

</script>
<Seo title="Ansor Peduli" />
<section class="flex flex-col gap-y-10 px-5 pb-10">
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
            <section class="w-[80%] flex flex-col gap-y-3 relative z-40">
                <h1 class="lg:w-80 w-52 font-semibold text-white lg:text-2xl">
                    Siap siaga untuk Anda! Hubungi SIGAB kapan saja, di mana saja.
                </h1>
                <a href="/sigab" class="bg-gray-100 hover:bg-gray-200 text-black rounded-xl px-4 py-2 w-44 flex gap-x-3 items-center justify-center">
                    Lapor Sigab
                    <img src="{arrow}" alt="" />
                </a>
            </section>
            <section class="w-[20%]">
                <img src="{warning}" alt="" class="absolute lg:right-[120px] lg:top-[115px] right-[67px] top-[86px] translate-x-1/2 -translate-y-1/2 z-30">
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-20 lg:w-28 lg:h-28 w-16 h-16 rounded-full bg-red-700 opacity-100"></div>
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-10 lg:w-44 lg:h-44 w-32 h-32 rounded-full bg-red-700 opacity-60"></div>
                <div class="absolute lg:right-[120px] lg:top-[120px] right-[67px] top-[89px] translate-x-1/2 -translate-y-1/2 z-0 lg:w-60 lg:h-60 w-44 h-44 rounded-full bg-red-700 opacity-30"></div>
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
            <a href="/" class="bg-[#00BF59] hover:bg-[#00BF59]/80 lg:p-5 p-3 rounded-xl text-white w-full flex justify-between items-center">
                <p class="font-medium lg:text-base text-sm">
                    Infaq/Shodaqoh
                </p>
                <img src="{handmade}" alt="" class="lg:w-6 lg:h-6 w-4 h-4" />
            </a>
            <a href="/" class="bg-[#00BF59] hover:bg-[#00BF59]/80 lg:p-5 p-3 rounded-xl text-white w-full flex justify-between items-center group">
                <p class="font-medium lg:text-base text-xs">
                    Iuran Ansor
                </p>
                <p class="bg-[#2C05F2] group-hover:bg-[#2C05F2]/80 lg:px-5 lg:py-1 px-3 py-1 rounded-2xl text-white lg:text-base text-xs">
                    SEGERA
                </p>
            </a>
        </section>
    </section>
    <section class="flex flex-col gap-y-5">
        <h1 class="text-2xl font-semibold">
            Program Peduli
        </h1>
        <div class="carousel carousel-center space-x-4">
            {#each crowdfundings as crowdfunding}
                <div class="carousel-item">
                    <CrowdFundingCard content={crowdfunding} />
                </div>
            {/each}
        </div>
    </section>
</section>