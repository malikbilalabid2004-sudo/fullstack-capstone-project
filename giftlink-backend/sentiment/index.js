const natural = require('natural');
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");
function getSentiment(text) {
    if (!text) return "neutral";
    const words = new natural.WordTokenizer().tokenize(text);
    const score = analyzer.getSentiment(words);
    if (score > 0) return "positive";
    if (score < 0) return "negative";
    return "neutral";
}
module.exports = { getSentiment };
