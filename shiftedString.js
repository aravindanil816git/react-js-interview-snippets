/*
Group Shifted String
Given an array of strings (all lowercase letters), the task is to group them in such a way that all strings in a group are shifted versions of each other.

Two strings s1 and s2 are called shifted if the following conditions are satisfied:
s1.length is equal to s2.length
s1[i] is equal to s2[i] + m for all 1 <= i <= s1.length for a constant integer m. Consider the shifting to be cyclic, that is if s2[i] + m > 'z', then start from 'a' or if s2[i] + m < 'a', then start from 'z'.


Examples:
Input: arr[] = ["acd", "dfg", "wyz", "yab", "mop", "bdfh", "a", "x", "moqs"]
Output: [ ["acd", "dfg", "wyz", "yab", "mop"], ["bdfh", "moqs"], ["a", "x"] ]
Explanation: All shifted strings are grouped together.

Input: arr = ["geek", "for", "geeks"]
Output: [["for"], ["geek"], ["geeks"]]

/*


class Solution {
    groupShiftedString(arr) {
        // code here
        const charMapHash = new Map();
        arr.forEach(str1 => {
        const charMapStr = this.normalisedString(str1)
            if(charMapHash.has(charMapStr)) {
                charMapHash.get(charMapStr).push(str1)
            } else {
                charMapHash.set(charMapStr,  [str1])
            }
        })

        return Array.from(charMapHash.values());
    }
    
    normalisedString(str) {
        let nStr = "";
        const shift = str.charCodeAt(0) - 'a'.charCodeAt(0);
        for(let i =0; i< str.length; i++) {
            const current = str.charCodeAt(i);
            const charCode = ((current - 'a'.charCodeAt(0) -shift +  26 )%26) + 'a'.charCodeAt(0);
            nStr += String.fromCharCode(charCode)
        }
        return nStr;
    }
}


