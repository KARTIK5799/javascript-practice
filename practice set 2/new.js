
function longestSubstringWithKDistinctChars(n, k, s) {
    if (k === 0 || s.length === 0) {
        return 0;
    }

    let left = 0;
    let maxLength = 0;
    let charFrequency = {};

    for (let right = 0; right < s.length; right++) {
        const rightChar = s[right];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0;
        }
        charFrequency[rightChar]++;

        while (Object.keys(charFrequency).length > k) {
            const leftChar = s[left];
            charFrequency[leftChar]--;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage
const input = "abacd";
const [n, k] = [5, 3];
const result = longestSubstringWithKDistinctChars(n, k, input);
console.log(result); // Output: 4
