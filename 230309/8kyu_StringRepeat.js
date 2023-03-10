//230309_8kyu_StringRepeat
//Returning a string  concatenated n number of times
let repeatStr = (n, string) => {
    let result = "";
    for(let i = 0 ; i < n; i++)
      {
        result += string;
        }
     return result;
    }