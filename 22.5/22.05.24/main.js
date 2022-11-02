// document.write(1)
// document.write(2)
// document.write(3)
// document.write(4)
// document.write(5)
// document.write(6)
// document.write(7)
// document.write(8)
// document.write(9)
// document.write(10)

// 반복문
// for(변수 선언문 or 할당문; 조건식; 증감식){
//     조건식이 찰인 경우 반복 실행하는 녀석들..
// }

// for(let i = 0; i<=10; i++){
//     console.log(i)
//     document.write(i)
//     document.write("<br>")
// }
// //1부터 100까지의 합
// let res=0;
// for(let i=1;i<=100;i++)
// {
//     res = res+i;
// }
// console.log(res)


// for(let i = 0; i<=10; i++)
// {
//     if(i==2)continue
//     console.log(i)
// }

// for(let i = 5; i>=0; i--){
//     console.log(i)
// }


// 2중for
// for(let i =0;i<3;i++)
// {
//     for(let k=0;k<3;k++){
//         console.log(i,k)
//     }
// }


// let result=0;
// for(let a =2; a<=9;a++)
// {
//     console.log(a+"단")
//     for(let b= 1;b<=9;b++){
//         result=a*b
//         console.log(a+"x"+b+"=",result);
//     }
// }



//기본적으로 무한루프
//종료조건이 있어야 된다.

let number = 0;
// while (true) {
//     number+=2;
//     console.log(number);
//     if(number===10)break;
// }

// while (number<10){
//     number++;
//     if(number %2 !=0)continue; // 2로 나눈 나머지가 0이 아니라면 건너 뛰어라
//     console.log(number);
// }
document.write("별찍기1")
document.write("<br>")
for(let i = 0;i<5;i++)
{
    
    for(let k = 0;k<=i;k++)
    {
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("별찍기2")
document.write("<br>")
for(let i = 0;i<5;i++)
{
    for(let k = 4;k>=i;k--)
    {
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("별찍기3")
document.write("<br>")
for(let i = 0;i<5;i++)
 {
    for(let k = 4; k>i;k--)
    {
        document.write('\u00A0')
    }
    for(let k = 0;k<=i;k++)
    {
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("별찍기4")
document.write("<br>")

for(let i = 0;i<5;i++)
{
    for(let k = 0;k<=i;k++)
    {
        document.write('\u00A0')
    }
    for(let k = 4; k>=i;k--)
    {
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("삼각형")
document.write("<br>")
for(let i = 0;i<5;i++){
    for(let k = 4;k>=i;k--){
        document.write('\u00A0')
    }
    for(let k=0;k<=i;k++){
        document.write('*')
    }
    for(let k=1;k<=i;k++){
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("삼각형")
document.write("<br>")
for(let i = 0;i<5;i++){
    for(let k = 0;k<=i;k++){
        document.write('\u00A0')
    }
    for(let k=3;k>=i;k--){
        document.write('*')
    }
    for(let k=4;k>=i;k--){
        document.write('*')
    }
    document.write("<br>")
}
document.write("<br>")
document.write("마름보")
document.write("<br>")
for(let i = 0;i<=5;i++){
    for(let k = 4;k>=i;k--){
        document.write('\u00A0')
    }
    for(let k=0;k<=i;k++){
        document.write('*')
    }
    for(let k=1;k<=i;k++){
        document.write('*')
    }
    document.write("<br>")
}
for(let i = 0;i<5;i++){
    for(let k = 0;k<=i;k++){
        document.write('\u00A0')
    }
    for(let k=4;k>=i;k--){
        document.write('*')
    }
    for(let k=3;k>=i;k--){
        document.write('*')
    }
    document.write("<br>")
}
    document.write("<br>")
    for(i = 0;i >5;i++){
        document.write('*')
    }

    
    // document.write("<br>")












