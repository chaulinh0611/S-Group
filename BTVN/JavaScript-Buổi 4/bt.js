
const arr = [0, 1, 2, 3, 4, 5]
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i, array)
    }
}
forEach(arr, function(value, index, array){
    console.log(value, index, array)
})

// tạo mảng mới có độ dài tương tự mảng truyền vào
function map(array, callback){
    const newarr = [];
    for(let i = 0; i < array.length; i++){
        newarr.push(callback(array[i], i, array))
    }
    return newarr;
}
const newarr = map(arr,function(value, index, array){
    return value * 5;
});
console.log(newarr);

//tạo mảng chứa các phần tử thỏa mãn điều kiện
function filter(array, callback){
    const newarr1 = [];
    for(let i = 0; i< array.length; i++){
        if(callback(array[i], i, array)){
            newarr1.push(array[i]);
        }
    }
    return newarr1;
}
const newarr1 = filter(arr, function(value, index, array){
    return value > 0;
})
console.log(newarr1);

// tìm phần tử thỏa mãn điều kiện 
function find(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return array[i]
        }
    }
}
const a = find(newarr1, function(value, index, array){
    return value % 2 === 0;
})
console.log('a:',a);

// kiểm tra có chứa giá trị không
// function includes(array, value){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === value){
//             return true;
//         }
//     }
//     return false;
// }
// const b = includes(arr, 6)
// console.log(b);

// trả về 1 giá trị bất kì tương ứng
function reduce(array, callback, value){
    let result = value;
    for(let i = 0; i< array.length; i++){
        result = callback(result, array[i], i, array);
    }
    return result;
}
const c = reduce(newarr1, function(result, value, index, array){
    return result*value;
}, 1);
console.log(c);

// tìm chỉ số
function findIndex(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            return i;
        }
    }
}
const d = findIndex(arr, function(value, index, array){
    return value === 5;
});
console.log(d);


console.log('---------------------------');
//bai 1
const array2 = ['a', 'b', 'c'];
const array1 = [1, 2, 3];
function b1(array1, array2){
    const array = [];
    for(let i = 0; i< array1.length; i++){
        array.push(array1[i]);
    }
    for(let i = 0; i< array2.length; i++){
        array.push(array2[i]);
    }
    return array;
}
const array = b1(array1, array2);
console.log(array);
//bai 2
const data1 = [1, 2, 3, 4, 5];
const data2 = [2, 4, 6];
function evenNumbers(value){
    return value % 2 === 0;
}
function b2(array){
    const check = array.every(evenNumbers);
    console.log(check ? 'Yes' : 'No');
}
b2(data1);
b2(data2);
//bai 3
const data3 = [1, 2, 3, 4, 5];
const data4 = [1, 1, 3, 1, 5];
function b3(array){
    const check = array.some(evenNumbers);
    console.log(check ? 'Yes' : 'No');
}
b3(data3);
b3(data4);
//bai 4
const datas = [1, -2, 3, 4, -5];
function b4(array){
    const newarr = array.filter(function(value){
        return value > 0;
    })
    console.log(newarr);
}
b4(datas);
//bai 5
const data5 = [-1, -2, 3, 4, -5];
const data6 = [-1, 2, 3, 4, -5];
const data7 = [-1, -2];
function b5(array){
    const index = array.findIndex(function(value){
        return value > 0;
    })
    const value = array.find(function(value){
        return value > 0;
    })
    if(index !== -1){
        console.log(index, value);
    }else{
        console.log('No result');
    }
}
b5(data5);
b5(data6);
b5(data7);
//bai 6
const data8 = [1, 5, 30, 26];
function b6(array){
    array.forEach(function(value){
        if(value % 5 === 0){
            console.log(value);
        }
    })
}
b6(data8);
//bai 7
const data9 = [-1, 2, 3, 4, 2, 6];
const data10 = [0, 6];
function b7(array){
    const firstIndex = array.findIndex(function(value){
        return value === 2;
    })
    const lastIndex = array.lastIndexOf(2);
    if(firstIndex !== -1 || lastIndex !== -1){
        console.log(firstIndex, lastIndex);
    }else{
        console.log('No result');
    }
}
b7(data9);
b7(data10);
//bai 8 
const data11 = ["A", "B", "C"];
const data12 = [1, 2, 3];
function b8(array){
    const string = array.join(", ");
    console.log(string);
}
b8(data11);
b8(data12);
//bai 9
const data13 = [2, -1, -8];
function b9(array){
    const newarr = array.map(function(value){
        if(value < 0){
            value = value/-1;
        }
        return value;
    })
    console.log(newarr);
}
b9(data13);