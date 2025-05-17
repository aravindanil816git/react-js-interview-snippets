function wordCountEngine(document) {
  // your code goes here
    const tokens  = document.split(" ");
    const tokenMap = new Map();
    const seenMap = new Map();
    tokens.forEach((token, index) => {
        const key = processStr(token);
        if(token) {
            if(tokenMap.has(key)) {
                tokenMap.set(key, tokenMap.get(key) +1)
            } else {
                tokenMap.set(key, 1)
                seenMap.set(key, index)
            }
        }
    })
    const result =[];
    Array.from(tokenMap.entries()).sort((a,b) => {
       const diff = b[1] - a[1];
        if(diff === 0) {
            return seenMap.get(a[0]) -seenMap.get(b[0])
        } else {
            return diff
       }
    }).map(([key, value]) => result.push([key, `${value}`]));
    return result;

}

  function processStr(str) {
    let result = `${str}`;
    result = result.toLowerCase();
    result = result.replace(/[^a-z]/g,'')
    return result;
  }




/*
Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

input:  document = "Practice makes perfect. you'll only
                    get Perfect by practice. just practice!"

output: [ ["practice", "3"], ["perfect", "2"],
          ["makes", "1"], ["youll", "1"], ["only", "1"], 
          ["get", "1"], ["by", "1"], ["just", "1"] ]
*/
