//Bai 1
function Bai1 (day, month, year, hour, minute, second){
    let check = true
    if(day < 1 || month < 1 || year < 1 || hour < 0 || minute < 0 || second < 0){
        check = false
    }
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 9 || month == 10 || month == 12){
        if(day > 31){
            check = false
        }
    }
    else if (month == 4 || month == 6 || month == 9 || month == 11) {
        if (day > 30) {
            check = false;
        }
    }
    else if (month == 2) {
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if ((isLeapYear && day > 29) || (!isLeapYear && day > 28)) {
            check = false;
        }
    }
    if(hour > 59 || minute > 59 || second > 59){
        check = false
    }
    if (check) {
        const date = 'Ngày: ' + day + '/' + month + '/' + year
        const time = 'Giờ: ' + hour + ':' + minute + ":" + second
        console.log(date);
        console.log(time);
    } else {
        console.log("Không hợp lệ.");
    }
}
Bai1("20", "12" , "2024", "21", "30", "30")

//Bai2
function Bai2(dd, mm, yyyy) {
    let check = true
    if(dd < 1 || mm < 1 || yyyy < 1){
        check = false
    }
    if(mm == 1 || mm == 3 || mm == 5 || mm == 7 || mm == 9 || mm == 10 || mm == 12){
        if(dd > 31){
            check = false
        }
    }
    else if (mm== 4 || mm == 6 || mm == 9 || mm == 11) {
        if (dd > 30) {
            check = false;
        }
    }
    else if (mm == 2) {
        const isLeapYear = (yyyy % 4 === 0 && yyyy % 100 !== 0) || (yyyy % 400 === 0);
        if ((isLeapYear && dd > 29) || (!isLeapYear && dd > 28)) {
            check = false;
        }
    }
    if(check){
        const date1 = mm + '-' + dd + '-' + yyyy; 
        const date2 = mm + '/' + dd + '/' + yyyy; 
        const date3 = dd + '-' + mm + '-' + yyyy; 
        const date4 = dd + '/' + mm + '/' + yyyy; 
        console.log(date1);
        console.log(date2);
        console.log(date3);
        console.log(date4);
    }else {
        console.log("Không hợp lệ.");
    }
}
Bai2("30","12", "2024")

//Bai 3
function Bai3(a){
    let b
    for(i=1;i<a.length; i++){
        if(a[i] > a[i-1]){
            b = true
        }else{
            b = false
            break
        }
    }
    console.log(b)
}
Bai3("126345")

//Bai 4
function Bai4(str1){
    let str2 = ""
    for (let i = 0; i < str1.length; i++) {
        str2 += String.fromCharCode(str1.charCodeAt(i) + ('b'.charCodeAt(0) - 'a'.charCodeAt(0)))
    }
    console.log(str2)
}
Bai4("abcde")
//Bai 5
function Bai5(m){
    if(m.length % 2 == 0){
        console.log("Chuỗi có chiều dài chẵn")
    }else if (m.length % 2 == 1 && m.length > 3){
        let k = (m.length - 1)/2
        console.log(m[k-1], m[k], m[k+1])
    }
}
Bai5("12345")
//Bai 6
function Bai6(n){
    let result=0
    let tmp=0
    let arr = []
    arr.push(n[0])
    arr[n[0]]=1;
    for (i=1;i<n.length;i++){
        if (arr[n[i]]>0) arr[n[i]]++
        else {
            arr.push(n[i])
            arr[n[i]]=1;
        }
    }
    for (i=1;i<n.length;i++){
        if (arr[n[i]]> tmp) {
            tmp=arr[n[i]]
            result=n[i]
        }
    }
    console.log(result)
}
const n = [1,2,3,4,5,6,3,7,8]
Bai6(n)

//Bai 7
function Bai7(string){
    let found = false
    for(let i = 0; i< string.length; i++){
        if(string[i] == "j"){
            if(string[i+1] == "a" && string[i+2] == "v" && string[i+3] == "a"){
                found = true
            }
        }
    }
    if (found){
        console.log("Chuỗi chứa 'java'");
    } else{
        console.log("Chuỗi không chứa 'java'")
    }
}
Bai7("stringjava")

//Bai 8
function Bai8(mth){
    let result = ""
    if (mth<1 || mth>12) console.log('Không hợp lệ')
    else{   
            if(mth==1) result = mth + "-Tháng một"
            else if (mth==2) result = mth + "-Tháng hai"
            else if (mth==3) result = mth + "-Tháng ba"   
            else if (mth==4) result = mth + "-Tháng tư"
            else if (mth==5) result = mth + "-Tháng năm"
            else if (mth==6) result = mth + "-Tháng sáu"
            else if (mth==7) result = mth + "-Tháng bảy"
            else if (mth==8) result = mth + "-Tháng tám"
            else if (mth==9) result = mth + "-Tháng chín"
            else if (mth==10) result = mth + "-Tháng mười"
            else if (mth==11) result = mth + "-Tháng mười một"
            else if (mth == 12) result = mth + "-Tháng mười hai"
        console.log(result)
    }
}
Bai8(12)

//Bai 9
function Bai9(str){
    const h = str.split(' ')
    let result = ""
    for (let i = 0; i < h.length; i++) { 
        const charAtIndex = h[i]
        if (charAtIndex.length > result.length) { 
            result = h[i]
        }
    }
    console.log(result);
}
Bai9("abc dkfjkd jfdghjfdhh")

//Bai 10
function Bai10 (k, l){
    console.log("Cac so nguyen to la: ")
    for(let i = k; i <= l; i++){
        let q = true
        if(i<2){continue}
        for(let j = 2; j < i; j++ ){
            if(i%j == 0){
                q = false
                break
            }
        }
        if(q){
            console.log(i)
        }
    }
}
Bai10("104", "205")