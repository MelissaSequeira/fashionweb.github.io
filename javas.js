document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
});

// Function to handle click on Add to Cart button
function addToCart(event) {
    // Get the parent element of the clicked button
    var productContainer = event.target.parentNode;

    // Find product name and price within the parent element
    var productName = productContainer.querySelector('.product-name').innerText;
    var productPrice = parseFloat(productContainer.querySelector('.product-price').innerText);

    // Access the table body
    var tableBody = document.getElementById('cart-table').getElementsByTagName('tbody')[0];

    // Create a new row
    var newRow = tableBody.insertRow();

    // Insert cells with product name and price
    var productNameCell = newRow.insertCell(0);
    var productPriceCell = newRow.insertCell(1);

    alert(productName + " has been added to the cart!");
    // Set the inner text of the cells
    productNameCell.innerText = productName;
    productPriceCell.innerText = productPrice.toFixed(2) + "INR"; // Assuming prices are in USD

    // Optionally, you can calculate total price and update it here
    var totalPriceCell = document.getElementById('total-price');
    var currentTotal = parseFloat(totalPriceCell.innerText.split(" ")[0]);
    var newTotal = currentTotal + productPrice;
    totalPriceCell.innerText = newTotal.toFixed(2) + " INR";

    // Prevent the default action of the button
    event.preventDefault();
}

// Add click event listener to all Add to Cart buttons
var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
    
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the submit button element
    var feedsubbtn = document.querySelector(".feedback-submit-btn");
    
    // Add event listener for click on the submit button
    feedsubbtn.addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the current value of the email input field
        var emailtext = document.querySelector(".eboxes").value;
        
        // Get the current value of the password input field
        var passtext = document.querySelector(".pboxes").value;
        var feedtext = document.querySelector(".fboxes").value;

        // Check if email and password are empty
        if (emailtext === "" && passtext === "" && feedtext==="") {
            // If both are empty, show alert
            alert("Please enter your name ,email and password!");
        }
        else if(emailtext === "") {
            // If email is empty, show alert
            alert("Please enter your Name!");
        }
        else if (passtext === "") {
            // If password is empty, show alert
            alert("Please enter your Email!");
        }
        else if (feedtext === "") {
            // If password is empty, show alert
            alert("Please enter your Feedback!");
        }
        else {
            // Redirect to the specified URL
            alert('Thank You for your valuable feedback!')
        }
    });
});

let dress_sec=document.querySelector('.inner-catdivd');
let innerhtml1='';

let itemdress=[{dim:'cdress1.webp', dprodname:'name1',dprodprice:4000},
    {dim:'cdress5.jpg', dprodname:'name2',dprodprice:4000},
    {dim:'dress3.webp', dprodname:'name3',dprodprice:4000},
    {dim:'dress4.jpeg', dprodname:'name4',dprodprice:4000},
    {dim:'dress5.png', dprodname:'name5',dprodprice:4000},
    {dim:'dress6.webp', dprodname:'name6',dprodprice:4000},
    {dim:'dress7.jpeg', dprodname:'name7',dprodprice:4000},
    {dim:'dress8.webp', dprodname:'name8',dprodprice:4000}
];

if(!dress_sec){
    console.log('sjhfbsjd');
}else{
    itemdress.forEach(item1=>{
        innerhtml1+=`
        <div class="inner-categary-divd">
                
                <div class="inner-categary-divd-img">
                <img src="${item1.dim}">
                </div>
                <div class="dprdinfo">
                <div class="product-name">${item1.dprodname}</div>
                <div class="product-price">${item1.dprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
                
        </div>
        `;
    });
    dress_sec.innerHTML=innerhtml1;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftdbut = document.querySelector('#lbut');
    let rightdbut = document.querySelector('#rbut');
    let slidecont = document.querySelector('.inner-catdivd');
    let slidepics = document.querySelectorAll('.inner-categary-divd'); // Selecting all elements with the class

    let slideno1 = 0;
    let picwidth = 1000;

    rightdbut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno1 < slidepics.length - Math.floor(slidecont.clientWidth / picwidth)) { 
            slideno1++;
            slidecont.style.transform = `translateX(-${slideno1 * picwidth}px)`;
        }
    });

    leftdbut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno1 > 0) { 
            slideno1--;
            slidecont.style.transform = `translateX(-${slideno1 * picwidth}px)`;
        }
    });
});

let access_sec=document.querySelector('.inner-catdiva');
let innerhtml2='';

let itemaccess=[{aim:'caccess1.webp', aprodname:'name1',aprodprice:4000},
    {aim:'caccess2.jpg', aprodname:'name2',aprodprice:4000},
    {aim:'access3.jpg', aprodname:'name3',aprodprice:4000},
    {aim:'access4.jpg', aprodname:'name4',aprodprice:4000},
    {aim:'access5.webp', aprodname:'name5',aprodprice:4000},
    {aim:'access6.jpg', aprodname:'name6',aprodprice:4000},
    {aim:'access7.jpeg', aprodname:'name7',aprodprice:4000},
    {aim:'access8.avif', aprodname:'name8',aprodprice:4000}
];

