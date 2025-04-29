const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston S. Churchill",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs",
    "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are. – Maya Angelou",
    "It is never too late to be what you might have been. – George Eliot",
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Life isn’t about finding yourself. Life is about creating yourself. – George Bernard Shaw",
    "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. – Mark Twain",
    "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. – Barack Obama",
    "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine. – Roy T. Bennett"
  ];
  
  
  let currentIndex = 0;
  
  function updateQuote(index) {
    document.getElementById("quote-text").innerText = quotes[index];
    hideShareOptions();
  }
  
  function generateQuote() {
    currentIndex = Math.floor(Math.random() * quotes.length);
    updateQuote(currentIndex);
  }
  
  function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    updateQuote(currentIndex);
  }
  
  function previousQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    updateQuote(currentIndex);
  }
  
  function getCurrentQuote() {
    return document.getElementById("quote-text").innerText;
  }
  
  function toggleShareOptions() {
    const options = document.getElementById("share-options");
    options.style.display = options.style.display === "block" ? "none" : "block";
  }
  
  function hideShareOptions() {
    document.getElementById("share-options").style.display = "none";
  }
  
  function shareOnTwitter() {
    const quote = getCurrentQuote();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`, "_blank");
  }
  
  function shareOnFacebook() {
    const quote = getCurrentQuote();
    const url = `https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodeURIComponent(quote)}`;
    window.open(url, "_blank");
  }
  
  function shareOnWhatsApp() {
    const quote = getCurrentQuote();
    window.open(`https://wa.me/?text=${encodeURIComponent(quote)}`, "_blank");
  }
  
  function shareOnSMS() {
    const quote = getCurrentQuote();
    window.open(`sms:?body=${encodeURIComponent(quote)}`);
  }
  
  function shareOnInstagram() {
    alert("Instagram doesn't support text sharing via browser. Please take a screenshot to share.");
  }
  
  // Load first quote on page load
  window.onload = () => {
    updateQuote(currentIndex);
  };
  