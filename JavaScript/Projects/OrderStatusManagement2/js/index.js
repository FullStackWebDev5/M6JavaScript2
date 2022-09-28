let numberOfOrders = 0

const manageOrder = () => {
	numberOfOrders++
	let todaysDate = new Date()
	let orderId = `MP${todaysDate.getFullYear()}${todaysDate.getMonth() + 1}${todaysDate.getDate()}0000${numberOfOrders}`

	createOrderCard(orderId)

	manageOrderStatus(orderId)
}