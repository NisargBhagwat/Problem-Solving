var isValid = function (s) {
  let str = "";

  if (s[0] == ")" || s[0] == "]" || s[0] == "}") return false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      str += s[i];
    } else if (s[i] == ")" && str[str.length - 1] === "(") {
      str = str.slice(0, -1);
    } else if (s[i] == "]" && str[str.length - 1] === "[") {
      str = str.slice(0, -1);
    } else if (s[i] == "}" && str[str.length - 1] === "{") {
      str = str.slice(0, -1);
    } else {
      str += s[i];
    }
  }
  if (str.length === 0) return true;
  return false;
};

console.log(isValid("(])"));
