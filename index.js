
// Blog Button

document.getElementById("blog-btn").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./blog.html";
});




// Donation Button and History Button

document.getElementById("donation-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("donation-btn").classList.add("bg-[#B4F461]");
    document.getElementById("history-btn").classList.remove("bg-[#B4F461]");

    document.getElementById("main-section").classList.remove("hidden");
    document.getElementById("history-section").classList.add("hidden");
    
});

document.getElementById("history-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("history-section").classList.remove("hidden");
    document.getElementById("main-section").classList.add("hidden");

    document.getElementById("history-btn").classList.add("bg-[#B4F461]");
    document.getElementById("donation-btn").classList.remove("bg-[#B4F461]");
    
});



// Modal Ready
document.getElementById('noakhali-input').addEventListener('keyup', function (event) {
    
    event.preventDefault();
    let noakhaliInputMoney = document.getElementById("noakhali-input").value;
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (noakhaliInputMoney == "" || noakhaliInputMoney == null || noakhaliInputMoney == undefined || noakhaliInputMoney == 0 || isNaN(noakhaliInputMoney) || noakhaliInputMoney < 0 || noakhaliInputMoney > myWallet) {
        document.getElementById('noakhali-donate-input').removeAttribute('onclick');
    } else {
        document.getElementById('noakhali-donate-input').setAttribute('onclick', 'my_modal_1.showModal()');
    }
    

});

document.getElementById('feni-input').addEventListener('keyup', function (event) {

    event.preventDefault();
    let feniInputMoney = document.getElementById("feni-input").value;
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (feniInputMoney == "" || feniInputMoney == null || feniInputMoney == undefined || feniInputMoney == 0 || isNaN(feniInputMoney) || feniInputMoney < 0 || feniInputMoney > myWallet) {
        document.getElementById('feni-donate-input').removeAttribute('onclick');
    } else {
        document.getElementById('feni-donate-input').setAttribute('onclick', 'my_modal_1.showModal()');
    }

});


document.getElementById('quota-input').addEventListener('keyup', function (event) {

    event.preventDefault();
    let quotaInputMoney = document.getElementById("quota-input").value;
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (quotaInputMoney == "" || quotaInputMoney == null || quotaInputMoney == undefined || quotaInputMoney == 0 || isNaN(quotaInputMoney) || quotaInputMoney < 0 || quotaInputMoney > myWallet) {
        document.getElementById('quota-donate-input').removeAttribute('onclick');
    } else {
        document.getElementById('quota-donate-input').setAttribute('onclick', 'my_modal_1.showModal()');
    }

});




// Noakhali Donate
document.getElementById("noakhali-donate-input").addEventListener("click", function (event) {
    event.preventDefault();
    let noakhaliInput = document.getElementById("noakhali-input").value;
    console.log(noakhaliInput);

    let noakhaliWallet = parseInt(document.getElementById("noakhali-wallet").innerText);
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (noakhaliInput == "" || noakhaliInput == null || noakhaliInput == undefined || noakhaliInput == 0 || isNaN(noakhaliInput) || noakhaliInput < 0 || noakhaliInput > myWallet) {
        alert("Please Enter Valid Amount");

    } else {

        document.getElementById("noakhali-wallet").innerText = parseInt(noakhaliInput) + noakhaliWallet;
        document.getElementById("my-wallet").innerText -= parseInt(noakhaliInput);

        document.getElementById("noakhali-input").value = "";


        // -------------------------------------------------------------------------------------
        // Create Section for History
        let historySection = document.getElementById('history-section');
        

        let section = document.createElement('section');
        section.className = 'w-[1440px] mx-auto my-5';
        
        let innerDiv = document.createElement('div');
        innerDiv.className = 'w-4/5 mx-auto border rounded-lg border-[#1111111a] p-7';
        
        let noakhaliTitle = document.getElementById("noakhali-title").innerText; 
        let heading = document.createElement('h4');
        heading.className = 'font-bold mb-2';
        heading.textContent = noakhaliInput + ' Taka is Donated for ' + noakhaliTitle;
        
        let paragraph = document.createElement('p');
        paragraph.className = 'p-2 bg-[#f1efef] rounded';
        let date = new Date();
        paragraph.textContent = `Date : ${date.toLocaleString()}`;
        
        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);
        
        section.appendChild(innerDiv);
        
        historySection.appendChild(section);
        



    }

});




