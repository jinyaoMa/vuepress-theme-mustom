export default ({ string, seat }) => {
  if (isNaN(seat)) return {
    appid: '',
    appkey: ''
  };
  let result = '';
  let temp = string.split(':');
  if (temp[1]) {
    let even = temp[1].substr(0, parseInt(temp[0])).split('');
    let odd = temp[1].substr(parseInt(temp[0])).split('');
    for (let i = 0; i < temp[1].length; i++) {
      if (i % 2 === 0) {
        result += even.shift();
      } else {
        result += odd.shift();
      }
    }
  }
  return {
    appid: result.substr(0, seat),
    appkey: result.substr(seat)
  };
};