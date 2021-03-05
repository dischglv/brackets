module.exports = function check(str, bracketsConfig) {
  for (let brackets of bracketsConfig) {
  	var joined = brackets.join('');
    
  	if (str == '') return true;
    else if (str.indexOf(joined) !== -1) {
    	return check(deletePart(str, joined), bracketsConfig);
    }
  }
  return false;
}

function deletePart(str, joined) {
	let arr = str.split('');
  arr.splice(str.indexOf(joined), joined.length);
	return arr.join('');
}