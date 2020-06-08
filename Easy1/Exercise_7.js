const shortLongShort = (str1, str2) => {
  return str1.length < str2.length ? str1.concat(str2).concat(str1) : str2.concat(str1).concat(str2);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
