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
