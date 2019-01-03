function partlist(arr) {
    let res = [];
    for(i=1;i<arr.length;i++){
      let subres = [];
      subres.push(arr.slice(0,i).join(' '));
      subres.push(arr.slice(i).join(' '))
      res.push(subres);
    }
    return res;
}

   console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
    //console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), 
    //    [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
    //console.log(partlist(["vJQ", "anj", "mQDq", "sOZ"]), 
    //    [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
    