function duplicatesInAnArray(){
    let duplicates = new Set();
    a.sort((a,b)=> {
        return a - b ; 
    })
    for(let i = 0; i< n; i++){
        if(a[i] == a[i +1 ]){
            duplicates.add(a[i])
        }
    }
    if(duplicates.length === 0){
        return [-1];
    }
return Array.from(duplicates);
}

console.log(duplicatesInAnArray([1, 2, 3, 1, 3, 6, 6])); // 1,3,6
