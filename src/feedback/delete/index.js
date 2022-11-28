window.addEventListener('load', async () => {
	await fetch('https://back-bikenergy.vyrek.dev/delete', {
		headers: {
			authorization: JSON.stringify({ password: 'bikenergy2022' })
		}
	})
})
