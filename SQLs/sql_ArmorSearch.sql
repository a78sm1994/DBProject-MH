use db_project2;

-- @@@ 방어구 검색 @@@
-- 방어구 설정
set @aname = '쟈그라스암a';

-- 방어력 출력
select D_P
from Armor
where Aname = @aname;

-- 속성내성 출력
select R_F, R_W, R_L, R_I, R_D
from Armor
where Aname = @aname;

-- 세트이름 출력
select A_setname
from Armor
where Aname = @aname;

-- 스킬, 스킬레벨 출력
select Skillname, Skilllevel
from Skills
where S_Aname = @aname;

-- 방어구 제작 방법 출력
select M_Matname, Number_
from Making
where M_Aname = @aname;