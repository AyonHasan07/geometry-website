function calculateTriangle(){
    const base = findValueById('triangle-b');
    const height = findValueById('triangle-h');

    const area = .5 * base * height;
    
    setArea('triangle-area', area)
    console.log(area);


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