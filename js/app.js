document.addEventListener("DOMContentLoaded", function(){


    // rozwijana lista menu
    var about = document.querySelector('.about');
    var hiddenList = document.querySelector('.hidden-list');
    var square = document.querySelector('.square');

    console.log(about);
    console.log(hiddenList);
    console.log(square);

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

    console.log(buttonNext);
    console.log(buttonPrev);
    console.log(list);
    console.log(picIndex);
    list[picIndex].className = "visible";

    buttonNext.addEventListener("click", function(event) {
        // console.log("I was clicked");
        list[picIndex].classList.remove("visible");
        picIndex++;
        if (picIndex > list.length - 1) {
            picIndex = list.length - 1;
        }
        list[picIndex].className = "visible";

    })
    buttonPrev.addEventListener("click", function(event) {
        // console.log("I was clicked as well");
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

    //listy formularza
        var arrow = document.querySelectorAll('.list-arrow');
        var optionList = document.querySelectorAll('.option-list');

        console.log(arrow);
        console.log(optionList);


        arrow[0].addEventListener("click", function(event) {
            optionList[0].classList.toggle('visibleTwo');
        })
        arrow[1].addEventListener("click", function(event) {
            optionList[1].classList.toggle('visibleTwo');
        })
        arrow[2].addEventListener("click", function(event) {
            optionList[2].classList.toggle('visibleTwo');
        })


        //kalkulator
        var options = document.querySelectorAll(".option-list");
        var typeListChildren = options[0].children;
        var colorListChildren = options[1].children;
        var materialListChildren = options[2].children;
        var armchairName = document.querySelector(".table-l .title");
        var armchairPrice = document.querySelector(".title.value");
        var colorName = document.querySelector(".table-l .color");
        var colorPrice = document.querySelector(".color.value");
        var materialName = document.querySelector(".table-l .pattern");
        var materialPrice = document.querySelector(".pattern.value");

        console.log(typeListChildren);
        console.log(colorListChildren);
        console.log(materialListChildren);
        console.log(armchairName);
        console.log(armchairPrice);
        console.log(colorName);
        console.log(colorPrice);
        console.log(materialName);
        console.log(materialPrice);


        typeListChildren[0].addEventListener("click", function(event){
            armchairName.innerText = typeListChildren[0].innerText;
            armchairPrice.innerText = typeListChildren[0].dataset.price;
        })
        typeListChildren[1].addEventListener("click", function(event){
            armchairName.innerText = typeListChildren[1].innerText;
            armchairPrice.innerText = typeListChildren[1].dataset.price;
        })
        typeListChildren[2].addEventListener("click", function(event){
            armchairName.innerText = typeListChildren[2].innerText;
            armchairPrice.innerText = typeListChildren[2].dataset.price;
        })
        colorListChildren[0].addEventListener("click", function(event){
            colorName.innerText = colorListChildren[0].innerText;
            colorPrice.innerText = colorListChildren[0].dataset.price;
        })
        colorListChildren[1].addEventListener("click", function(event){
            colorName.innerText = colorListChildren[1].innerText;
            colorPrice.innerText = colorListChildren[1].dataset.price;
        })
        colorListChildren[2].addEventListener("click", function(event){
            colorName.innerText = colorListChildren[2].innerText;
            coolorPrice.innerText = colorListChildren[2].dataset.price;
        })
        materialListChildren[0].addEventListener("click", function(event){
            materialName.innerText = materialListChildren[0].innerText;
            materialPrice.innerText = materialListChildren[0].dataset.price;
            // totalCost += parseFloat(materialPrice.innerText);
            // sum.innerText = totalCost;
        })
        materialListChildren[1].addEventListener("click", function(event){
            materialName.innerText = materialListChildren[1].innerText;
            materialPrice.innerText = materialListChildren[1].dataset.price;
            // totalCost += parseFloat(materialPrice.innerText);
            // sum.innerText = totalCost;
        })






        var transportCheckbox = document.querySelector("input[type=checkbox]");
        var transport = document.querySelector('.table-l .transport');
        var transportPrice = document.querySelector('.transport.value');

        console.log(transportCheckbox);
        console.log(transport);
        console.log(transportPrice);

        // transportCheckbox.addEventListener('click', function(event){
        //     if (transportCheckbox.checked === true) {
        //         transport.innerHTML = "Transport";
        //         transportPrice.innerHTML = transportCheckbox.dataset.transportPrice;
        //     } else {
        //         transport.innerHTML = "";
        //         transportPrice.innerHTML = "";
        //     }
        // })

        var sum = document.querySelector('.sum');
        console.log(sum);
        var totalCost = 0;


        var checkbox1 = document.querySelector('.checkbox1');

        checkbox1.addEventListener("change", function(event){

            if (transportCheckbox.checked === true) {
                transport.innerText = "Transport";
                transportPrice.innerText = transportCheckbox.dataset.transportPrice;

                sum.innerText = totalCost + parseFloat(transportPrice.innerText);
            } else {
                transport.innerText = "";
                transportPrice.innerText = "";

                sum.innerText = totalCost - parseFloat(transportPrice.innerText);
                if (sum.innerText = "nan") {
                    sum.innerText = "";
                }
            }
        })
        // typeListChildren[0].addEventListener("click", function(event){
        //     armchairName.innerText = typeListChildren[0].innerText;
        //     armchairPrice.innerText = typeListChildren[0].dataset.price;

            // typeListChildren[0].classList.toggle('clicked');
            // if(typeListChildren[0].classList.contains('clicked')) {
            //     sum.innerText = totalCost + parseFloat(armchairPrice.innerText);
            // } else {
            //     sum.innerText = totalCost - parseFloat(armchairPrice.innerText);
            // }
        // })

        // typeListChildren[1].addEventListener("click", function(event){
        //     armchairName.innerText = typeListChildren[1].innerText;
        //     armchairPrice.innerText = typeListChildren[1].dataset.price;
            // typeListChildren[1].classList.toggle('clicked');
            // if(typeListChildren[1].classList.contains('clicked')) {
            //     sum.innerText = totalCost + parseFloat(armchairPrice.innerText);
            // } else {
            //     sum.innerText = totalCost - parseFloat(armchairPrice.innerText);
            // }
        // })
        // var value = document.querySelectorAll('.value');
        // console.log(value);
        //
        // var nana = 0;
        // for (var j=0; j<value.length; j++) {
        //     value[j].addEventListener('change', function(){
        //         nana += value[j].innerText;
        //         sum.innerText = nana;
        //         console.log(sum.innerText);
        //     })
        // }





});
