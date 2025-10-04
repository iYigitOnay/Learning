L1 = [1,2,3,4,-1,10,5,2]
counter = 0
for i, x in enumerate(L1):
    print(i)
    print(x)
    if x == 5:
        counter += 1
        if counter == 2:
            break
        print(i)