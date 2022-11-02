// 기본타입은 boolean , number , string, undefined , null 등이 있고

// 숫자 타입
const num : number = 100;
const num2 : number|string = "100";

// 문자 타입
const str : string = "테스트";

// bool 타입
const bool : boolean = true;

// 배열은 타입에 [] 붙여주면 된다.
const array : number[]= [1,2]

// undefined 타입 
const undefinedType : undefined = undefined;

// null 타입
const nullType:null = null;

// 객체 타입
const obj : {str : string,num?: number} = {str : "안녕"}
// 객체 타입은 속성명? : 타입 형태로 지정하면 속성은 있어도 되고 없어도 되는 옵션값이 된다.
// 없어도 오류가 없다.
const obj2 : {[key : string] : string} = {str : "안녕"}

// typeScript는 별칭 타입 사용이 가능한데
type BlockHeader = {
    version : string,
    height : number
}

// BlockHeader라는 사용자 지정 타입을 만들었고
// 필요할 때마다 재활용이 가능하다.
const gi :BlockHeader = {
    version : "1.0.0",
    height : 1
}

// tuple(튜플) : tuple은 배열을 생성할 수 있게 하는데 특정 위치에 특정 타입이 있어야한다.

const tuple : [string , number ,boolean?] = ["dkssud",110] 

// any : 타입 제한이 없다. typeScript의 검사를 비활성화 시킨다고 보면된다.
//       any는 말그대로 아무 타입이나 될수 있다는 뜻 너무 막쓰면 안좋다.

// undefined : 얘는 undefined의 값만 가질수 있다.
const any : any = 123
const any1 : any = "123"
const any2 : any = [1,"2",true]

// unknown : 어떤 타입인지 모를때 아직 변수를 사용하는 경우 데이터를 받아 올껀데
// 미리 타입을 알지 못할때 사용 하지만 그냥 사용하면 안되고 변수 unknown 타입으로 변수를
// 정의하면 컴파일러에게 "변수의 타입이" unknown이라 어떤 값이든 올 수 있다.
// 엄격하게 검사해라 라고 경고를 준다.
// 이게 any와의 차이점

// 오류 코드 
// const numUnknown : unknown = 100;

// console.log(numUnknown.length);

// 정상 코드

const numUnknown : unknown = 100;

if(typeof numUnknown === "string"){
    console.log(numUnknown.length);
}

// void : 비어 있다는걸 의미 typeScript에서 함수를 정의할때 매개 변수의 타입과
// return값의 타입을 지정해주는데 return 값이 없는 함수는 void 타입을 사용하고 있다.

// function 함수명() : return 타입 {}
// void는 안쓰면 typeScript는 자동으로 void 타입을 준다.
// 그래서 굳이 안써도 된다.

function fun(num : number) : void{
    console.log("안녕")
}

myName.name = "안녕"
