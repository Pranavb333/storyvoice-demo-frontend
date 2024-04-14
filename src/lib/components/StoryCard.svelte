<script lang="ts">
	export let _id: string;
	export let prompt: string;
</script>

<div
	class="flex flex-row border border-gray-300 rounded-lg p-4 bg-white justify-between w-full hover:border-emerald-700"
>
	<div>
		<p class="text-lg">{prompt}</p>
	</div>

	<a
		href="/stories/{_id}"
		class="uppercase text-sm text-emerald-700 border border-emerald-700 rounded-2xl p-1 px-4 hover:bg-emerald-700 hover:bg-opacity-10"
	>
		Edit Story
	</a>
</div>
