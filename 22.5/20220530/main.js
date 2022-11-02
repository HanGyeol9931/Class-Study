//자바스크립트는 프로토타입 기반 객체지향 언어다~
//프로토타입에 대해서 정리
// class
// 0개 이상의 메서드만 정의할 수 있다.
// 생성자, 프로토타입 메서드, 정적메서드 

class CStudent{
   //생성자 
    constructor(age,phone,city){
        this.age =age;
        this.phone =phone;
        this.city =city;
    }
    getInfo(){
        return "나이는 : "+ this.age +"살"+"핸드폰 번호는"+this.phone+ "사는곳은"+this.city;
    }
}
 let st = new CStudent(10,10,'서울시 강남구'); //인스턴스 생성
console.log(st)
console.log(st.age)
console.log(st.getInfo())

//getter , setter
//클래스는 프로퍼티의 값을 가져오거나 값을 설정하기 위해 getter,setter를 제공한다.
//클래스 필드에 접근할때 직접변수에 접근하는 형태가 아닌 get,set을 통한 접근하는 
//방법이다, 외부에 값을 전달하거나 외부로부터 가지고 올떄 추가적인 조작이 가능하고
//내부 구조를 캡슐화 하는데에도 유리하다.
//public 녀석은 자바스크립트에서 자주씀.
//private,public,protected
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    get getName(){
        return "제품명 :" + this.name;
    }
    set setPrice(price){
        this.price = price;
    }
}

// let Pr = new Product('아이폰 14 언제 출시함?' , 1000000)
// console.log(Pr)
// console.log(Pr.getName)
// Pr.setPrice = 2000;
// console.log(Pr)

// class Person{
//     name = 'Lee'

// }
// const me = new Person();
// console.log(me.name);

// 아래와 같이 private 필드의 앞부분에 #을 붙혀준다.
class Person{
    #name = 'Lee'
    constructor(name){
        this.#name = name;
    }
    get getName(){
        return "제품명 :" + this.#name;
    }
}
const me = new Person("Kim");
console.log(me.getName);