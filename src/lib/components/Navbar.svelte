<script lang="ts">
	async function handleSignOut() {
		await fetch('/api/auth/sign-out', {
			method: 'POST'
		});

		window.location.replace('/auth/sign-in');
	}
</script>

<div class="flex flex-row justify-between p-3 bg-white">
	<div class="flex items-center">
		<h2 class="text-lg uppercase font-medium">StoryVoice</h2>
	</div>

	<div class="flex items-center">
		<button
			class="p-2 uppercase hover:bg-emerald-700 hover:bg-opacity-10 text-emerald-700 font-semibold"
			on:click={handleSignOut}
		>
			Sign Out
		</button>
	</div>
</div>
