module.exports = function toReadable (number) {
  const strNum = '' + number;

  switch (strNum.length) {
      case 1: 
        return firstRank(strNum, true);
      case 2:
        if (strNum[0] === '1') {
            return secondRank(strNum);
        } else if (strNum[1] !== '0') {
            return firstRank(strNum[0], false) + ' ' + firstRank(strNum[1], true)
        } else {
            return firstRank(strNum[0], false)
        }
      case 3:
        if (strNum[1] === '1') {
            return firstRank(strNum[0], true) + ' hundred ' + secondRank(strNum.substr(1));
        } else if (strNum[2] !== '0' && strNum[1] !== '0') {
            return firstRank(strNum[0], true) + ' hundred ' + firstRank(strNum[1], false) + ' ' + firstRank(strNum[2], true)
        } else  if (strNum[2] === '0' && strNum[1] !== '0') {
            return firstRank(strNum[0], true) + ' hundred ' + firstRank(strNum[1], false)
        } else if (strNum[2] === '0' && strNum[1] === '0') {
            return firstRank(strNum[0], true) + ' hundred'
        } else {
            return firstRank(strNum[0], true) + ' hundred ' + firstRank(strNum[2], true)
        }
  }
  
}

function firstRank (num, bool) {
    switch (num) {
        case '0':
            return bool ? 'zero' : '';
        case '1':
            if (bool) return 'one';
        case '2':
            return bool ? 'two' : 'twenty';
        case '3':
            return bool ? 'three' : 'thirty';
        case '4':
            return bool ? 'four' : 'forty';
        case '5':
            return bool ? 'five' : 'fifty';
        case '6':
            return bool ? 'six' : 'sixty';
        case '7':
            return bool ? 'seven' : 'seventy';
        case '8':
            return bool ? 'eight' : 'eighty';
        case '9':
            return bool ? 'nine' : 'ninety';
    }
}

function secondRank (num) {
    switch (num) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
    }
}
