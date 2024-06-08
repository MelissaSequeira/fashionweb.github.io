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
