const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('input');
const boxSuggestions = document.querySelector('.container-suggestions');

const searchLink = document.querySelector('a');

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

    /* Arreglar el href no lo concatena bien Avion${inputSearch.value}.html*/
    searchLink.href = '../HTML/pantalla2.html';
    searchContainer.classList.remove('active')

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