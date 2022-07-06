const isValid = (string) => {
    
    const valid = [];
    
    for(let i=0; i < string.length; i++) {
        let char = string.charAt(i);
        switch(char) {
            case '(' :
                valid.push(')');
                break;
            case '[' :
                valid.push(']');
                break;
            case '{' :
                valid.push('}');
                break;
            default :
            
                if(valid.pop() !== char){
                    console.log(false)
                    return false;  
                }    
    }
};  
    console.log(valid.length == 0)
    return valid.length == 0
}

isValid("(]")