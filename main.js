function ok(){

let date1 = new Date(document.getElementById("firstDate").value);
let date2 = new Date();

// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days =

  Math.round(Difference_In_Time / (1000 * 3600 * 24));

// To display the final no. of days (result)


let display = document.getElementById('display');
display.innerHTML = Difference_In_Days
}

function changePage() {
        // Change the page to a new location
        window.location.href = 'intrest.html';
    }