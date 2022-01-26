module.exports = function check(str, bracketsConfig) {
  
  let temp = str.split('');

  for (let i = 0; i < temp.length; i++) 
    for (let j = 0; j < bracketsConfig.length; j++){
      if (temp[i] == bracketsConfig[j][0] && temp[i + 1] == bracketsConfig[j][1]) {
          temp.splice(i, 2);
          i = -1;
          j = -1;
      }
  }

  if (temp.length)
    return false
    else
    return true

}
