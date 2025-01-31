function volume_sphere() {
    //Write your code here
	var form =document.querySelector('#MyForm')
var radiusInput = document.querySelector('#radius');
var volumeInput = document.querySelector('#volume')
var btn = document.querySelector('#submit');

// Add an event listener to the form's submit event
form.addEventListener('submit',function(event){
    //// Prevent the form from submitting and refreshing the page
    event.preventDefault();
     //// Get the radius value and convert it to a number
    var radius = parseFloat(radiusInput.value);

    //check radius value is positive number.
    if(isNaN(radius) || radius <= 0){
        alert('Please enter a valid positive number for the radius.');
        //// Exit the function if the input is invalid
        return;   
    }

    // Calculate the volume of the sphere
    var volume = (4/3)* Math.PI*Math.pow(radius,3);
     // Display the volume in the volume input field, rounded to 2 decimal places
    volumeInput.value = volume.toFixed(2);

});
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
