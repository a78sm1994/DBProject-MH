use db_project2;

-- @@ 스킬 검색 @@
-- 원하는 스킬 선택
set @sname = '빨리 먹기';

-- 스킬 설명(스킬 레벨에 따른 효과)
select Skilllevel, detail
from Skill
where Skillname = @sname;

-- 스킬을 얻을 수 있는 방어구와, 그 방어구를 만들기
-- 위한 소재, 그를 얻을 수 있는 몬스터까지 알려줌
select DISTINCT SA_Aname, M_Matname, G_Mname
from Skilled_Armor, Making, Get_from
where SA_Skillname = @sname AND SA_Aname = M_Aname AND M_Matname = G_Matname;