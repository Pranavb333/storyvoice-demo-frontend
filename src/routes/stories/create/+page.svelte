<script lang="ts">
	let prompt = '';

	async function handleCreateStory() {
		const res = await fetch('/api/stories', {
			method: 'POST',
			body: JSON.stringify({ prompt })
		});
		const data = await res.json();

		const storyID = data['_id'];
		window.location.replace(`/stories/${storyID}`);
	}
</script>

<div class="flex flex-col items-center gap-2 p-4 pb-6 rounded-lg m-2 bg-white w-full">
	<div class="flex flex-col items-center w-4/6">
		<div
			class="w-full p-3 px-12 border rounded-md focus:outline-emerald-700 text-5xl font-normal text-center empty:before:content-[attr(placeholder)] empty:before:opacity-40"
			placeholder="Prompt"
			contenteditable
			bind:textContent={prompt}
		>
			{prompt}
		</div>

		<button
			class="text-lg py-1 px-5 rounded-lg mt-5 my-3 text-white bg-emerald-600"
			on:click={handleCreateStory}
		>
			Add Prompt
		</button>
	</div>
</div>
