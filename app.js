const btn = document.querySelector('.btn');
const id_tag = document.querySelector('.advice-id');
const advice_tag = document.querySelector('.advice');
console.log(btn, id_tag, advice_tag);

function onBtnClick() {
    console.log('click');
    fetch('https://api.adviceslip.com/advice')
        .then(resp => resp.json())
        .then(jsonData => {
            id_tag.innerText = 'advice #' + jsonData['slip']['id'];
            advice_tag.innerText = 'advice' + jsonData['slip']['advice'];
        });
}
btn.addEventListener('click', onBtnClick);
onBtnClick;