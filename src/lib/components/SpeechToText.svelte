<script lang="ts">
	export let handleText: Function;

	let displayModel = false;
	let loading = false;
	let files: FileList;

	function hideModal() {
		displayModel = false;
	}

	function showModal() {
		displayModel = true;
	}

	async function upload() {
		loading = true;
		const formData = new FormData();
		formData.append('audio', files[0]);

		const res = await fetch('/api/sst', {
			method: 'POST',
			body: formData
		});
		const data = await res.json();
		handleText(data.text);

		displayModel = false;
		loading = false;
	}
</script>

<button class="bg-emerald-600 px-4 py-1 rounded-lg text-sm text-white" on:click={showModal}>
	Transcribe Voice
</button>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="{displayModel
		? 'block'
		: 'hidden'} fixed w-screen h-screen top-0 left-0 bg-[#00000066] z-10"
	on:click={hideModal}
>
	<div class="flex items-center justify-center w-full h-full">
		<div
			class="flex flex-col items-center justify-center gap-2 w-6/12 h-2/6 bg-white"
			on:click={(event) => event.stopPropagation()}
		>
			<div class="flex flex-row justify-between items-center gap-2 pl-2 border w-1/2">
				<input
					id="file"
					type="file"
					accept="audio/*"
					class="hidden"
					bind:files
					disabled={loading}
				/>
				<span class="text-sm text-gray-500">
					{files ? files[0].name : 'No file chosen'}
				</span>
				<label
					for="file"
					class="cursor-pointer px-4 py-1 border-2 hover:bg-opacity-10 {loading
						? 'border-slate-400 text-slate-400'
						: 'border-emerald-700 text-emerald-700 hover:bg-emerald-700'}"
				>
					Choose a file
				</label>
			</div>

			<button
				on:click={upload}
				class="py-1.5 px-5 rounded-lg mt-5 my-3 text-white bg-emerald-700 disabled:bg-slate-400"
				disabled={files === undefined || loading}
			>
				<div class="flex flex-row gap-2 items-center">
					{#if loading}
						<svg
							aria-hidden="true"
							role="status"
							class="inline w-4 h-4 text-white animate-spin"
							viewBox="0 0 100 101"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
								fill="#E5E7EB"
							/>
							<path
								d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
								fill="currentColor"
							/>
						</svg>
						Loading
					{:else}
						Submit
					{/if}
				</div>
			</button>
		</div>
	</div>
</div>
