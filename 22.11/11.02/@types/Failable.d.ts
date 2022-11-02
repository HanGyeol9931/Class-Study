declare type Result<R> = {isError : false;value : R}
declare type Faillure<E> = {isError : true;value : E}
declare type Failable<R,E> = Result<R> | Faillure<E>

// typeScript 제네릭
// 선언 시점이 아니라 생성하는 시점에 타입을 명시해서 하나의 파일이 아닌
// 다양한 타입을 사용할 수 있는 기법이다.

// 제네릭을 쓰는 이유는
// 한번의 선언으로 다양한 타입에 재사용이 가능하다는 장점
// 제네릭을 안쓰면 불필효한 타입 변환을 하기 때문에
// 프로그램의 성능 향샹에 도움이 된다.

// 제네릭을 안쓰면 타입을 미리 지정하거나 any를 사용하면 되는데
// 타입을 미리 지정한다는건 정해진 타입을 써야하고
// any를 사용하면 자료타입을 제한할수도 없고 어떤 데이터 타입이 반환되는지 알 수 없다.
