use db_project2;

-- @@@ 소재 검색 @@@
-- 소재 이름 설정
set @matname = '용골+';

-- 어떤 몬스터에서 어떤 방식으로 얻는지.
select G_Mname, G_Method
from Get_from
where G_Matname = @matname;

-- 몇개로 어떠한 방어구를 만들 수 있는지.
select Number_, M_Aname
from Making
where M_Matname = @matname;
