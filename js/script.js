// Working on Donate Button-------------------------------------------

const donation = document.getElementById('donation')

function donationButtonColorOnPageLoad() {
    let currentPage = document.location.pathname
    
    if (currentPage === '/html/index.html' || currentPage === '/') {
        donation.style.backgroundColor = '#B4F461';
    } else {
        donation.style.backgroundColor = ''
    }
}
donationButtonColorOnPageLoad()

donation.addEventListener('click', function() {
    donation.style.backgroundColor = '#B4F461'
})

// Working on History Button---------------------------------------------

const history = document.getElementById('history')

function historyButtonColorOnPageLoad() {
    let currentPage1 = document.location.pathname
    
    if (currentPage1 === '/html/history.html' || currentPage1 === '/') {
        history.style.backgroundColor = '#B4F461';
    } else {
        history.style.backgroundColor = ''
    }
}
historyButtonColorOnPageLoad()

history.addEventListener('click', function() {
    history.style.backgroundColor = '#B4F461'
})


// Preserving the History -----------------------------------------------




// Donate for Flood at Noakhali-------------------------------------------

document.getElementById('donateButtonNoakhali')
.addEventListener('click', function(event) {
    event.preventDefault()

    const donateToNoakhali = inputFieldValueById('donateToNoakhali')
    let totalFundNoakhali = fieldValueById('totalFundNoakhali')
    let balance = fieldValueById('balance')
    const modal = document.getElementById('my_modal_1')

    if (isNaN(donateToNoakhali)){
        alert('Failed!')
        return
    }
    if (donateToNoakhali > balance || donateToNoakhali <= 0) {
        alert('Failed')
        return
    }

    const newBalance = balance - donateToNoakhali;
    totalFundNoakhali += donateToNoakhali;
    
    document.getElementById('balance').innerText = newBalance
    document.getElementById('totalFundNoakhali').innerText = totalFundNoakhali

    modal.showModal()

    const historyItem = document.createElement('div')

    historyItem.innerHTML = `
      <h4>${donateToNoakhali} is Donated for Flood at Noakhali, Bangladesh</h4>
      <p>Date: ${new Date}</p> 

    `
    const historyContainer = document.getElementById('historyList');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

    document.getElementById('donateToNoakhali').value = ''
})

// Donate for Flood at Feni-------------------------------------------------- 

document.getElementById('donateButtonFeni')
.addEventListener('click', function(event2) {
    event2.preventDefault()

    const donateToFeni = inputFieldValueById('donateToFeni')
    let totalFundFeni = fieldValueById('totalFundFeni')
    let balance = fieldValueById('balance')
    const modal = document.getElementById('my_modal_1')

    if (isNaN(donateToFeni)){
        alert('Failed!')
        return
    }
    if (donateToFeni > balance || donateToFeni <= 0) {
        alert('Failed')
        return
    }

    const newBalance = balance - donateToFeni;
    totalFundFeni += donateToFeni;
    
    document.getElementById('balance').innerText = newBalance
    document.getElementById('totalFundFeni').innerText = totalFundFeni

    modal.showModal()

    document.getElementById('donateToFeni').value = ''
})



// Aid for Injured in the Quota Movement-------------------------------------------------- 

document.getElementById('donateButtonQuotaMovement')
.addEventListener('click', function(event3) {
    event3.preventDefault()

    const donateToQuotaMovement = inputFieldValueById('donateToQuotaMovement')
    let totalFundQuotaMovement = fieldValueById('totalFundQuotaMovement')
    let balance = fieldValueById('balance')
    const modal = document.getElementById('my_modal_1')

    if (isNaN(donateToQuotaMovement)){
        alert('Failed!')
        return
    }
    if (donateToQuotaMovement > balance || donateToQuotaMovement <= 0) {
        alert('Failed')
        return
    }

    const newBalance = balance - donateToQuotaMovement;
    totalFundQuotaMovement += donateToQuotaMovement;
    
    document.getElementById('balance').innerText = newBalance
    document.getElementById('totalFundQuotaMovement').innerText = totalFundQuotaMovement

    modal.showModal()
    
    document.getElementById('donateToQuotaMovement').value = ''
})



