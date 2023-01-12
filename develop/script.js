const $searchForm = document.querySelector('#userCitySearchForm');
const $searchInput = document.querySelector('#userCityInput');
const $buttonGroup = document.querySelector('#buttonList');
const $searchSpan = document.querySelector('#searchField');
const $resultsDiv = document.querySelector('#resultsDiv');

const currentDate = dayjs().format('MMMM DD, YYYY');
const $currentDate = ('#currentDate');

function submitEventHandler(event) {
    event.preventDefault();
    
    let searchInput = $searchInput.value;
    
    console.log('form submitted', searchInput);
    

}



function renderDivs() {

}

$searchForm.addEventListener("submit", submitEventHandler);
$buttonGroup.addEventListener("click", clickEventHandler);