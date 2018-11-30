use db_project2;

-- @@@ 회원가입 정보 관리
-- 아이디, 비밀번호, 이름 입력할 경우
set @id = '12345';
set @pass = '1234';
set @na = '강동수';

-- 회원 정보를 저장
insert into Members
value
	(@id, @pass, @na);


-- 아이디를 입력할 경우 비밀번호를 출력
select Password_
from Members
where ID = @id;