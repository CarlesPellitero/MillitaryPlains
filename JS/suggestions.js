const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.container-suggestions');

const searchLink = document.querySelector('.search_button');

inputSearch.onkeyup = (e) =>{
    let userData = e.target.value;
    let emptyArray = [];

    if (userData){
        emptyArray = suggestions.filter(data => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        
        emptyArray = emptyArray.map(data => {
            return data = `<li>${data}</li>`
        });
        searchContainer.classList.add('active');
        showSuggestions(emptyArray);

        /* Busqueda */
        let allList = boxSuggestions.querySelectorAll('li');

        allList.forEach(li => {
            li.setAttribute('onclick', 'select(this)')
        });

    } else {
        searchContainer.classList.remove('active')
    }
};

function select(element){

    let selectUserData = element.textContent;
    inputSearch.value = selectUserData;

    if (inputSearch.value == "P-26A-34"){
        /* Cambair el href  "../HTML/3_${inputSearch.value}.html Automatizarlo pero solo usaremos uno de ejemplo*/
        searchLink.href = '../HTML/3_P-26A-33.html';
        searchContainer.classList.remove('active') 
    }
}


const showSuggestions = list => {
    let listData

    if(!list.length){
        userValue = inputSearch.value;
        listData = ` `;
        /*listData = `<li>${userValue}</li>`;*/
    } else{
        listData = list.join(' ');
    }
    boxSuggestions.innerHTML = listData;
};