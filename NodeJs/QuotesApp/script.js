const tweetBtn = document.getElementById('tweetBtn');
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const btn = document.getElementById('btn');
let realData = "";
let quotesData = "";

const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`;
    window.open(tweetPost);
}
const getNewQuotes = () => {
    let random = Math.floor(Math.random() * 10);
    // console.log(realData[random]);
    quotesData = realData[random];
    quotes.innerHTML = `${quotesData.text}`
    if (quotesData == null) {
        quotes.innerHTML = "Unknown"
    } else {
        author.innerHTML = `By :${quotesData.author}`;
    }

}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData);
        getNewQuotes();
    } catch (error) {

    }
}
btn.addEventListener('click', getNewQuotes);
tweetBtn.addEventListener('click', tweetNow);
getQuotes();