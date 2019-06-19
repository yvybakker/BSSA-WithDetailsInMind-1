function filterSelection(btn_class) {
    let divColumn = document.querySelectorAll("div.column");
    let all_btn = document.querySelectorAll("button");

    checkName(btn_class);

    function checkName(btn_class) {
        all_btn.forEach(btn => {
            if (btn.classList.contains(`btn-${btn_class}`)) {
                btn.classList.add("border");
            } else {
                btn.classList.remove("border");
            }
        });

        divColumn.forEach(div => {
            if (div.classList.contains(btn_class)) {
                div.classList.add("show");
            } else {
                div.classList.remove("show");
            }
        });
    }
}


setTimeout(function () {
    document.getElementById("page-content").textContent = '';
}, 3000);


// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("column");

//     if (c == "all") c = "";
//     for (i = 0; i < x.length; i++) {
//         RemoveClass(x[i], "show");
//         if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
//     }
// }

// function AddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
// }

// function RemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
// }


// filterSelection("all")

// var btnContainer = document.getElementById("myBtnContainer");
// var btns = document.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// }