use db_project;

-- @@ 아이템 시뮬레이터 @@
-- 지정된 아이템들 설정
set @head = '쟈나프헬름a';
set @body = '쟈나프메일b';
set @arm  = '쟈나프암a';
set @waist = '쟈나프코일a';
set @leg  = '쟈나프그리브a';


-- 방어구들이 가지고 있는 스킬을 통합
select SA_Skillname, SUM(ArmorSkilllevel)
from Skilled_Armor
where SA_Aname = @head OR SA_Aname = @body OR SA_Aname = @arm
	OR SA_Aname = @waist OR SA_Aname = @leg
group by SA_Skillname;
 
-- 어떤 세트효과를 가졌는지, 그리고 그에 의한 세트효과를 출력.
-- SetSkill에 선택한 방어구들이 가지고 있는 세트효과와 그 갯수를 저장
WITH SetSkill AS
(select A_Setname, COUNT(*) as C
 from	Armor
 where A_Setname IS NOT NULL AND (Aname = @head OR Aname = @body OR Aname = @arm
	OR Aname = @waist OR Aname = @leg)
 group by A_Setname)
-- 그 갯수에 따라 발동되는 세트효과를 출력
select A_Setname, S_Snumber, S_Skillname, Detail
from SetSkill, Set_Skill, Skill
where A_Setname = S_Setname
        AND S_Snumber <= C
        AND S_Skillname = Skillname;
 