def add_double_and_square(x:int):
    return 2*x+x*2

l=[2,3,5]

print (list(map(add_double_and_square)))

print (list(map(lambda x: 2*x+x*2 , L)))