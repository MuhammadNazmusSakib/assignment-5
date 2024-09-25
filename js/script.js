// Working on Donate Button-------------------------------------------

const donation = document.getElementById('donation')
donation.style.backgroundColor = '#B4F461'
donation.addEventListener('click', function() {
    donation.style.backgroundColor = '#B4F461'
    document.getElementById('homeContent').classList.remove('hidden')
    document.getElementById('historyList').classList.add('hidden')
    document.getElementById('blogContent').classList.add('hidden')
    document.getElementById('history').style.backgroundColor = ''
})

// Working on History Button---------------------------------------------

const history = document.getElementById('history')

history.addEventListener('click', function() {
    history.style.backgroundColor = '#B4F461'
    document.getElementById('homeContent').classList.add('hidden')
    document.getElementById('blogContent').classList.add('hidden')
    document.getElementById('historyList').classList.remove('hidden')
    document.getElementById('donation').style.backgroundColor = ''
})


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
    <div class="bg-base-200 border border-[#E9E9E9] rounded-2xl p-5">
      <h4 class="text-xl font-bold">${donateToNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</h4>
      <p>Date: ${new Date}</p> 
    </div>
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

    // History 

    const historyItem = document.createElement('div')

    historyItem.innerHTML = `
    <div class="bg-base-200 border border-[#E9E9E9] rounded-2xl p-5">
      <h4 class="text-xl font-bold">${donateToFeni} Taka is Donated for Flood at Feni, Bangladesh</h4>
      <p>Date: ${new Date}</p> 
    </div>
    `
    const historyContainer = document.getElementById('historyList');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)

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

    // History 

    const historyItem = document.createElement('div')

    historyItem.innerHTML = `
    <div class="bg-base-200 border border-[#E9E9E9] rounded-2xl p-5">
      <h4 class="text-xl font-bold">${donateToQuotaMovement} Taka is Donated for Aid for Injured in the Quota Movement</h4>
      <p>Date: ${new Date}</p> 
    </div>
    `
    const historyContainer = document.getElementById('historyList');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
    
    document.getElementById('donateToQuotaMovement').value = ''
})


// Working on Blog Content------------------------------------------

const blog = document.getElementById('blog')
blog.addEventListener('click', function() {
    document.getElementById('blog').classList.add('hidden')
    document.getElementById('homeContent').classList.add('hidden')
    document.getElementById('historyList').classList.add('hidden')
    document.getElementById('blogContent').classList.remove('hidden')
    document.getElementById('home').classList.remove('hidden')
    donation.style.backgroundColor = ''
    history.style.backgroundColor = ''
})

// Working on Home Content------------------------------------------

const home = document.getElementById('home')
home.addEventListener('click', function() {
    donation.style.backgroundColor = '#B4F461'
    document.getElementById('home').classList.add('hidden')
    document.getElementById('blogContent').classList.add('hidden')
    document.getElementById('historyList').classList.add('hidden')
    document.getElementById('homeContent').classList.remove('hidden')
    document.getElementById('blog').classList.remove('hidden')
    history.style.backgroundColor = ''
})

// ----------

document.getElementById('historyList').classList.add('hidden')