if(!access_sec){
    console.log('sjhfbsjd');
}else{
    itemaccess.forEach(item2=>{
        innerhtml2+=`
        <div class="inner-categary-diva">
                
                <div class="inner-categary-diva-img">
                <img src="${item2.aim}">
                </div>
                <div class="aprdinfo">
                <div class="product-name">${item2.aprodname}</div>
                <div class="product-price">${item2.aprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
                
        </div>
        `;
    });
    access_sec.innerHTML=innerhtml2;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftabut = document.querySelector('#lbut1');
    let rightabut = document.querySelector('#rbut1');
    let slidecont1 = document.querySelector('.inner-catdiva');
    let slidepics1 = document.querySelectorAll('.inner-categary-diva'); // Selecting all elements with the class

    let slideno2 = 0;
    let picwidth1 = 1000;

    rightabut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno2 < slidepics1.length - Math.floor(slidecont1.clientWidth / picwidth1)) { 
            slideno2++;
            slidecont1.style.transform = `translateX(-${slideno2 * picwidth1}px)`;
        }
    });

    leftabut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno2 > 0) { 
            slideno2--;
            slidecont1.style.transform = `translateX(-${slideno2 * picwidth1}px)`;
        }
    });
});

let cosmet_sec=document.querySelector('.inner-catdivc');
let innerhtml3='';

let itemcosmet =[{cim:'ccos1.jpg', cprodname:'name1',cprodprice:4000},
    {cim:'ccos2.jpg', cprodname:'name2',cprodprice:4000},
    {cim:'cosmt4.jpg', cprodname:'name3',cprodprice:4000},
    {cim:'cosmt3.jpg', cprodname:'name4',cprodprice:4000},
    {cim:'cosmt6.jpeg', cprodname:'name5',cprodprice:4000},
    {cim:'cosmt5.jpg', cprodname:'name6',cprodprice:4000},
    {cim:'cosmt7.jpg', cprodname:'name7',cprodprice:4000},
    {cim:'ccos3.webp', cprodname:'name8',cprodprice:4000}
];
if(!cosmet_sec){
    console.log('sjhfbsjd');
}else{
    itemcosmet.forEach(item3=>{
        innerhtml3+=`
        <div class="inner-categary-divc">
                <div class="inner-categary-divc-img">
                <img src="${item3.cim}">
                </div>
                <div class="cprdinfo">
                <div class="product-name">${item3.cprodname}</div>
                <div class="product-price">${item3.cprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
        </div>
        `;
    });
    cosmet_sec.innerHTML=innerhtml3;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftcbut = document.querySelector('#lbut2');
    let rightcbut = document.querySelector('#rbut2');
    let slidecont2 = document.querySelector('.inner-catdivc');
    let slidepics2 = document.querySelectorAll('.inner-categary-divc'); // Selecting all elements with the class

    let slideno3 = 0;
    let picwidth2 = 1000;

    rightcbut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno3 < slidepics2.length - Math.floor(slidecont2.clientWidth / picwidth2)) { 
            slideno3++;
            slidecont2.style.transform = `translateX(-${slideno3 * picwidth2}px)`;
        }
    });

    leftcbut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno3 > 0) { 
            slideno3--;
            slidecont2.style.transform = `translateX(-${slideno3 * picwidth2}px)`;
        }
    });
});

let jewel_sec=document.querySelector('.inner-catdivj');
let innerhtml4='';
let itemjewel=[{jim:'cjew1.jpg', jprodname:'name1',jprodprice:4000},
    {jim:'cjew2.webp', jprodname:'name2',jprodprice:4000},
    {jim:'jewel3.jpeg', jprodname:'name3',jprodprice:4000},
    {jim:'jewel4.jpg', jprodname:'name4',jprodprice:4000},
    {jim:'jewel5.jpeg', jprodname:'name5',jprodprice:4000},
    {jim:'jewel6.jpg', jprodname:'name6',jprodprice:4000},
    {jim:'jewel7.jpg', jprodname:'name7',jprodprice:4000},
    {jim:'jewel8.webp', jprodname:'name8',jprodprice:4000}
];

