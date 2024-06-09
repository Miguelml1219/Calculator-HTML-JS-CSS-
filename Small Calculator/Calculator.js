function calculatePercentage() {
  var expression = document.Calculator.ans.value;
  var percentIndex = expression.indexOf('%');
  
  if (percentIndex !== -1) {
      var percentValue = expression.substring(0, percentIndex) / 100;
      var newValue = expression.substring(percentIndex + 1);
      document.Calculator.ans.value = percentValue * newValue;
  } else {
      document.Calculator.ans.value = eval(expression) / 100;
  }
} 

if (text == '**2') {
  document.Calculator.ans.value = Math.pow(eval(ans), 2);
}
