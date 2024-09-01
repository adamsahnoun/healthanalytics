function openTab(tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    var activeButton = Array.from(tabbuttons).find(button => button.onclick.name === tabName);
    if (activeButton) {
        activeButton.className += " active";
    }
}

function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    if (height > 0 && weight > 0) {
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);
        document.getElementById("bmi-result").innerText = "Your BMI is: " + bmi.toFixed(2);
    } else {
        document.getElementById("bmi-result").innerText = "Please enter valid height and weight.";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    openTab('bmi');  // Open the default tab
});
