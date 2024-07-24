//let arr = [4, 5, 6, 7, 7, 5]
//b1
/*for (i=0; i<arr.length; i++){
    if (arr[i]%2==0){
        console.log(arr[i])
    }
}

//b2
for (i=0; i<arr.length; i++){
    if (i%2==0){
        console.log(arr[i])
    }
}

//b3
let tong =0;
for (i=0; i<arr.length; i++){
    tong = tong + arr[i];
} console.log(tong)

let max = arr[0];
for (i=0; i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i]
    };
}console.log(max)*/

let arr = [1, 7, 5, 9, 2, 6];

/*In ra tổng các phần tử chẵn trong mảng
let tong = 0;
for (i=0; i<arr.length; i++){
    if (arr[i]%2==0){
        tong = tong + arr[i];
    }
} console.log("tong cac phan tu chan la: " + tong);*/

//In ra tổng các phần tử >10 trong mảng
/*let tong = 0;
for (i=0; i<arr.length; i++){
    if (arr[i]>10){
        tong = tong + arr[i];
    }
} console.log("tong cac phan tu lon hon 10 la: " + tong);*/

//In ra tổng các phần tử chia 7 dư 2 trong mảng
/*for (i = 0; i < arr.length; i++) {
    if (arr[i] % 7 == 2) {
        console.log(arr[i])
    }
}*/

//In ra max của các phần tử chẵn mảng
/*let list = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        list.push(arr[i]);
    }
} 
let max = list[1];
for (j= 0; j < list.length; j++) {
if (list[j]>max){
    max = list[j];
}
}console.log(max)*/

//In ra lớn nhất của mảng
/*let max = arr[0];
for (i=0; i<arr.length; i++){
    if (arr[i]>max){
        max = arr[i]
    };
}console.log(max)*/

//In ra số lượng các phần tử chia hết cho 5 trong mảng
/*let count = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
        count = count +1;
    }
}console.log("số lượng các phần tử chia hết cho 5" + count);*/

//In ra trung bình các phần tử chia hết cho 5 trong mảng
/*let count = 0;
let tong = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0) {
        count = count +1;
        tong = tong + arr[i];
    }
}let arg = tong / count;
console.log(arg)*/

//Cho người dùng nhập vào 1 số và in ra số lần xuất hiện của số đó trong mảng.
/*let a = +prompt("nhap vao 1 so");
let count = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
        count = count +1;
    }
}console.log("số lần xuất hiện của " + a + " la: " + count);*/

//Tìm phần tử lớn thứ 2 trong mảng
/*let max1 = arr[0];
let max2=0;
for (i = 0; i < arr.length; i++){
    if (max1<arr[i]){
        max2=max1;
        max1=arr[i];
    }else {
        if (max2<arr[i+1]){
            max2=arr[i+1]
        }
    }
}console.log(max2);*/


