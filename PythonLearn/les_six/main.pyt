def make_transform(s1:str,s2:str):
    v1 = s1.split()
    v2 = s2.split()
    
    v1 = list(map(int,v1))
    v2 = list(map(int,v2))
    new_list = []
    
    
    for x in list(zip(v1,v2)):
        new_list.append(x[0]*x[1])

make_transform("1 15 3" , "2 6 -1")
    