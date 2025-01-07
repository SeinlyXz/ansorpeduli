<script>
    import Seo from "$lib/components/Seo.svelte";
    import warning from "$lib/logos/Warning.png";
    import image from "$lib/images/Image1.jpg";

    import gift from "$lib/logos/Gift.png";
    import cap from "$lib/logos/Cap.png";
    import ambulance from "$lib/logos/Ambulance.png";
    import sirine from "$lib/logos/Sirine.png";
	import CrowdfundingCard from "$lib/components/CFCard.svelte";
	import AllCfCard from "$lib/components/AllCFCard.svelte";

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
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: true,
            },
            collected: "Rp102.360.000",
            unggulan: true,
        },
        {
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: false,
            },
            collected: "Rp100.000.000",
            unggulan: true,
        },
		{
            title: "Sedekah Bangun Sekolah Gratis Untuk Ratusan Anak Yatim Dan Dhufa",
            img: image,
            author: {
                name: "PW Ansor DIY",
                verified: false,
            },
            collected: "Rp100.000.000",
            unggulan: false,
        }
    ]

</script>
<Seo title="Ansor Peduli" />
<section>
    
</section>
<section class="flex flex-col gap-y-10 px-[16px]">
    <section class="flex flex-col gap-y-5">
        <section class="py-[16px] flex flex-col gap-y-2">
            <h2 class="font-bold text-2xl text-[#BE1717]">
                Bantuan Darurat
            </h2>
            <p class="text-base">
                Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale reesizing asset.
            </p>
        </section>
        <section class="bg-[#E22020] p-5 rounded-[8px] relative overflow-hidden w-full">
            <section class="w-full flex flex-col gap-y-[24px] relative z-40">
                <section class="flex relative">
                    <h1 class="w-52 font-semibold text-white z-30 leading-snug">
                        Siap siaga untuk Anda! Hubungi SIGAB kapan saja, di mana saja.
                    </h1>
                    <section class="flex justify-center items-center lg:ms-32 ms-16 -mt-[10px]">
                        <img 
                            src="{warning}" 
                            alt="" 
                            class="absolute z-30 w-10 top-[5px]"
                        />
                        <div class="absolute z-20 rounded-full bg-red-700 opacity-100 w-16 h-16"></div>
                        <div class="absolute z-10 rounded-full bg-red-700 opacity-40 animate-slow-ping w-20 h-20 ease-in-out"></div>
                        <div class="absolute z-0 rounded-full bg-red-700 opacity-30 animate-slow-ping-2 w-32 h-32 ease-in-out"></div>
                    </section>            
                </section>
                <a href="/darurat" class="bg-gray-100 hover:bg-gray-200 text-black rounded-[8px] px-4 py-2 w-full flex gap-x-3 items-center justify-center font-bold z-40 text-[18px]">
                    BUTUH BANTUAN SEKARANG!
                </a>
            </section>
        </section>
    </section>
</section>
<div class="bg-[#f7f7f7] w-full h-2 my-10"></div>
<section class="flex flex-col gap-y-10 px-[16px]">
    <section class="flex flex-col gap-y-5">
        <section class="flex flex-col gap-y-[8px]">
            <h1 class="text-2xl font-bold text-green-500">
                Galang Dana
            </h1>
            <h3 class="text-base text-gray-500">
                Font rotate star fill horizontal project duplicate. Polygon star ellipse italic vector scale.
            </h3>
        </section>
        <section class="flex flex-wrap justify-between">
            {#each care_categories as category}
                <section class="flex flex-col items-center gap-y-[8px]">
                    <section class="bg-[#D6FFEA] w-16 h-16 rounded-full flex justify-center items-center">
                        <img src="{category.icon}" alt="" class="rounded-full w-10 h-10 object-cover" />
                    </section>
                    <p class="text-sm font-semibold">
                        {category.caption}
                    </p>
                </section>
            {/each}
        </section>
        <section class="flex justify-between gap-x-[8px]">
            <a href="/" class="bg-[#005EFF] hover:bg-[#005EFF]/80 rounded-[8px] text-white w-full flex justify-between items-center px-3">
                <p class="font-medium text-[14px]">
                    Tabungan
                </p>
                <p class="text-[#2C05F2] group-hover:text-[#2C05F2]/80 px-3 py-1 rounded-2xl bg-white text-[10px] font-medium">
                    SEGERA
                </p>
            </a>
            <a href="/" class="bg-[#005EFF] hover:bg-[#005EFF]/80 p-3 rounded-[8px] text-white w-full flex justify-between items-center group">
                <p class="font-medium text-[14px]">
                    Iuran Ansor
                </p>
                <p class="text-[#2C05F2] group-hover:text-[#2C05F2]/80 px-3 py-1 rounded-2xl bg-white text-[10px] font-medium">
                    SEGERA
                </p>
            </a>
        </section>
    </section>
</section>
<section class="flex flex-col gap-y-10 py-10">
    <section class="flex flex-col gap-y-5 w-full">
        <h1 class="text-2xl font-bold px-[16px]">
            Program Peduli
        </h1>
        <div class="carousel carousel-center space-x-4 ps-[16px]">
            {#each crowdfundings as crowdfunding, index}
                {#if crowdfunding.unggulan}
                    <div class="carousel-item {index == crowdfundings.filter(crowdfunding => crowdfunding.unggulan).length - 1 ? 'pe-[16px]' : ''}">
                        <CrowdfundingCard content={crowdfunding} />
                    </div>
                {/if}
            {/each}
        </div>
    </section>
    <section class="flex flex-col gap-y-5 w-full px-[16px]">
        <h1 class="text-2xl font-bold ">
            Semua Program
        </h1>
        <div class="flex flex-col gap-y-3">
            {#each crowdfundings as crowdfunding}
                <AllCfCard content={crowdfunding} />
            {/each}
        </div>
        <button class="w-full rounded-[8px] border border-gray-300 bg-base-100 text-gray-700 flex justify-center px-[20px] py-[12px] hover:bg-gray-100 ease-in-out duration-300">
            <p class="text-center text-black text-sm">
                Tampilkan Lebih Banyak
            </p>
        </button>
    </section>
</section>