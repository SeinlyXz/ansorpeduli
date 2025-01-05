<script lang="ts">
	import { page } from '$app/state';
	import DaruratNav from '$lib/components/DaruratNav.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import EasyCamera from '@cloudparker/easy-camera-svelte';
    import Camera from '$lib/logos/Camera.png';

	let width = $state(300);
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

    const openCamera = () => {
        // @ts-ignore
        document?.getElementById('my_modal_1')?.showModal();
    }

	let mirrorDisplay = $state(true);
	let pathname = page.url.pathname;
</script>

<Seo title="Ansor {pathname.split('/')[2]}" />
<DaruratNav {pathname} />
<section class="flex flex-col gap-y-2 px-[16px] py-[12px]">
	<h1 class="text-lg font-semibold">Formulir Bantuan Darurat</h1>
	<section class="mt-3 rounded-lg bg-[#FDF6B2] px-[14px] py-[10px] text-[#723B13]">
		<p>Silahkan isi formulir kedaruratan dengan benar dan sesuai situasi yang terjadi saat ini!</p>
	</section>
	<form
		action="/upload"
		method="POST"
		enctype="multipart/form-data"
		class="mt-5 flex flex-col gap-y-5"
	>
		<label for="category" class="flex flex-col gap-y-2">
			<select name="category" id={pathname} class="select select-bordered">
				<option
					value={pathname.split('/')[2][0].toUpperCase() + pathname.split('/')[2].substring(1)}
				>
					{pathname.split('/')[2][0].toUpperCase() + pathname.split('/')[2].substring(1)}
				</option>
			</select>
		</label>
		<label for="nama" class="flex flex-col gap-y-2">
			<p>Nama Lengkap Pelapor</p>
			<input
				type="text"
				name="nama"
				class="input input-bordered w-full"
				placeholder="Nama lengkap sesuai identitas"
				required
			/>
		</label>
		<label for="phone" class="flex flex-col gap-y-2">
			<p>Nomor Telepon</p>
			<input
				type="number"
				name="phone"
				class="input input-bordered w-full"
				placeholder="Nomor telepon / Whatsapp"
				required
			/>
		</label>
		<label for="details" class="flex flex-col gap-y-2">
			<p>Detail Kejadian</p>
			<textarea
				name="details"
				class="textarea textarea-bordered w-full"
				placeholder="Silahkan tulis kejadian singkat dan padat..."
				rows="4"
				required
			></textarea>
		</label>
		<label for="address" class="flex flex-col gap-y-2">
			<p>Alamat Kejadian</p>
			<textarea
				name="address"
				class="textarea textarea-bordered w-full"
				placeholder="Contoh: Jakal KM. 12, Kal. Sardonoharjo, Kec. Ngaglik, Sleman."
				required
			></textarea>
		</label>
		<label for="file" class="flex flex-col gap-y-2">
			<p>Upload Foto dari Kamera</p>
            <button class="flex justify-center py-4 gap-x-3 bg-[#F6F7F7] text-[#9FA9A2] rounded-[8px] border border-dashed border-[#E5E7EB]" onclick={openCamera}>
                <img src="{Camera}" alt="" class="w-[26px] h-[23px]">
                Klik untuk mengambil gambar
            </button>
			<!-- <button class="" type="button" onclick={handleImage}>Capture Image</button> -->
			<!-- <button class="" type="button" onclick={() => camera.open()}>Start Camera</button> -->
			<!-- <button class="" type="button" onclick={() => camera.close()}>Stop Camera</button> -->
		</label>
		<label for="confirm" class="flex items-center gap-x-3">
			<input
				type="checkbox"
				id="confirm"
				name="confirm"
				class="checkbox-success checkbox [--chkfg:white]"
			/>
			<span class="">Ya, saya bertanggungjawab atas laporan ini!</span>
		</label>
		<button type="submit" class="btn mt-3 bg-[#02E570] text-white hover:bg-[#02E570]/80"
			>LAPOR SEKARANG</button
		>
	</form>
	<dialog id="my_modal_1" class="modal">
		<div class="modal-box">
			<section>
                <EasyCamera
                    bind:width
                    style="border-radius:5px;"
                    bind:this={camera}
                    autoOpen
                    bind:mirrorDisplay
                />
            </section>
			<div class="modal-action">
				<form method="dialog">
					<!-- if there is a button in form, it will close the modal -->
					<button class="btn">Close</button>
				</form>
			</div>
		</div>
	</dialog>
</section>
