use db_project;
    
create table Species(
	Sname	varchar(255) not null,
    primary key(Sname)
    );
    
create table Monster(
	Mname	varchar(255) not null,
    M_Sname	varchar(255),
    E_Fire	int	unsigned not null default 0,
    E_Water	int unsigned not null default 0,
    E_Light	int unsigned not null default 0,
    E_Ice	int unsigned not null default 0,
    E_Dragon int unsigned not null default 0,
    C_Poison int unsigned not null default 0,
    C_Sleep	int unsigned not null default 0,
    C_Paralysis	int unsigned not null default 0,
    C_Bomb	int unsigned not null default 0,
    C_Stun	int unsigned not null default 0,
    primary key(Mname),
    foreign key(M_Sname) references Species(Sname)
		on delete no action on update cascade,
    check (E_Fire <= 5 AND E_Water <= 5 AND E_Light <= 5 AND E_Ice <= 5 AND E_Dragon <= 5 AND
		C_Poison <= 5 AND C_Sleep <= 5 AND C_Paralysis <= 5 AND C_Bomb <= 5 AND C_Stun <= 5)
    );
    
create table Weak_Point(
	W_Mname	varchar(255) not null,
    Weak	varchar(255) not null,
    primary key(W_Mname, Weak),
    foreign key(W_Mname) references Monster(Mname)
		on update cascade
    );
    
create table Break_Point(
	B_Mname varchar(255) not null,
    Break	varchar(255) not null,
    primary key(B_Mname, Break),
    foreign key(B_Mname) references Monster(Mname)
		on update cascade
    );
    
create table HOW(
	Method	varchar(255) not null,
    primary key(Method)
    );
    
create table Material(
	Matname varchar(255) not null,
    primary key(Matname)
    );

create table Get_from(
	G_Mname 	varchar(255) not null,
    G_Method 	varchar(255) not null, 
	G_Matname 	varchar(255) not null,
    Rarity 		int unsigned not null default 0,
	primary key(G_Mname, G_Method, G_Matname),
    foreign key (G_Mname)	references Monster(Mname)	on update cascade,
    foreign key (G_Method)	references HOW(Method)		on update cascade,
	foreign key (G_Matname)	references Material(Matname) on update cascade
    );

create table Set_(
    Setname     varchar(255) not null,
    Snumber    int        	not null,
    primary key(Setname, Snumber)
   );
   
   create table Skill(
    Skillname	varchar(255) not null,
    Skilllevel	int	not null default 1,
    Detail		varchar(255) not null,
    primary key(Skillname, Skilllevel)
    );

create table Armor(
	Aname	varchar(255) not null,
    Part	varchar(255) not null,
    D_P 	int unsigned not null,
    Price 	int unsigned not null,
    A_Setname 	varchar(255),
    R_F 	int not null default 0,
    R_W 	int not null default 0,
    R_L 	int not null default 0,
    R_I 	int not null default 0,
    R_D 	int not null default 0,
    primary key (Aname),
    foreign key(A_setname) references Set_(Setname)
		on delete set null on update cascade
    );
    
    
create table Skilled_Armor(
	SA_Aname		varchar(255) not null,
    SA_Skillname	varchar(255) not null,
    ArmorSkilllevel	int	not null default 1,
    primary key(SA_Aname, SA_Skillname),
    foreign key(SA_Aname) references Armor(Aname)
		on delete no action on update cascade,
	foreign key(SA_Skillname) references Skill(Skillname)
		on delete no action on update cascade
	);


create table Making(
    M_Aname     varchar(255) not null,
    M_Matname   varchar(255) not null,
    Number_     int not null,
    primary key(M_Aname,M_Matname),
    foreign key(M_Aname) references Armor(Aname)
      on delete no action on update cascade,
	foreign key(M_Matname) references Material(Matname)
      on delete no action on update cascade
    );
    

create table Set_Skill(
    S_Setname       varchar(255) not null,
	S_Snumber       int        	not null,
    S_Skillname    varchar(255) not null,
    S_Skilllevel   int not null default 1,
    primary key(S_Setname, S_Snumber, S_Skillname, S_Skilllevel),
    foreign key(S_Setname, S_Snumber) references Set_(Setname, Snumber)
      on delete no action on update cascade,
	foreign key(S_Skillname, S_Skilllevel) references Skill(Skillname, Skilllevel)
		on delete cascade on update cascade
    );


create table Members(
	ID				varchar(255) not null,
    Password_		varchar(255) not null,
    Name_			varchar(255) not null,
    primary key(ID, Password_)
    );
    
    
    