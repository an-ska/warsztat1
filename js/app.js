document.addEventListener("DOMContentLoaded", function(){


    // rozwijana lista menu
    var about = document.querySelector('.about');
    var hiddenList = document.querySelector('.hidden-list');
    var square = document.querySelector('.square');

    about.addEventListener('mouseenter', function(){
        hiddenList.classList.add('menuVisible');
        square.classList.add('menuVisible');
    })
    hiddenList.addEventListener('mouseleave', function(){
        hiddenList.classList.remove('menuVisible');
        square.classList.remove('menuVisible');
    })


    //slajder
    var buttonNext = document.querySelector('.special-character-r');
    var buttonPrev = document.querySelector('.special-character-l');
    var list = document.querySelectorAll(".gallery-slider-l ul li");
    var picIndex = 0;

    list[picIndex].className = "visible";

    buttonNext.addEventListener("click", function(event) {
        list[picIndex].classList.remove("visible");
        picIndex++;
        if (picIndex > list.length - 1) {
            picIndex = list.length - 1;
        }
        list[picIndex].className = "visible";

    })
    buttonPrev.addEventListener("click", function(event) {
        list[picIndex].classList.remove("visible");
        picIndex--;
        if (picIndex < 0) {
            picIndex = 0;
        }
        list[picIndex].className = "visible";
    })


    //znikajacy tekst z obrazkow
    var boxOne = document.querySelector('.box1');
    var boxTwo= document.querySelector('.box2');
    var boxOneChildren = boxOne.children;
    var boxTwoChildren = boxTwo.children;
    console.log(boxOne);
    console.log(boxTwo);
    console.log(boxOneChildren);
    console.log(boxTwoChildren);

    boxOne.addEventListener('mouseenter', function(event) {
        for (var i=0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.add('picTextVisible');
        }
    })
    boxOne.addEventListener('mouseleave', function(event) {
        for (var i=0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.remove('picTextVisible');
        }
    })
    boxTwo.addEventListener('mouseenter', function(event) {
        for (var i=0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.add('picTextVisible');
        }
    })
    boxTwo.addEventListener('mouseleave', function(event) {
        for (var i=0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.remove('picTextVisible');
        }
    })

        //kalkulator
        var sort = document.getElementById("sort");
        var titleTableL = document.querySelector(".titleTableL");
        var titleTableR = document.querySelector(".titleTableR");
        var color = document.getElementById("color");
        var colorTableL = document.querySelector(".colorTableL");
        var colorTableR = document.querySelector(".colorTableR");
        var material = document.getElementById("material");
        var patternTableL = document.querySelector(".patternTableL");
        var patternTableR = document.querySelector(".patternTableR");
        var transportTableL = document.querySelector(".transportTableL");
        var transportTableR = document.querySelector(".transportTableR");
        var sum = document.querySelector(".sum");

        function chairSort() {
            if (sort.value == "") {
                titleTableL.innerHTML = "Twój fotel";
                titleTableR.innerHTML = sort.children[0].dataset.price;
            } else if (sort.value == "Clair") {
                titleTableL.innerHTML = "Clair";
                titleTableR.innerHTML = sort.children[1].dataset.price;
            } else if (sort.value == "Margarita") {
                titleTableL.innerHTML = "Margarita";
                titleTableR.innerHTML = sort.children[2].dataset.price;
            } else if (sort.value == "Selena") {
                titleTableL.innerHTML = "Selena";
                titleTableR.innerHTML = sort.children[3].dataset.price;
            }
        }
        sort.addEventListener("change", chairSort);

         function chairColor() {
             if (color.value == "") {
                 colorTableL.innerHTML = "";
                 colorTableR.innerHTML = color.children[0].dataset.price;
             } else if (color.value == "Czerwony") {
                 colorTableL.innerHTML = "Czerwony";
                 colorTableR.innerHTML = color.children[1].dataset.price;
             } else if (color.value == "Czarny") {
                 colorTableL.innerHTML = "Czarny";
                 colorTableR.innerHTML = color.children[2].dataset.price;
             } else if (color.value == "Pomarańczowy") {
                 colorTableL.innerHTML = "Pomarańczowy";
                 colorTableR.innerHTML = color.children[3].dataset.price;
             }
         }
         color.addEventListener("change", chairColor);

         function chairMaterial() {
             if (material.value == "") {
                 patternTableL.innerHTML = "";
                 patternTableR.innerHTML = material.children[0].dataset.price;
             } else if (material.value == "Tkanina") {
                 patternTableL.innerHTML = "Tkanina";
                 patternTableR.innerHTML = material.children[1].dataset.price;
             } else if (material.value == "Skóra") {
                 patternTableL.innerHTML = "Skóra";
                 patternTableR.innerHTML = material.children[2].dataset.price;
             }
         }
         material.addEventListener("change", chairMaterial);

         function total() {
            var titleChosen = document.querySelector(".titleTableR");
            var titleChosen1 = parseFloat(titleChosen.innerHTML);
            if (isNaN(titleChosen1)) {
                titleChosen1 = 0;
            }
            var colorChosen = document.querySelector(".colorTableR");
            var colorChosen1 = parseFloat(colorChosen.innerHTML);
            if (isNaN(colorChosen1)) {
                colorChosen1 = 0;
            }
            var patternChosen = document.querySelector(".patternTableR");
            var patternChosen1 = parseFloat(patternChosen.innerHTML);
            if (isNaN(patternChosen1)) {
                patternChosen1 = 0;
           }
           sum.innerHTML = titleChosen1 + colorChosen1 + patternChosen1;
        }
        
        sort.addEventListener("change", total);
        color.addEventListener("change", total);
        material.addEventListener("change", total);

});
