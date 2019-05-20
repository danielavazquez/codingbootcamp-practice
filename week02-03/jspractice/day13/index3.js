const salary = () => {
    let wage = parseInt(document.querySelector('#wage').value);
    let hours = parseInt(document.querySelector('#hours').value);
    let days = parseInt(document.querySelector('#days').value);
    return document.querySelector('#calculated').innerHTML = "$ " + (wage * hours) * days;
};

