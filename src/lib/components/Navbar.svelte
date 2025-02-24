<script lang="ts">
	import logo from '$lib/logos/ansorlogo.png';
	import search from '$lib/logos/Search.svg';

	const openModal = () => {
		// @ts-ignore
		document.getElementById('search_modal').showModal();
	};

    const closeModal = () => {
        // @ts-ignore
        document.getElementById('search_modal').close();
    };
    let searchInput = $state('');
    const onsubmit = () => {
       closeModal();
       setTimeout(() => {
            searchInput = '';
        }, 200);
    }
</script>

<header class="navbar sticky top-0 z-50 border-b-[1px] border-gray-[#f7f7f7] bg-white px-[16px]">
	<div
		class="mx-auto flex w-full items-center justify-between gap-x-1 max-w-[480px]"
	>
		<a href="/" class="shrink-0 pe-4">
			<img src={logo} alt="Ansor Peduli Logo" class="w-[12rem]" />
		</a>

		<div class="max-w-2xl"></div>

		<button
			class="shrink-0 rounded-[8px] border border-[#E2E5E3] p-2 transition-colors"
			onclick={() => openModal()}
		>
			<img src={search} alt="Search" class="h-[16px] w-[16px]" />
		</button>
		<dialog id="search_modal" class="modal">
			<div class="modal-box">
				<form class="flex flex-col gap-y-5" onsubmit={onsubmit}>
					<h2 class="font-semibold text-center text-xl">
						Cari di Ansor Peduli
					</h2>
                    <input type="text" name="search" placeholder="Cari..." class="input input-bordered w-full mb-10" bind:value={searchInput}>
                    <button class="btn btn-sm btn-primary">Cari</button>
                </form>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</div>
</header>
