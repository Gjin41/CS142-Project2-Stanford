function cs142MakeMultiFilter(originalArray){
    let currentArray = originalArray;
    return function arrayFilterer (filterCriteria, callback){
      let temp = new Array();
        if(typeof filterCriteria !== 'function')
            return currentArray;
    
    
    for(let i of originalArray){
        if(filterCriteria(i) === true)
            temp.push(i);
    }

    if(typeof callback === 'function'){
      currentArray = temp;
      let callthis = callback.bind(originalArray);
      callthis(currentArray);
    }

    return arrayFilterer;
    };
}