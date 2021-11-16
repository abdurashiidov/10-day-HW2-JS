let number = [4.24, 8.05, -4.85]

function sortlash(arr) {
    let qovus = []
    for(let i = 0; i < arr.length; i++){
        let sort = Math.round(arr[i])
        if(sort >= 0){
            qovus.push(sort)
        }else if(sort <= 0){
            let son = sort - sort - sort
            qovus.push(son)
        }
    }
    console.log(qovus)
}
sortlash(number)