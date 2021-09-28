(function() {

    var quotes = $(".quotes-testies");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
        .fadeIn(1000)
        .delay(2800)
        .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();
    