<script lang="ts">
	let data = {
		email: '',
		password: ''
	};

	async function handleSignIn(e: SubmitEvent) {
		e.preventDefault();

		await fetch('/api/auth/sign-in', {
			method: 'POST',
			body: JSON.stringify(data)
		});

		return window.location.replace('/');
	}
</script>

<div class="flex flex-row justify-center">
	<div class="flex flex-col items-center gap-2 p-4 pb-6 rounded-lg mt-40 m-2 bg-white w-4/12">
		<h2 class="text-xl">Sign In</h2>

		<form class="flex flex-col gap-3 w-4/5" on:submit={handleSignIn}>
			<div class="w-full">
				<label for="email" class="block text-sm font-medium leading-6">Email</label>
				<div class="mt-2">
					<input
						type="email"
						name="email"
						id="email"
						bind:value={data.email}
						class="block w-full rounded-md border-0 py-1.5 px-4 ring-1 ring-inset ring-gray-300 focus:outline-emerald-600"
						placeholder="you@example.com"
						required
					/>
				</div>
			</div>

			<div class="w-full">
				<label for="password" class="block text-sm font-medium leading-6">Password</label>
				<div class="mt-2">
					<input
						type="password"
						name="password"
						id="password"
						bind:value={data.password}
						class="block w-full rounded-md border-0 py-1.5 px-4 ring-1 ring-inset ring-gray-300 focus:outline-emerald-600"
						placeholder="12345678"
						required
					/>
				</div>
			</div>

			<div class="flex w-full justify-center">
				<button
					class="w-9/12 justify-center rounded-md bg-emerald-600 px-3 py-1.5 my-4 text-sm font-semibold leading-6 text-white uppercase shadow-sm hover:bg-emerald-500"
					type="submit"
				>
					Sign in
				</button>
			</div>
		</form>
	</div>
</div>
