const current1 = document.getElementById("current1");
const current2 = document.getElementById("current2");
const current3 = document.getElementById("current3");
const current4 = document.getElementById("current4");
const current5 = document.getElementById("current5");
const current6 = document.getElementById("current6");

const previous1 = document.getElementById("previous1");
const previous2 = document.getElementById("previous2");
const previous3 = document.getElementById("previous3");
const previous4 = document.getElementById("previous4");
const previous5 = document.getElementById("previous5");
const previous6 = document.getElementById("previous6");

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");

radio1.addEventListener("click", function(){
    current1.textContent = "5hrs";
    previous1.textContent = "Yesterday - 7hrs";
    current2.textContent = "1hr";
    previous2.textContent = "Yesterday - 2hrs";
    current3.textContent = "0hrs";
    previous3.textContent = "Yesterday - 1hr";
    current4.textContent = "1hr";
    previous4.textContent = "Yesterday - 1hr";
    current5.textContent = "1hr";
    previous5.textContent = "Yesterday - 3hrs";
    current6.textContent = "0hrs";
    previous6.textContent = "Yesterday - 1hr";
});

radio2.addEventListener("click", function(){
    current1.textContent = "32hrs";
    previous1.textContent = "Last Week - 36hrs";
    current2.textContent = "10hrs";
    previous2.textContent = "Last Week - 8hrs";
    current3.textContent = "4hrs";
    previous3.textContent = "Last Week - 7hrs";
    current4.textContent = "4hrs";
    previous4.textContent = "Last Week - 5hrs";
    current5.textContent = "5hrs";
    previous5.textContent = "Last Week - 10hrs";
    current6.textContent = "2hrs";
    previous6.textContent = "Last Week - 2hrs";
});

radio3.addEventListener("click", function(){
    current1.textContent = "103hrs";
    previous1.textContent = "Last Month - 128hrs";
    current2.textContent = "23hrs";
    previous2.textContent = "Last Month - 29hrs";
    current3.textContent = "13hrs";
    previous3.textContent = "Last Month - 19hrs";
    current4.textContent = "11hrs";
    previous4.textContent = "Last Month - 18hrs";
    current5.textContent = "21hrs";
    previous5.textContent = "Last Month - 23hrs";
    current6.textContent = "7hrs";
    previous6.textContent = "Last Month - 11hrs";
});