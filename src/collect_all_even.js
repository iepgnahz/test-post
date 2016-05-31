
function collect_same_elements(collection_a, object_b) {
 //在此处写代码
  var length1 = collection_a.length;
  var length2 = object_b.value.length;
  var s = "";
  var arr = [];
  for(var i = 0; i < length1; i++){
    s = collection_a[i].key
    for(var j = 0; j < length2; j++){
      if(s == object_b.value[j]){
        arr.push(s);
        break;
      }
    }
  }
  return arr;
}

module.exports = collect_same_elements;
