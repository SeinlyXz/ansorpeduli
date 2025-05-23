<script lang="ts">
	import { page } from '$app/state';
	import DaruratNav from '$lib/components/DaruratNav.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import EasyCamera from '@cloudparker/easy-camera-svelte';
	import Camera from '$lib/logos/Camera.png';
	import { goto } from '$app/navigation';

	interface CameraDevice {
		deviceId: string;
		kind: string;
		label: string;
		groupId: string;
	}

	let width = $state(300);
	let camera: EasyCamera;
	let cameraLists: CameraDevice[] = $state([]);
	let cameraState = $state(false);
	let images: string[] = $state([]);
	let mirrorDisplay = $state(false);
	let pathname = $state(page.url.pathname);

	const handleImage = async () => {
		let imageData = await camera.captureImage();
		if (images.length < 3) {
			images = [...images, `${imageData}`];
			// @ts-ignore
			document?.getElementById('open_camera_modal')?.close();
		} else {
			return;
		}
	};

	const deleteImage = (index: number) => {
		images = images.filter((image, i) => i !== index);
	};

	const getDevices = async () => {
		try {
			// Ambil daftar perangkat kamera
			let devices = await camera.getCameraDevices();

			if (!devices || devices.length === 0) {
				console.warn('Tidak ada kamera yang terdeteksi');
				return;
			}

			// Filter untuk mendapatkan kamera belakang
			cameraLists = devices.filter((device) => {
				const label = device.label.toLowerCase();
				// Mencari kamera belakang dengan berbagai kemungkinan label
				return (
					!label.includes('front') &&
					!label.includes('kamera depan') &&
					(label.includes('back') ||
						label.includes('rear') ||
						label.includes('environment') ||
						label.includes('kamera belakang'))
				);
			});

			// Jika tidak ada kamera belakang yang terdeteksi, gunakan semua kamera
			if (cameraLists.length === 0) {
				console.warn('Tidak ada kamera belakang, menggunakan semua kamera yang tersedia');
				cameraLists = devices;
			}

			// Gunakan kamera pertama yang tersedia
			if (cameraLists.length > 0) {
				const defaultCamera = cameraLists[0];
				await camera.switchCamera(defaultCamera.deviceId);
				console.log(`Menggunakan kamera: ${defaultCamera.label} (${defaultCamera.deviceId})`);
			}
		} catch (error) {
			console.error('Error saat mengakses kamera:', error);
		}
	};

	const openCamera = async () => {
		camera.open();
		cameraState = true;
		await getDevices();
		// @ts-ignore
		document?.getElementById('open_camera_modal')?.showModal();
	};

	const closeCamera = () => {
		cameraState = false;
		camera.close();
	};

	let options = [
        {
            emergence: "BENCANA",
            slug: "bencana",
        },
        {
            emergence: "KEBAKARAN",
            slug: "kebakaran",
        },
        {
            emergence: "KEAMANAN",
            slug: "keamanan",
        },
        {
            emergence: "KESEHATAN",
            slug: "kesehatan",
        },
        {
            emergence: "KETERTIBAN",
            slug: "ketertiban",
        },
    ]
	const openModal = () => {
		// @ts-ignore
		document?.getElementById('aksi_options')?.showModal();
	}

	const chooseOption = (option: string) => {
		goto(`/darurat/${option}`);
		// @ts-ignore
		document?.getElementById('aksi_options')?.close();
	}
	$effect(()=>{
		pathname = page.url.pathname;
	})
</script>

