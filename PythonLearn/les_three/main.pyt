def find_matching(str_list:list, str_input:str):
    index_list = []
    for i,x in enumerate(str_list):
        if str_input in x:
            index_list.append(i)
            
            return index_list