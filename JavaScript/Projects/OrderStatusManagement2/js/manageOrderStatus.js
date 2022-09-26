const manageOrderStatus = async (orderId) => {
	let requiredStatusSpan = document.getElementById(orderId)

	const chefReceivedOrder = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Chef started preparing'
			resolve()
		}, 2000)
	})

	const pizzaSauceAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Pizza Sauce added'
			resolve()
		}, 10000)
	})

	const firstLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'First layer of cheeze added'
			resolve()
		}, 5000)
	})

	const toppingsAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Toppings added'
			resolve()
		}, 12000)
	})

	const secondLayerOfCheezeAdded = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Second layer of cheeze added'
			resolve()
		}, 5000)
	})

	const pizzaBaked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Pizza baked!'
			resolve()
		}, 15000)
	})

	const oreganoAddedAndPacked = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Oregano added and packed'
			resolve()
		}, 8000)
	})

	const packageReceivedAtCounter = () => new Promise((resolve, reject) => {
		setTimeout(() => {
			requiredStatusSpan.innerText = 'Package received at counter'
			resolve()
		}, 2000)
	})

	try{
		await chefReceivedOrder()
		await pizzaSauceAdded()
		await firstLayerOfCheezeAdded()
		await toppingsAdded()
		await secondLayerOfCheezeAdded()
		await pizzaBaked()
		await oreganoAddedAndPacked()
		await packageReceivedAtCounter()
		requiredStatusSpan.innerText = 'The order is ready!'
	} catch(err){
		console.error(err)
	}
}