const manageOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-no-display').innerText = `Status for Order No. ${orderId}`
	document.getElementById('order-no-display').style.display = 'block'

	document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light', 'btn-success')

	setTimeout(() => {
		document.getElementsByClassName('order-status-block')[1].classList.replace('btn-light', 'btn-success')
		setTimeout(() => {
			document.getElementsByClassName('order-status-block')[2].classList.replace('btn-light', 'btn-success')
			setTimeout(() => {
				document.getElementsByClassName('order-status-block')[3].classList.replace('btn-light', 'btn-success')
				setTimeout(() => {
					document.getElementsByClassName('order-status-block')[4].classList.replace('btn-light', 'btn-success')
					setTimeout(() => {
						document.getElementsByClassName('order-status-block')[5].classList.replace('btn-light', 'btn-success')
						setTimeout(() => {
							document.getElementsByClassName('order-status-block')[6].classList.replace('btn-light', 'btn-success')
							setTimeout(() => {
								document.getElementsByClassName('order-status-block')[7].classList.replace('btn-light', 'btn-success')
								setTimeout(() => {
									document.getElementsByClassName('order-status-block')[8].classList.replace('btn-light', 'btn-success')
									document.getElementsByClassName('order-status-block')[9].classList.replace('btn-light', 'btn-success')
								}, 2000)
							}, 8000)
						}, 15000)
					}, 5000)
				}, 12000)
			}, 5000)
		}, 10000)
	}, 2000)

	document.getElementById('order-id-input').value = ''
}