<Seo title="Ansor {pathname.split('/')[2]}" />
<DaruratNav {pathname} />
<section class="flex flex-col gap-y-2 px-[16px] pb-[72px] pt-[12px]">
	<h1 class="text-lg font-semibold">Formulir Bantuan Darurat</h1>
	<section class="mt-3 rounded-lg bg-[#FDF6B2] px-[14px] py-[10px] text-[#723B13]">
		<p>Silahkan isi formulir kedaruratan dengan benar dan sesuai situasi yang terjadi saat ini!</p>
	</section>
	<label for="category" class="flex flex-col gap-y-2">
		<dialog id="aksi_options" class="modal">
			<div class="modal-box flex flex-col gap-5">
				<h2 class="text-xl font-semibold text-center">
					Pilih Opsi Aksi
				</h2>
				{#each options as option}
					<button class="btn w-full btn-gray-400" type="button" onclick={()=>chooseOption(option.slug)}>
						{option.emergence}
					</button>
				{/each}
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>close</button>
			</form>
		</dialog>
	</label>
	<form
		action="/upload"
		method="POST"
		enctype="multipart/form-data"
		class="mt-5 flex flex-col gap-y-5"
	>
		<label for="" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Aksi</p>
			<button type="button" class="btn flex justify-between w-full" onclick={openModal}>
				{pathname.split('/')[2][0].toUpperCase() + pathname.split('/')[2].substring(1)}
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
				</svg>			  
			</button>
		</label>
		<label for="nama" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Nama Lengkap Pelapor</p>
			<input
				type="text"
				name="nama"
				class="input input-bordered w-full"
				placeholder="Nama lengkap sesuai identitas"
				required
			/>
		</label>
		<label for="phone" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Nomor Telepon</p>
			<input
				type="number"
				name="phone"
				class="input input-bordered w-full"
				placeholder="Nomor telepon / Whatsapp"
				required
			/>
		</label>
		<label for="details" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Detail Kejadian</p>
			<textarea
				name="details"
				class="textarea textarea-bordered w-full"
				placeholder="Silahkan tulis kejadian singkat dan padat..."
				rows="4"
				required
			></textarea>
		</label>
		<label for="address" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Alamat Kejadian</p>
			<textarea
				name="address"
				class="textarea textarea-bordered w-full"
				placeholder="Contoh: Jakal KM. 12, Kal. Sardonoharjo, Kec. Ngaglik, Sleman."
				required
			></textarea>
		</label>
		<label for="file" class="form-control flex flex-col gap-y-2">
			<p class="font-bold">Upload Foto dari Kamera</p>
			<section class="flex gap-x-3">
				{#if images.length == 0}
					{#each Array(3) as _, i}
						<div
							class="relative flex h-24 w-52 items-center justify-center rounded-xl border border-dashed border-gray-400 bg-gray-100"
						>
							<p class="text-gray-500">Kosong</p>
						</div>
					{/each}
				{:else}
					{#each images as image, i}
						<div class="relative h-24 w-[130.33px] rounded-xl border bg-gray-100">
							<button
								class="absolute -right-2 -top-2"
								type="button"
								aria-label="Remove image"
								onclick={() => deleteImage(i)}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="rounded-full bg-white p-0"
								>
									<path
										d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM12.9422 12.0578C13.0003 12.1159 13.0463 12.1848 13.0777 12.2607C13.1092 12.3366 13.1254 12.4179 13.1254 12.5C13.1254 12.5821 13.1092 12.6634 13.0777 12.7393C13.0463 12.8152 13.0003 12.8841 12.9422 12.9422C12.8841 13.0003 12.8152 13.0463 12.7393 13.0777C12.6634 13.1092 12.5821 13.1253 12.5 13.1253C12.4179 13.1253 12.3366 13.1092 12.2607 13.0777C12.1848 13.0463 12.1159 13.0003 12.0578 12.9422L10 10.8836L7.94219 12.9422C7.88412 13.0003 7.81518 13.0463 7.73931 13.0777C7.66344 13.1092 7.58213 13.1253 7.5 13.1253C7.41788 13.1253 7.33656 13.1092 7.26069 13.0777C7.18482 13.0463 7.11588 13.0003 7.05782 12.9422C6.99975 12.8841 6.95368 12.8152 6.92226 12.7393C6.89083 12.6634 6.87466 12.5821 6.87466 12.5C6.87466 12.4179 6.89083 12.3366 6.92226 12.2607C6.95368 12.1848 6.99975 12.1159 7.05782 12.0578L9.11641 10L7.05782 7.94219C6.94054 7.82491 6.87466 7.66585 6.87466 7.5C6.87466 7.33415 6.94054 7.17509 7.05782 7.05781C7.17509 6.94054 7.33415 6.87465 7.5 6.87465C7.66586 6.87465 7.82492 6.94054 7.94219 7.05781L10 9.11641L12.0578 7.05781C12.1159 6.99974 12.1848 6.95368 12.2607 6.92225C12.3366 6.89083 12.4179 6.87465 12.5 6.87465C12.5821 6.87465 12.6634 6.89083 12.7393 6.92225C12.8152 6.95368 12.8841 6.99974 12.9422 7.05781C13.0003 7.11588 13.0463 7.18482 13.0777 7.26069C13.1092 7.33656 13.1254 7.41788 13.1254 7.5C13.1254 7.58212 13.1092 7.66344 13.0777 7.73931C13.0463 7.81518 13.0003 7.88412 12.9422 7.94219L10.8836 10L12.9422 12.0578Z"
										fill="#E22020"
									/>
								</svg>
							</button>
							<img src={image} alt="" class="h-full w-full rounded-xl object-cover" />
						</div>
					{/each}
				{/if}
			</section>
			<button
				class="flex justify-center gap-x-3 rounded-[8px] border border-dashed border-[#E5E7EB] bg-[#F6F7F7] py-4 text-[#9FA9A2]"
				onclick={openCamera}
				type="button"
			>
				<img src={Camera} alt="" class="h-[23px] w-[26px]" />
				Klik untuk mengambil gambar
			</button>
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
	<dialog id="open_camera_modal" class="modal">
		<div class="modal-box">
			<section class="pt-5">
				<EasyCamera
					bind:width
					style="border-radius:5px;"
					bind:this={camera}
					autoOpen={cameraState}
					bind:mirrorDisplay
					onInit={() => cameraLists[0]}
					useFrontCamera={false}
					useAudio={false}
				/>
				<section class="flex justify-center pt-5">
					<button
						class="btn btn-circle btn-wide bg-green-500 text-white"
						type="button"
						onclick={handleImage}
						aria-label="Take a picture"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-camera"
							><path
								d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
							/><circle cx="12" cy="13" r="3" />
						</svg>
					</button>
				</section>
			</section>
			<div class="modal-action">
				<form method="dialog" class="flex">
					<button
						class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
						onclick={closeCamera}>✕</button
					>
				</form>
			</div>
		</div>
	</dialog>
</section>
