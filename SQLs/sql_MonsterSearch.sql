use db_project2;

-- @@@@ 몬스터 검색 @@@@@

-- 몬스터 이름 설정하는 부분
set @name = '도스쟈그라스';

-- 유효한 속성
select E_Fire, E_Water, E_Light, E_Ice, E_Dragon
from Monster
where Mname = @name;

-- 유효한 상태이상
select C_Poison, C_Sleep, C_Paralysis, C_Bomb, C_Stun
from Monster
where Mname = @name;

-- 약점
select Weak
from Weak_point
where W_Mname = @name;

-- 부위 파괴
select break
from Break_point
where B_Mname = @name;

-- 몬스터에서 나오는 소재
select Distinct G_Matname
from Get_from
where G_Mname = @name;