document.addEventListener('DOMContentLoaded', function(){


// drop-down list menu
    var about = document.querySelector('.about');
    var hiddenList = document.querySelector('.hidden-list');
    var square = document.querySelector('.square');

    about.addEventListener('mouseenter', function(){
        hiddenList.classList.add('menu-visible');
        square.classList.add('menu-visible');
    })
    hiddenList.addEventListener('mouseleave', function(){
        hiddenList.classList.remove('menu-visible');
        square.classList.remove('menu-visible');
    })


//slider
    var buttonNext = document.querySelector('.special-character-r');
    var buttonPrev = document.querySelector('.special-character-l');
    var imgList = document.querySelectorAll('.gallery-slider-l ul li');
    var pList = document.querySelectorAll('.gallery-slider-r p');
    var picIndex = 0;
    var pIndex = 0;
    imgList[picIndex].className = 'slider-pic-visible';
    pList[pIndex].className = 'slider-p-visible';

    buttonNext.addEventListener('click', function() {
        imgList[picIndex].classList.remove('slider-pic-visible');
        picIndex++;
        if (picIndex > imgList.length - 1) {
            picIndex = imgList.length - 1;
        }
        imgList[picIndex].className = 'slider-pic-visible';

        pList[pIndex].classList.remove('slider-p-visible');
        pIndex++;
        if (pIndex > pList.length - 1) {
            pIndex = pList.length - 1;
        }
        pList[pIndex].className = 'slider-p-visible';
    })
    buttonPrev.addEventListener('click', function() {
        imgList[picIndex].classList.remove('slider-pic-visible');
        picIndex--;
        if (picIndex < 0) {
            picIndex = 0;
        }
        imgList[picIndex].className = 'slider-pic-visible';

        pList[pIndex].classList.remove('slider-p-visible');
        pIndex--;
        if (pIndex < 0) {
            pIndex = 0;
        }
        pList[pIndex].className = 'slider-p-visible';
    })


//dissapearing text from pictures
    var boxOne = document.querySelector('.box1');
    var boxTwo= document.querySelector('.box2');
    var boxOneChildren = boxOne.children;
    var boxTwoChildren = boxTwo.children;


    boxOne.addEventListener('mouseenter', function() {
        for (var i = 0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.add('pic-text-hidden');
        }
    })
    boxOne.addEventListener('mouseleave', function() {
        for (var i = 0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.remove('pic-text-hidden');
        }
    })
    boxTwo.addEventListener('mouseenter', function() {
        for (var i = 0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.add('pic-text-hidden');
        }
    })
    boxTwo.addEventListener('mouseleave', function() {
        for (var i = 0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.remove('pic-text-hidden');
        }
    })


//calculator
    var type = document.getElementById('type-list');
    var typeTable = document.querySelector('.type');
    var typeTablePrice = document.querySelector('.type-price');
    var color = document.getElementById('color-list');
    var colorTable = document.querySelector('.color');
    var colorTablePrice = document.querySelector('.color-price');
    var material = document.getElementById('material-list');
    var materialTable = document.querySelector('.material');
    var materialTablePrice = document.querySelector('.material-price');
    var transportCheckbox = document.querySelector('input[type=checkbox]');
    var transportTable = document.querySelector('.transport');
    var transportTablePrice = document.querySelector('.transport-price');
    var sum = document.querySelector('.sum');
    var imageColorList = document.querySelectorAll('.calculator-image img');

    function chairType() {
        if (type.value == '') {
            typeTable.innerHTML = 'Twój fotel';
            typeTablePrice.innerHTML = type.children[0].dataset.price;
        } else if (type.value == 'Clair') {
            typeTable.innerHTML = 'Clair';
            typeTablePrice.innerHTML = type.children[1].dataset.price;
        } else if (type.value == 'Margarita') {
            typeTable.innerHTML = 'Margarita';
            typeTablePrice.innerHTML = type.children[2].dataset.price;
        } else if (type.value == 'Selena') {
            typeTable.innerHTML = 'Selena';
            typeTablePrice.innerHTML = type.children[3].dataset.price;
        }
    }
        type.addEventListener('change', chairType);

        function chairColor() {
            for (var k = 0; k < imageColorList.length; k++) {
                imageColorList[k].classList.add('calculator-image-hidden');
            }

            if (color.value == '') {
                colorTable.innerHTML = '';
                colorTablePrice.innerHTML = color.children[0].dataset.price;
            } else if (color.value == 'Czerwony') {
                colorTable.innerHTML = 'Czerwony';
                colorTablePrice.innerHTML = color.children[1].dataset.price;
                imageColorList[0].classList.remove('calculator-image-hidden');
            } else if (color.value == 'Czarny') {
                colorTable.innerHTML = 'Czarny';
                colorTablePrice.innerHTML = color.children[2].dataset.price;
                imageColorList[1].classList.remove('calculator-image-hidden');
            } else if (color.value == 'Pomarańczowy') {
                colorTable.innerHTML = 'Pomarańczowy';
                colorTablePrice.innerHTML = color.children[3].dataset.price;
                imageColorList[2].classList.remove('calculator-image-hidden');
            }
        }
        color.addEventListener('change', chairColor);

        function chairMaterial() {
            if (material.value == '') {
                materialTable.innerHTML = '';
                materialTablePrice.innerHTML = material.children[0].dataset.price;
            } else if (material.value == 'Tkanina') {
                materialTable.innerHTML = 'Tkanina';
                materialTablePrice.innerHTML = material.children[1].dataset.price;
            } else if (material.value == 'Skóra') {
                materialTable.innerHTML = 'Skóra';
                materialTablePrice.innerHTML = material.children[2].dataset.price;
             }
         }
         material.addEventListener('change', chairMaterial);

         transportCheckbox.addEventListener('click', function(){
             if (transportCheckbox.checked) {
                transportTable.innerHTML = 'Transport';
                transportTablePrice.innerHTML = transport.dataset.transportPrice;
            } else {
                transportTable.innerHTML = '';
                transportTablePrice.innerHTML = '';
            }
        });

        function total() {
            var typeChosen = document.querySelector('.type-price');
            var typeChosen1 = parseFloat(typeChosen.innerHTML);
            if (isNaN(typeChosen1)) {
                typeChosen1 = 0;
            }
            var colorChosen = document.querySelector('.color-price');
            var colorChosen1 = parseFloat(colorChosen.innerHTML);
            if (isNaN(colorChosen1)) {
                colorChosen1 = 0;
            }
            var materialChosen = document.querySelector('.material-price');
            var materialChosen1 = parseFloat(materialChosen.innerHTML);
            if (isNaN(materialChosen1)) {
                materialChosen1 = 0;
            }
            var transportChosen = document.querySelector('.transport-price');
            var transportChosen1 = parseFloat(transportChosen.innerHTML);
            if (isNaN(transportChosen1)) {
                transportChosen1 = 0;
            }
            sum.innerHTML = typeChosen1 + colorChosen1 + materialChosen1 + transportChosen1 + ' zł';
        }

        type.addEventListener('change', total);
        color.addEventListener('change', total);
        material.addEventListener('change', total);
        transport.addEventListener('change', total);

});
