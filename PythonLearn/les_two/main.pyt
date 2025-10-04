def distinct_characters(str_list:list):
    dict_str = {}
    for x in str_list:
        dict_str[x] = len(set(x))
        
    return dict_str