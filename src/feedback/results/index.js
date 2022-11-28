window.addEventListener('load', async () => {
	const data = await fetch('http://back.bikenergy.vyrek.dev/data').then((res) => res.json())
	const div = document.getElementById('results-div')

	data.forEach(({ name, feedback }) => {
		const p = document.createElement('p')
		p.innerHTML = `${name}: ${feedback}`
		div.appendChild(p)
	})
})
