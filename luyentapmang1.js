let arr = [11, 2, 3, 41, 5, 61, 7, 81, 9, 10];
//Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử. Chương trình thực hiện tính và hiển thị xem có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

/*let count = 0;
for (i=0; i<arr.length; i++){
    if (arr[i]>=10){
        count = count +1;
    }
}console.log(count);*/

//Viết chương trình khởi tạo mảng số nguyên gồm 10 phần tử khác nhau. Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.
/*let max = arr[0];
for (i=0; i<arr.length; i++){
    if (max <=arr[i]){
        max = arr[i];
    }
}console.log(max);
for (i=0; i<arr.length; i++){
    if (max ==arr[i]){
console.log(i)}}*/

// Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng
/*let max = arr[0];
let tong = 0;
let count =0;
for (i=0; i<arr.length; i++){
    if (max <=arr[i]){
        max = arr[i];
    }
    count = count + 1;
    tong = tong +arr[i];
}console.log(max);
console.log(arg= tong/count);*/

//Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
/*let list =[];
for (i=arr.length-1; i>=0; i--){
    list.push(arr[i]);;
}console.log(list)*/

//Viết chương trình đếm số nguyên âm trong một chuỗi
/*let count =0;
for(i=0; i<arr.length; i++){
    if (arr[i]<0){
        count = count +1;
    }
}console.log(count)*/

//Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình tìm xem V có nằm trong mảng số nguyên không? Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
/*let v=+prompt('nhap vao so v');
let count =0;
for (i=0; i<arr.length; i++){
    if (v==arr[i]){
        count = count +1;
    }
}
if (count !=0){
    console.log("V is in the array");
}
    else{
        console.log("V is not in the array")
    }*/

  //Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V. Chương trình kiểm tra xem V có thuộc mảng đã cho không, nếu V thuộc mảng đã cho xoá V khỏi mảng (Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)
  /*let v=+prompt('nhap vao so v');
  let count =0;
  for (i=0; i<arr.length; i++){
      if (v==arr[i]){
        arr.splice(i,1);
      }
    }console.log(arr);*/

    
  