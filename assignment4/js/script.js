// // alert("Working");
// let topName = ["jecket One","jecket Two","jecket Three"];
// let topDescrip = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam!",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam!",
//                   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsam!"];
// let topImageAddress = ["iamges/top-jeckt1.jpg","iamges/top-jeckt2.jpg","iamges/top-jeckt3.jpg"];


// // function fetchData(){
//     topName.forEach(function(item,index){
//         let elementId = document.getElementById("top-product");
//         var h5=document.createElement('h5');
//         h5.innerHTML=item;
//         elementId.append(h5);
//     });    
    
            
//     // }
// // }
// const toggelBrn = document.getElementById('toggel');

// toggelBrn.addEventListener('click', function(){
//     document.body.classList.toggle('sho-nav');

//     const TogBtn = document.getElementById('toggel');
//     document.TogBtn.classList.toggle("toggel ToggleButton");
//     // const togleBtn = li.parentElement;
//     // const addClass = togleBtn.className = 'toggel ToggleButton';
//     // document.body.classList.toggle(addClass);

// });

// var singInId = document.getElementById("signin");
// var loginPopForm = document.getElementById("loginPopForm");
// singInId.addEventListener('click', function(){
//     // document.loginPopForm.classList.toggle('show');
//     console.log("working");
// })
//  var singInId = document.getElementById("signin");
    
  function singIn(){
    var loginPopForm = document.getElementById("loginPopForm");
    if (loginPopForm.style.display === "none") {
        loginPopForm.style.display = "block";
        var singInId = document.getElementById("signin");
        singInId.style.color= "#333";
    } else {
        loginPopForm.style.display = "none";
        var singInId = document.getElementById("signin");
        singInId.style.color= "#fff";
    }
    // console.log("i am working");

 }
    