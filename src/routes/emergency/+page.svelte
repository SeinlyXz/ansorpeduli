<script lang="ts">
	import Seo from "$lib/components/Seo.svelte";

    let { data } = $props()
</script>
<Seo title="Ansor Darurat" />
<section class="px-5 py-5 flex flex-col gap-y-5">
    <h1 class="text-center font-medium text-xl">
        Isi Form Pengaduan Di Bawah Ini
    </h1>
    <form action="" class="bg-base-100 shadow-md p-10 rounded-xl flex flex-col gap-y-5 border border-gray-300">
        <input type="text" name="name" placeholder="Nama Anda" class="input input-bordered w-full text-black focus:outline-none" />
        <input type="text" name="phone" placeholder="Nomor HP" class="input input-bordered w-full text-black focus:outline-none" />
        <input type="file" name="photo" placeholder="Foto" class="file-input file-input-bordered w-full text-black focus:outline-none" />
        <textarea name="aduan" id="" class="border border-gray-300 rounded-lg px-3 py-3" rows="10" placeholder="Deskripsikan apa yang terjadi"></textarea>
        <select name="category" id="" class="select select-bordered w-full">
            <option value="1" selected={data.id == '1'}>Kebencanaan</option>
            <option value="2" selected={data.id == '2'}>Kebakaran</option>
            <option value="3" selected={data.id == '3'}>Keamanan</option>
            <option value="4" selected={data.id == '4'}>Kesehatan</option>
            <option value="5" selected={data.id == '5'}>Ketertiban</option>
        </select>
        <button class="btn btn-primary">Kirim</button>
    </form>
</section>