if(!jewel_sec){
    console.log('sjhfbsjd');
}else{
    itemjewel.forEach(item4=>{
        innerhtml4+=`
        <div class="inner-categary-divj">
                <div class="inner-categary-divj-img">
                <img src="${item4.jim}">
                </div>
                <div class="jprdinfo">
                <div class="product-name">${item4.jprodname}</div>
                <div class="product-price">${item4.jprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
        </div>
        `;
    });
    jewel_sec.innerHTML=innerhtml4;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftjbut = document.querySelector('#lbut3');
    let rightjbut = document.querySelector('#rbut3');
    let slidecont3 = document.querySelector('.inner-catdivj');
    let slidepics3 = document.querySelectorAll('.inner-categary-divj'); // Selecting all elements with the class

    let slideno4 = 0;
    let picwidth3 = 1000;

    rightjbut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno4 < slidepics3.length - Math.floor(slidecont3.clientWidth / picwidth3)) { 
            slideno4++;
            slidecont3.style.transform = `translateX(-${slideno4 * picwidth3}px)`;
        }
    });

    leftjbut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno4 > 0) { 
            slideno4--;
            slidecont3.style.transform = `translateX(-${slideno4 * picwidth3}px)`;
        }
    });
});
let foot_sec=document.querySelector('.inner-catdivf');
let innerhtml5='';
let itemfoot=[{fim:'cfoot1.jpg', fprodname:'name1',fprodprice:4000},
    {fim:'cfoot2.webp', fprodname:'name2',fprodprice:4000},
    {fim:'foot3.jpg', fprodname:'name3',fprodprice:4000},
    {fim:'foot4.jpeg', fprodname:'name4',fprodprice:4000},
    {fim:'foot5.webp', fprodname:'name5',fprodprice:4000},
    {fim:'foot6.jpg', fprodname:'name6',fprodprice:4000},
    {fim:'foot7.webp', fprodname:'name7',fprodprice:4000}
];

if(!foot_sec){
    console.log('sjhfbsjd');
}else{
    itemfoot.forEach(item5=>{
        innerhtml5+=`
        <div class="inner-categary-divf">
                <div class="inner-categary-divf-img">
                <img src="${item5.fim}">
                </div>
                <div class="fprdinfo">
                <div class="product-name">${item5.fprodname}</div>
                <div class="product-price">${item5.fprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
        </div>
        `;
    });
    foot_sec.innerHTML=innerhtml5;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftfbut = document.querySelector('#lbut4');
    let rightfbut = document.querySelector('#rbut4');
    let slidecont4 = document.querySelector('.inner-catdivf');
    let slidepics4 = document.querySelectorAll('.inner-categary-divf'); // Selecting all elements with the class

    let slideno5 = 0;
    let picwidth4 = 1000;

    rightfbut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno5 < slidepics4.length - Math.floor(slidecont4.clientWidth / picwidth4)) { 
            slideno5++;
            slidecont4.style.transform = `translateX(-${slideno5 * picwidth4}px)`;
        }
    });

    leftfbut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno5 > 0) { 
            slideno5--;
            slidecont4.style.transform = `translateX(-${slideno5 * picwidth4}px)`;
        }
    });
});


let jack_sec=document.querySelector('.inner-catdivs');
let innerhtml6='';

let itemjack=[{sim:'cjack11.jpg', sprodname:'name1',sprodprice:4000},
    {sim:'cjack12.webp',sprodname:'name2',sprodprice:4000},
    {sim:'jack3.jpg', sprodname:'name3',sprodprice:4000},
    {sim:'jack4.jpeg', sprodname:'name4',sprodprice:4000},
    {sim:'jack5.webp', sprodname:'name5',sprodprice:4000},
    {sim:'jack6.jpg', sprodname:'name6',sprodprice:4000},
    {sim:'jack7.jpg',sprodname:'name7',sprodprice:4000},
];

if(!jack_sec){
    console.log('sjhfbsjd');
}else{
    itemjack.forEach(item6=>{
        innerhtml6+=`
        <div class="inner-categary-divs">
                
                <div class="inner-categary-divs-img">
                <img src="${item6.sim}">
                </div>
                <div class="sprdinfo">
                <div class="product-name">${item6.sprodname}</div>
                <div class="product-price">${item6.sprodprice}</div>
                <button class="add-to-cart-button">Add TO Cart</button>
                </div>
                
        </div>
        `;
    });
    jack_sec.innerHTML=innerhtml6;
}
document.addEventListener('DOMContentLoaded', (event) => {
    let leftsbut = document.querySelector('#lbut5');
    let rightsbut = document.querySelector('#rbut5');
    let slidecont5 = document.querySelector('.inner-catdivs');
    let slidepics5 = document.querySelectorAll('.inner-categary-divs'); // Selecting all elements with the class

    let slideno6 = 0;
    let picwidth5 = 1000;

    rightsbut.addEventListener('click', () => {
        // Adjust condition for proper range
        if (slideno6 < slidepics5.length - Math.floor(slidecont5.clientWidth / picwidth5)) { 
            slideno6++;
            slidecont5.style.transform = `translateX(-${slideno6 * picwidth5}px)`;
        }
    });

    leftsbut.addEventListener('click', () => {
        // Add left button functionality
        if (slideno6 > 0) { 
            slideno6--;
            slidecont5.style.transform = `translateX(-${slideno6 * picwidth5}px)`;
        }
    });
});
