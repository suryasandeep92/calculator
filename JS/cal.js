var expression = document.getElementById('resultBox');


        function addValue(exp)
        {
            expression.value += exp;
        }

        function operation()
        {
            equation = expression.value;
            var resEquation = eval(equation);
            expression.value = resEquation;
        }

        function clearValue()
        {
            expression.value = '';
        }

        function squareRoot()
        {
            sqrtEquation = expression.value;
            var sqrtResult = Math.sqrt(sqrtEquation);
            expression.value = sqrtResult;
        }

        function backspace()
        {
            var preExpression = expression.value;
            var length = preExpression.length - 1;
            var postExpression = preExpression.substring(0,length);
            expression.value = postExpression;
        }

        function sinValue()
        {
            sinAngle = expression.value;
            expression.value = Math.sin(sinAngle * Math.PI / 180); 
        }
        
        function cosValue()
        {
            cosAngle = expression.value;
            expression.value = Math.cos(cosAngle * Math.PI / 180);
        }

        function tanValue()
        {
            tanAngle = expression.value;
            expression.value = Math.tan(tanAngle * Math.PI / 180);
        }
        
        function logValue()
        {
            number = expression.value;
            expression.value = Math.log(number);
        }
        
        
        
        
       
