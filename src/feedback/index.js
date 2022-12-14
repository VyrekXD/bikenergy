window.addEventListener('load', () => {
	const button = document.getElementById('form-button')
	const feedback = document.getElementById('feedback')
	const name = document.getElementById('name')

	button.addEventListener('click', async () => {
		await fetch(
			`https://back-bikenergy.vyrek.dev/submit`,

			{
				body: JSON.stringify({ name: name.value, feedback: feedback.value }),
				headers: { 'Content-Type': 'application/json' },
				method: 'POST'
			}
		)

		feedback.value = ''
		name.value = ''
	})
})
