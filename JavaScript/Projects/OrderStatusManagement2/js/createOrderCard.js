const createOrderCard = (orderId) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let orderIdSpan = document.createElement('span')
	let cancelButtonI = document.createElement('i')
	let cardBodyDiv = document.createElement('div')
	let billTable = document.createElement('table')
	let billTableBody = document.createElement('tbody')
	let billTableRow1 = document.createElement('tr')
	let billTableRow1Data1 = document.createElement('th')
	let billTableRow1Data2 = document.createElement('td')
	let billTableRow1Data3 = document.createElement('td')
	let billTableRow2 = document.createElement('tr')
	let billTableRow2Data1 = document.createElement('th')
	let billTableRow2Data2 = document.createElement('td')
	let billTableRow2Data3 = document.createElement('td')
	let billTableRow3 = document.createElement('tr')
	let billTableRow3Data1 = document.createElement('th')
	let billTableRow3Data2 = document.createElement('td')
	let orderStatusSpan = document.createElement('span')
	let cardFooterDiv = document.createElement('div')

	colDiv.classList = 'col-md-3'
	cardDiv.classList = 'card text-center'
	cancelButtonI.classList = 'fa-solid fa-xmark cancel-btn'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	billTable.classList = 'table'
	orderStatusSpan.classList = 'badge rounded-pill bg-success'
	cardFooterDiv.classList = 'card-footer'

	let largePizzaCost = Math.ceil(Math.random()*10) + 15
	let mediumPizzaCost = Math.ceil(Math.random()*10) + 10

	billTableRow1Data1.innerText = '1'
	billTableRow2Data1.innerText = '2'
	billTableRow3Data1.innerText = 'Total'

	billTableRow1Data2.innerText = 'Large Pizza'
	billTableRow2Data2.innerText = 'Medium Pizza'
	billTableRow3Data2.innerText = `$${largePizzaCost + mediumPizzaCost}`

	billTableRow1Data3.innerText = `$${largePizzaCost}`
	billTableRow2Data3.innerText = `$${mediumPizzaCost}`

	billTableRow3Data1.colSpan = '2'

	orderIdSpan.innerHTML = `Order No.: <b>${orderId}</b>`
	// cardTitleH5.innerText = `Bill Amount: $${Math.ceil(Math.random()*42) + 10 }`
	// cardTextP.innerHTML = `Large Pizza - ${Math.ceil(Math.random()*3)} Nos<br>Medium Pizza - ${Math.ceil(Math.random()*3)} Nos`
	orderStatusSpan.innerText = 'Order placed'
	orderStatusSpan.id = orderId
	cardFooterDiv.innerText = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
  });

	cancelButtonI.addEventListener('click', () => {
		colDiv.style.display = 'none'
		document.getElementById('order-alert').style.display = 'block'

		setTimeout(() => {
			document.getElementById('order-alert').style.display = 'none'
		}, 5000)
	})

	// cardBodyDiv.appendChild(cardTitleH5)
	// cardBodyDiv.appendChild(cardTextP)
	billTableRow1.append(billTableRow1Data1, billTableRow1Data2, billTableRow1Data3)
	billTableRow2.append(billTableRow2Data1, billTableRow2Data2, billTableRow2Data3)
	billTableRow3.append(billTableRow3Data1, billTableRow3Data2)
	billTableBody.append(billTableRow1, billTableRow2, billTableRow3)
	billTable.appendChild(billTableBody)
	cardBodyDiv.appendChild(billTable)
	cardBodyDiv.appendChild(orderStatusSpan)
	cardHeaderDiv.appendChild(orderIdSpan)
	cardHeaderDiv.appendChild(cancelButtonI)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	colDiv.appendChild(cardDiv)
	document.getElementById('order-cards-wrapper').appendChild(colDiv)
}

/*
	<div class="col-md-3">
		<div class="card text-center">
			<div class="card-header">
				Order No.: MP202209230005
				<i class="fa-solid fa-xmark"></i>
			</div>
			<div class="card-body">
				<table class="table">
					<tbody>
						<tr>
							<th>1</th>
							<td>Large Pizza</td>
							<td>$15</td>
						</tr>
						<tr>
							<th>2</th>
							<td>Medium Pizza</td>
							<td>$12</td>
						</tr>
						<tr>
							<th colspan="2">Total</th>
							<td>$27</td>
						</tr>
					</tbody>
				</table>
				<span class="badge rounded-pill bg-success">Order placed</span>
			</div>
			<div class="card-footer">
				23-09-2022 09:47:36 PM
			</div>
		</div>
	</div>
*/