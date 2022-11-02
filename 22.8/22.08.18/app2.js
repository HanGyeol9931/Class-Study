// sequelize 사용
// 설치 명령어 
// npm i sequelize
// 폴더명 까지만 경로를 작성해 줬을때 index.js를 기본으로 찾아온다.
const { sequelize , User } = require("./model");
const { sync } = require("./model/users");
// 연산자 사용하기 위해서 가져온다.
const { Op } = require("sequelize")

// 처음에 연결할때 테이블들의 값을 초기화 할것인지
// true면은 기존 테이블들을 초기화하고 false면 초기화 하지 않는다.
sequelize
.sync({force : false})
.then(()=>{
    console.log("연결 되었습니다.");
})
.catch((err) => {
    console.log(err);
});

// INSER INTO 테이블명 벨류 (?,?,?)

// 생성 쿼리문 create
// User.create({
//     name : "안녕",
//     age : 23,
//     msg : "코코아",
// })

// 조회 쿼리문
// select * from users
// attributes : 원하는 컬럼만 가져온다.
// where : 검색 조건 설정
// order : 생성 순서 정렬 DESC , ASC (내림차순 , 오름차순) order : [["age","DESC"]]
// limit : 조회할 갯수
// offset : 스킵할 갯수
// DESC, ASC 이거는 자주 사용한다.
//  Op.gt (greater than, 초과),
// Op.gte (greater than or equal to, 이상),
// Op.lt (less than, 미만),
// Op.lte (less than or equal to, 이하),
// Op.ne (not equal, 같지 않음),
// Op.or (or, 또는),
// Op.in (in, 배열 요소 중 하나),
// Op.notIn (not in, 배열 요소와 모두 다름) 등이 있다.



async function select(){
    const user = await User.findAll({
        where : {
            age: { [Op.gt]:23},
            [Op.or]: [{age : {[Op.gt]:23}},{name:"안녕"}]
        },
        order : [["age","ASC"]],
        // limit: 1,
        // where : {
        //     age : 24,
        // },
    });

    const temp = user.map((i)=>i.dataValues);
    console.log(temp)
}

// findOne은 구성은 같고 하나만 데이터를 가져온다
// findOne은 검색 조건을 사용해서 쓰자.

select()
// 수정 쿼리문
User.update(
    {
    msg : "수정할 내용"
    },
    // 아이디가 1번인 애를 찾아서
    { where : { id : 1}}
);

// 삭제 쿼리문
User.destroy({
    where : { id:1 },
});

// 관계 쿼리문 join

