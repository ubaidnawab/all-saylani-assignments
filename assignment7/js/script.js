function getNum(num) {

    var output = document.getElementById("output");
    output.value += num;
}


function equal() {
            var output = document.getElementById("output");
            var result = eval(output.value);
            output.value = '';
            output.value = result
        }
window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
            var output = document.getElementById("output");
            var result = eval(output.value);
            output.value = '';
            output.value = result
    }
    else {
        alert('please press Enter key for result');
    }

});

function clearfn(){
    var output = document.getElementById("output");
    output.value ='';
}
function backfn(){
    var output = document.getElementById("output");
    var str = output.value;
    output.value = str.slice(0, -1);

}