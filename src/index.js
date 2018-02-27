module.exports = function check(str, bracketsConfig) {

  const lengthStr = str.length;
  const lengthBracketsConfig = bracketsConfig.length;
  let bracketsStack = [];

  for (let i = 0; i < lengthStr; i++){
    element = str[i];
    for (let j = 0; j < lengthBracketsConfig; j++) {
      if (element === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]){
        if (element === bracketsStack[bracketsStack.length-1]){
          bracketsStack.pop();
        } else {
          bracketsStack.push(element);
        }
      } else if (element === bracketsConfig[j][0]){
        bracketsStack.push(element);
      } else if (element === bracketsConfig[j][1]){
        if (bracketsStack.length !== 0 && (bracketsStack.pop() === bracketsConfig[j][0])){
          continue;
        } else {
          return false;
        };
      };
    };
  };
  if (bracketsStack.length != 0) {
    return false;
  };
  return true;
}