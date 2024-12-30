<script lang="ts">
	import { page } from '$app/stores';
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
    let pathname = $page.url.pathname;
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
    <form action="/upload" method="POST" enctype="multipart/form-data" class="flex flex-col gap-y-3 mt-5">
        <label for="nama" class="flex flex-col gap-y-2">
            <p>Nama Lengkap Pelapor</p>
            <input type="text" name="nama" class="input input-bordered w-full" placeholder="Nama lengkap sesuai identitas" required>
        </label>
        <label for="phone" class="flex flex-col gap-y-2">
            <p>Nomor Telepon</p>
            <input type="number" name="phone" class="input input-bordered w-full" placeholder="Nomor telepon / Whatsapp" required>
        </label>
        <label for="file" class="flex flex-col gap-y-2">
            <p>Upload Foto dari Kamera</p>
            <EasyCamera bind:width style="border-radius:5px;" bind:this={camera} autoOpen bind:mirrorDisplay />
            <button class="" type="button" onclick={handleImage}>Capture Image</button>
            <button class="" type="button" onclick={() => camera.open()}>Start Camera</button>
            <button class="" type="button" onclick={() => camera.close()}>Stop Camera</button>
        </label>
        <button type="submit" class="btn btn-primary mt-3">Submit</button>
    </form>
</section>