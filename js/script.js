function createNewInputs() {
        $('.main-container').append('<input >');
        $('input').addClass('myInput').attr('id','firstInput').attr('placeholder','Введите диаметр круга в px');
        $('.main-container').append('<input >');
        $('input').last().addClass('myInput').attr('id','secondInput').attr('type','color').attr('placeholder','Выберите цвет круга');
        $('.main-container').append('<button>');
        $('button').attr('id','btnDraw').text('Нарисовать');
        $('.myButton').remove();
        function circle() {
            const $diametr = $('#firstInput').val();
            const $color = $('#secondInput').val();
            $('main-container').append('<div/>');
            $('div').last().addClass('newDiv').css('background-color',$color).css('width',$diametr).css('height',$diametr);
            $('#btnDraw').remove();
            $('#firstInput').remove();
            $('#secondInput').remove();
        }
        $('#btnDraw').on('click',circle);
}
$('#circleButton').on('click',createNewInputs);




// Java Script old version.


/*function createNewInputs() {
    const inputDiametr = document.createElement('input');
    const inputColor = document.createElement('input');
    const buttonDraw = document.createElement('button');

    inputDiametr.placeholder = 'Введите диаметр круга в px';
    inputColor.placeholder = 'Введите цвет круга';
    inputDiametr.className = 'myInput';
    inputDiametr.id = 'firstInput';
    inputColor.id = 'secondInput';
    buttonDraw.innerHTML = 'Нарисовать';
    buttonDraw.id = 'btnDraw';
    inputColor.className = 'myInput';

    document.body.appendChild(inputDiametr);
    document.body.appendChild(inputColor);
    document.body.appendChild(buttonDraw);
    mainButton.remove();

    function circle() {
        const firstInputValue = document.getElementById('firstInput');
        const valueRadius = firstInputValue.value;
        const secondInputValue = document.getElementById('secondInput');
        const valueColor = secondInputValue.value;

        let radius = `${valueRadius}`;
        let color = `${valueColor}`;

        let div = document.createElement('div');
        div.className = 'newDiv';
        document.body.appendChild(div);
        div.style.backgroundColor = `${color}`;
        div.style.width =`${radius}px`;
        div.style.height =`${radius}px`;

        btnDraw.remove();
    }
    const btnDraw = document.getElementById('btnDraw');
    btnDraw.addEventListener('click', circle);
}
const mainButton= document.getElementById('circleButton');
mainButton.addEventListener('click', createNewInputs);*/
