let number='';
    let result='';
    function calcValue(val){
        number=number+val;
        document.getElementById('display').value=number;
    }
    function cross(){
        number = number.slice(0, -1);
        document.getElementById('display').value=number;
    }
    function showResult(){
        try 
        {
             result=eval(number).toString();
             number = result;
             document.getElementById('display').value=result;
        } 
        catch (error) {
            document.getElementById('display').value= 'Error';
            number="";
        }
    }
    function clearDisplay(){
        number="";
        document.getElementById('display').value=number;
    }