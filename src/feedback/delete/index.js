window.addEventListener('load', () => {
	const password = document.getElementById('password')
	const button = document.getElementById('send-delete')

	button.addEventListener('click', async () => {
		await fetch('https://back-bikenergy.vyrek.dev/delete', {
			headers: {
				authorization: JSON.stringify({ password })
			}
		})
	})
})

