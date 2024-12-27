<script lang="ts">
    import logo from '$lib/images/AnsorPeduli.png';
    import search from '$lib/logos/Search.svg';
    import wa from '$lib/logos/WhatsApp.svg';
</script>

<div class="navbar sticky top-0 z-50 bg-white px-[16px]">
    <div class="mx-auto flex w-full max-w-7xl items-center justify-between lg:gap-x-3 gap-x-1 lg:py-3">
        <a href="/" class="shrink-0 pe-4">
            <img src={logo} alt="Ansor Peduli Logo" class="w-24 lg:w-28" />
        </a> 
        
        <form class="w-full max-w-2xl">
            <label class="relative flex w-full items-center">
                <input 
                    type="text" 
                    placeholder="Cari program"
                    name="search"
                    class="w-full rounded-xl border border-gray-300 py-2 px-4 text-gray-700 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <img 
                    src={search} 
                    alt="Search Icon" 
                    class="absolute right-4 h-5 w-5 text-gray-400" 
                />
            </label>
        </form>

        <a 
            href="/" 
            class="shrink-0 rounded-xl bg-[#D6FFEA] p-2 transition-colors hover:bg-[#c1f5d9]"
        >
            <img src={wa} alt="WhatsApp" class="w-7" />
        </a>
    </div>
</div>