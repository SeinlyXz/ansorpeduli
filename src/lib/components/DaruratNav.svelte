<script>
    import arrow_left from '$lib/icons/ArrowLeft.svg';
    let { pathname } = $props()
</script>

<nav class="flex justify-between items-center px-[16px] py-[16px] border-b-[1px] border-gray-300">
    <a href="{pathname == "/darurat" ? "/" : "/darurat"}" class="text-xl font-semibold w-[15%]">
        <img src="{arrow_left}" alt="">
    </a>
    <section class="text-lg font-semibold w-[70%] text-center">
        {#if pathname == '/darurat'}
            <p>
                Pilih Bantuan Darurat
            </p>
        {:else}
            <p>
                Darurat {pathname.split('/')[2]}
            </p>
        {/if}
    </section>
    <div class="w-[15%]"></div>
</nav>