// Feni Donate
document.getElementById("feni-donate-input").addEventListener("click", function (event) {
    event.preventDefault();
    let feniInput = document.getElementById("feni-input").value;
    console.log(feniInput);

    let feniWallet = parseInt(document.getElementById("feni-wallet").innerText);
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (feniInput == "" || feniInput == null || feniInput == undefined || feniInput == 0 || isNaN(feniInput) || feniInput < 0 || feniInput > myWallet) {
        alert("Please Enter Valid Amount");
    } else {
        document.getElementById("feni-wallet").innerText = parseInt(feniInput) + feniWallet;
        document.getElementById("my-wallet").innerText -= parseInt(feniInput);

        document.getElementById("feni-input").value = "";



        // -------------------------------------------------------------------------------------
        // Create Section for History
        let historySection = document.getElementById('history-section');

        let section = document.createElement('section');
        section.className = 'w-[1440px] mx-auto my-5';        
        
        let innerDiv = document.createElement('div');
        innerDiv.className = 'w-4/5 mx-auto border rounded-lg border-[#1111111a] p-7';        
        
        let feniTitle = document.getElementById("feni-title").innerText; 
        let heading = document.createElement('h4');
        heading.className = 'font-bold mb-2';
        heading.textContent = feniInput + ' Taka is Donated for ' + feniTitle;        
        
        let paragraph = document.createElement('p');
        paragraph.className = 'p-2 bg-[#f1efef] rounded';
        let date = new Date();
        paragraph.textContent = `Date : ${date.toLocaleString()}`;        
        
        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);
        
        section.appendChild(innerDiv);
        
        historySection.appendChild(section);


    }

});


// Quota Donate
document.getElementById("quota-donate-input").addEventListener("click", function (event) {
    event.preventDefault();
    let quotaInput = document.getElementById("quota-input").value;
    console.log(quotaInput);

    let quotaWallet = parseInt(document.getElementById("quota-wallet").innerText);
    let myWallet = parseInt(document.getElementById("my-wallet").innerText);

    if (quotaInput == "" || quotaInput == null || quotaInput == undefined || quotaInput == 0 || isNaN(quotaInput) || quotaInput < 0 || quotaInput > myWallet) {
        alert("Please Enter Valid Amount");
    } else {
        document.getElementById("quota-wallet").innerText = parseInt(quotaInput) + quotaWallet;
        document.getElementById("my-wallet").innerText -= parseInt(quotaInput);

        document.getElementById("quota-input").value = "";     



        // -------------------------------------------------------------------------------------
        // Create Section for History
        let historySection = document.getElementById('history-section');

        let section = document.createElement('section');
        section.className = 'w-[1440px] mx-auto my-5';
        
        let innerDiv = document.createElement('div');
        innerDiv.className = 'w-4/5 mx-auto border rounded-lg border-[#1111111a] p-7';
        
        let quotaTitle = document.getElementById("quota-title").innerText; 
        let heading = document.createElement('h4');
        heading.className = 'font-bold mb-2';
        heading.textContent =  quotaInput + ' Taka is Donated for ' + quotaTitle;
        
        let paragraph = document.createElement('p');
        paragraph.className = 'p-2 bg-[#f1efef] rounded';
        let date = new Date();
        paragraph.textContent = `Date : ${date.toLocaleString()}`;
        
        innerDiv.appendChild(heading);
        innerDiv.appendChild(paragraph);
        
        section.appendChild(innerDiv);
        
        historySection.appendChild(section);
        
    }

});








