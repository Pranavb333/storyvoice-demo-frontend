<script>
	import StoryCard from '$lib/components/StoryCard.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="flex flex-row justify-center">
	<div class="flex flex-col items-center gap-2 p-4 pb-8 rounded-lg m-4 bg-white w-4/5">
		<div class="flex flex-col items-center gap-1 p-4 pb-6">
			<h2 class="text-3xl">Speech to Text and Text to Speech Demo</h2>
			<p>by XTTS and Whisper</p>
		</div>

		<div class="flex flex-col gap-2 w-4/5">
			<div class="flex justify-start w-full">
				<a
					class="p-2 rounded-lg text-xs border border-emerald-700 uppercase text-emerald-700 hover:bg-emerald-700 hover:bg-opacity-10"
					href="/stories/create"
				>
					+ Add Prompt
				</a>
			</div>

			<div class="flex flex-col items-center gap-3 w-full">
				{#each data.stories as story (story._id)}
					<StoryCard _id={story._id} prompt={story.prompt} />
				{/each}
			</div>
		</div>
	</div>
</div>
