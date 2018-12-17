import pymysql

conn = pymysql.connect(host='localhost', user='root', password='ska159963n',
                       db='db_project2', charset='utf8')

txtArr = ["Armor", "Break_Point", "Get_from", "HOW", "Making", "Material", "Monster", "Set_", "Set_Skill", "Skilled_Armor","Species", "Weak_Point"]


for i in txtArr:
    f = open(i + ".txt",'r')
    fw = open(i + "write.txt",'w')
    lines = f.readlines()

    with conn.cursor() as cursor:
        sql = "INSERT INTO " + i + " VALUES ("
        for i in lines:
            if(i == "Set_" or i == "Set_Skill"):
                s = i.split(',')
            else:
                s = i.split()

            for aa in range(0,len(s)):
                s[aa] = "'" + s[aa] + "'"
            
            fw.write(sql)
            #print(sql , end="")
            for bb in range(0,len(s)-1):
                #print(s[bb],end=",")
                fw.write(s[bb] + ",")
            fw.write(s[len(s)-1] + ");\n")
            #print(s[len(s)-1],end=");")
            #print("")
    f.close()
    fw.close()



#Skill
# f = open("Skill.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
    
#     sql = 'INSERT INTO Skill (Skillname,skilllevel,Detail) VALUES (%s,%s,%s)'
#     for i in lines:
#         s = i.split()
#         thirddata = ""
#         for aa in range(2, len(s)):
#             thirddata = thirddata + s[aa] + " "
#         cursor.execute(sql, (s[0],s[1],thirddata))
# conn.commit()

# # f.close()

# # ###Species

# f = open("Species.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = 'INSERT INTO Species (Sname) VALUES (%s)'
    
#     for i in range(0,len(lines)-1):
#         aa = ""
#         for ii in range(0,len(lines[i])-1):
#             aa += lines[i][ii]
#         cursor.execute(sql, (aa))
#     cursor.execute(sql,lines[len(lines)-1])
# conn.commit()

# f.close()


# Monsert는 쿼리문으로 처리
# #Monster
# f = open("Monster.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = "INSERT INTO Monster VALUES ("
#     for i in lines:
#         s = i.split()
#         for aa in range(0,2):
#             s[aa] = "'" + s[aa] + "'"
        
#         print(sql , end="")
#         for bb in range(0,len(s)-1):
#             print(s[bb],end=",")
#         print(s[len(s)-1],end=");")
#         print("")

# f.close()

#Weak_Point
# f = open("Weak_point.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = "INSERT INTO Weak_Point VALUES ("
#     for i in lines:
#         s = i.split()
#         for aa in range(0,len(s)):
#             s[aa] = "'" + s[aa] + "'"
        
#         print(sql , end="")
#         for bb in range(0,len(s)-1):
#             print(s[bb],end=",")
#         print(s[len(s)-1],end=");")
#         print("")

# f.close()
#Break_Point
# f = open("Break_Point.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = "INSERT INTO Break_Point VALUES ("
#     for i in lines:
#         s = i.split()
#         for aa in range(0,len(s)):
#             s[aa] = "'" + s[aa] + "'"
        
#         print(sql , end="")
#         for bb in range(0,len(s)-1):
#             print(s[bb],end=",")
#         print(s[len(s)-1],end=");")
#         print("")

#HOW
# f = open("HOW.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = "INSERT INTO HOW VALUES ("
#     for i in lines:
#         s = i.split()
#         for aa in range(0,len(s)):
#             s[aa] = "'" + s[aa] + "'"
        
#         print(sql , end="")
#         for bb in range(0,len(s)-1):
#             print(s[bb],end=",")
#         print(s[len(s)-1],end=");")
#         print("")

#Material
# f = open("HOW.txt",'r')
# lines = f.readlines()

# with conn.cursor() as cursor:
#     sql = "INSERT INTO HOW VALUES ("
#     for i in lines:
#         s = i.split()
#         for aa in range(0,len(s)):
#             s[aa] = "'" + s[aa] + "'"
        
#         print(sql , end="")
#         for bb in range(0,len(s)-1):
#             print(s[bb],end=",")
#         print(s[len(s)-1],end=");")
#         print("")



###############Get_From
#Set_
#Armor
#Making
#Skilled_Armor
#Set_Skill

# f = open("Species.txt",'r')
# lines = f.readlines()

# try:
#     with conn.cursor() as cursor:
#         sql = 'INSERT INTO HOW (Method) VALUES (%s)'
#         for i in lines:
#             cursor.execute(sql, (i))
#     conn.commit()
#     print(cursor.lastrowid)
#     # 1 (last insert id)
# finally:
#     conn.close()

# f.close()