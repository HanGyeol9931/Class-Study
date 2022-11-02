// mysql -u 접속할 유저 이름 -p
// 패스워드 입력하고
// 현재 있는 데이터 베이스 리스트 보는 명령어
// ------------------
// show databases;
// ------------------

// 데이터 베이스 하나 만들기 명령어
// ------------------
// CREATE DATABASE (테이블명) CHARACTER SET utf8;
// ------------------

// 사용할 데이터 베이스 선택
// ------------------
// use 데이터 베이스명
// ------------------

// 테이블에 컬럼 추가 쿼리문
// ------------------
// INSTERT INTO '데이터 베이스 이름'.'테이블이름' ('id','content') VALUES ('1','안녕');
// ('id', 'content') 순서대로
// ('1', '안녕') 순서대로 추가할 벨류들
// ------------------

// 테이블에 컬럼 제거 쿼리문
// ------------------
// DELETE FROM `데이터 베이스 이름`.`테이블이름` WHERE (`id` = '1');
// WHERE (`id` = '1') 어디에? 아이디가 1번인 컬럼을
// ------------------

// 테이블에 컬럼 수정 쿼리문 
// ------------------
// UPDATE `데이터베이스 이름`.`티이블 이름` SET `content` = '하세요' WHERE (`id` = '1');
// 변경 내용 SET `content` = '하세요' 
// WHERE (`id` = '1') 어디에? 아이디가 1번인 컬럼
// -----------------

