import { redirect } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	const { id } = params;

	const res = await fetch(`/api/stories/${id}`, { credentials: 'include' });

	if (res.status == 401) {
		redirect(302, '/auth/sign-in');
	}

	const data = await res.json();

	return data;
}
