'use strict';
function cs142MakeMultiFilter(originalArray){
    let currentArray = originalArray;
    return function arrayFilterer (filterCriteria, callback){
      let temp = new Array();
        if(typeof filterCriteria !== 'function')
            return currentArray;

      for(let i of currentArray){
          if(filterCriteria(i) === true)
              temp.push(i);
      }

      currentArray = temp;
      if(typeof callback === 'function'){
        let callthis = callback.bind(originalArray);
        callthis(currentArray);
      }
      return arrayFilterer;
    };
}
