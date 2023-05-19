document.getElementById('button').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
})

var eg = document.getElementById("egroup_pop");

var egbtn = document.getElementById("eg_popup");

var span = document.getElementsByClassName("eg_close")[0];

egbtn.onclick = function () {
    eg.style.display = "block";
}
span.onclick = function () {
    eg.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == eg) {
        eg.style.display = "none";
    }
}