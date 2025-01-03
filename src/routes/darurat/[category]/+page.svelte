<script lang="ts">
	import { page } from '$app/state';
	import DaruratNav from '$lib/components/DaruratNav.svelte';
	import Seo from '$lib/components/Seo.svelte';
    import EasyCamera from '@cloudparker/easy-camera-svelte';
	let width = $state(600);
	let camera: EasyCamera;

    const handleImage = async () => {
		let imageData = await camera.captureImage();
	};

	const handleVideo = async () => {
		let blob = await camera.startVideoRecording();
		if (blob) {
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'video.mp4';
			document.body.appendChild(a);
			a.click();
		}
	};
	let mirrorDisplay = $state(true);
    let pathname = page.url.pathname;
</script>
<Seo title="Ansor {pathname.split('/')[2]}" />
<DaruratNav {pathname}/>
<section class="px-[16px] py-[12px] flex flex-col gap-y-2">
    <h1 class="font-semibold text-lg">Formulir Bantuan Darurat</h1>
    <section class="bg-[#FDF6B2] text-[#723B13] px-[14px] py-[10px] rounded-lg mt-3">
        <p>
            Silahkan isi formulir kedaruratan dengan benar dan sesuai situasi yang terjadi saat ini!
        </p>
    </section>
    <form action="/upload" method="POST" enctype="multipart/form-data" class="flex flex-col gap-y-5 mt-5">
        <label for="category" class="flex flex-col gap-y-2">
            <select name="category" id="{pathname}" class="select select-bordered">
                <option value="{pathname.split('/')[2][0].toUpperCase() + pathname.split('/')[2].substring(1)}">
                    {pathname.split('/')[2][0].toUpperCase() + pathname.split('/')[2].substring(1)}
                </option>
            </select>
        </label>
        <label for="nama" class="flex flex-col gap-y-2">
            <p>Nama Lengkap Pelapor</p>
            <input type="text" name="nama" class="input input-bordered w-full" placeholder="Nama lengkap sesuai identitas" required>
        </label>
        <label for="phone" class="flex flex-col gap-y-2">
            <p>Nomor Telepon</p>
            <input type="number" name="phone" class="input input-bordered w-full" placeholder="Nomor telepon / Whatsapp" required>
        </label>
        <label for="details" class="flex flex-col gap-y-2">
            <p>Detail Kejadian</p>
            <textarea name="details" class="textarea textarea-bordered w-full" placeholder="Silahkan tulis kejadian singkat dan padat..." rows="4" required></textarea>
        </label>
        <label for="address" class="flex flex-col gap-y-2">
            <p>Alamat Kejadian</p>
            <textarea name="address" class="textarea textarea-bordered w-full" placeholder="Contoh: Jakal KM. 12, Kal. Sardonoharjo, Kec. Ngaglik, Sleman." required></textarea>
        </label>
        <!-- <label for="file" class="flex flex-col gap-y-2">
            <p>Upload Foto dari Kamera</p>
            <EasyCamera bind:width style="border-radius:5px;" bind:this={camera} autoOpen bind:mirrorDisplay />
            <button class="" type="button" onclick={handleImage}>Capture Image</button>
            <button class="" type="button" onclick={() => camera.open()}>Start Camera</button>
            <button class="" type="button" onclick={() => camera.close()}>Stop Camera</button>
        </label> -->
        <label for="confirm" class="flex items-center gap-x-3">
            <input type="checkbox" id="confirm" name="confirm" class="checkbox checkbox-success [--chkfg:white]" /> 
            <span class="">Ya, saya bertanggungjawab atas laporan ini!</span>
        </label>
        <button type="submit" class="btn bg-[#02E570] hover:bg-[#02E570]/80 mt-3 text-white">LAPOR SEKARANG</button>
    </form>
</section>