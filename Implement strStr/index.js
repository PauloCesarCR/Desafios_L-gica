const strStr = (haystack, needle) => {
    const stringresult = haystack.indexOf(needle,[0])
    
    if (stringresult != -1){
        return stringresult;
    } else {
        return -1
    }
      
  };