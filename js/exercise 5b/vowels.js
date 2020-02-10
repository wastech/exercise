let vowels = ['a', 'e', 'i', 'o', 'u'];

function vowelCount(string) {
    let count = 0;
    for (let v of string) {
        if (vowels.includes(v.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(vowelCount('Hi ThEre!'));

console.log(vowelCount('Why do you ask?'));
console.log(vowelCount('Why?'));