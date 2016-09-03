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
    var list = document.querySelectorAll('.gallery-slider-l ul li');
    var picIndex = 0;

    list[picIndex].className = 'visible';

    buttonNext.addEventListener('click', function() {
        list[picIndex].classList.remove('visible');
        picIndex++;
        if (picIndex > list.length - 1) {
            picIndex = list.length - 1;
        }
        list[picIndex].className = 'visible';

    })
    buttonPrev.addEventListener('click', function() {
        list[picIndex].classList.remove('visible');
        picIndex--;
        if (picIndex < 0) {
            picIndex = 0;
        }
        list[picIndex].className = 'visible';
    })


//dissapearing text from pictures
    var boxOne = document.querySelector('.box1');
    var boxTwo= document.querySelector('.box2');
    var boxOneChildren = boxOne.children;
    var boxTwoChildren = boxTwo.children;


    boxOne.addEventListener('mouseenter', function() {
        for (var i=0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.add('pic-text-visible');
        }
    })
    boxOne.addEventListener('mouseleave', function() {
        for (var i=0; i < boxOneChildren.length; i++) {
            boxOneChildren[i].classList.remove('pic-text-visible');
        }
    })
    boxTwo.addEventListener('mouseenter', function() {
        for (var i=0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.add('pic-text-visible');
        }
    })
    boxTwo.addEventListener('mouseleave', function() {
        for (var i=0; i < boxTwoChildren.length; i++) {
            boxTwoChildren[i].classList.remove('pic-text-visible');
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
            if (color.value == '') {
                colorTable.innerHTML = '';
                colorTablePrice.innerHTML = color.children[0].dataset.price;
            } else if (color.value == 'Czerwony') {
                colorTable.innerHTML = 'Czerwony';
                colorTablePrice.innerHTML = color.children[1].dataset.price;
            } else if (color.value == 'Czarny') {
                colorTable.innerHTML = 'Czarny';
                colorTablePrice.innerHTML = color.children[2].dataset.price;
            } else if (color.value == 'Pomarańczowy') {
                colorTable.innerHTML = 'Pomarańczowy';
                colorTablePrice.innerHTML = color.children[3].dataset.price;
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
            sum.innerHTML = typeChosen1 + colorChosen1 + materialChosen1 + transportChosen1;
        }

        type.addEventListener('change', total);
        color.addEventListener('change', total);
        material.addEventListener('change', total);
        transport.addEventListener('change', total);

});
