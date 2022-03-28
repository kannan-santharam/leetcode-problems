/**
 * @param {string} s
 * @return {boolean}
 https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function(s) {
        let brakets = [];
        let str = s;
        for(let i =0; i < str.length;i++){
            let char = str[i];

            if(char === "("){
                brakets.push("(");
            }
            else if(char === ")"){
                let lastChar = brakets[brakets.length -1];
                if(lastChar === "("){
                    brakets.pop("(");
                }else{
                    brakets.push(")");
                }

            }else if(char === "["){
                 brakets.push("[");
            }
            else if(char === "]"){
                let lastChar = brakets[brakets.length -1];
                if(lastChar === "["){
                    brakets.pop("[");
                }else{
                    brakets.push("]");
                }
            }
            else if(char === "{"){
                 brakets.push("{");
            }
            else if(char === "}"){
                 let lastChar = brakets[brakets.length -1];
                if(lastChar === "{"){
                    brakets.pop("{");
                }else{
                    brakets.push("}");
                }
            }
        }
     if(!brakets.length){
        return true
    }
    return false
};
