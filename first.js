function calculateTriangle(){
    const base = findValueById('triangle-b');
    const height = findValueById('triangle-h');

    const area = .5 * base * height;
    
    setArea('triangle-area', area)
    console.log(area);


}

function calculateRectangle(){
    const width = findValueById('rectangle-w');
    const length = findValueById('rectangle-l');

    const area = width * length ;

    setArea('rectangle-area', area);
}

function calculateParallelogram(){
    const base = findValueById('parallelogram-b');
    const height = findValueById('parallelogram-h');

    const area = base * height ;

    setArea('parallelogram-area', area);
}

function calculateRhombus(){
    const diagonal1 = findValueById('rhombus-d1');
    const diagonal2 = findValueById('rhombus-d2');

    const area = 0.5 * diagonal1 * diagonal2;

    setArea('rhombus-area', area);
}

function calculatePentagon(){
    const p = findValueById('pentagon-p');
    const a = findValueById('pentagon-a');

    const area =  0.5 * p * a;

    setArea('pentagon-area', area);
}

function calculateEllipse(){
    const pai = 3.14;
    const a = findValueById('ellipse-a');
    const b = findValueById('ellipse-b');

    const area = pai * a * b;
    setArea('ellipse-area', area);
}

function findValueById(element){
    const inputField = document.getElementById(element);
    const inputValue = inputField.value;
    const input = parseFloat(inputValue);
    return input;

}

function setArea(element, area){
    const spanText = document.getElementById(element);
    spanText.innerText = area;
    // return area;

}