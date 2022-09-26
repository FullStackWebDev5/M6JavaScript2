const manageOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''

	createOrderCard(orderId)

	manageOrderStatus(orderId)
}