

def smallest(a_list):
    i = 0
    placeholder = 0
    
    for i in a_list:
        if a_list[i] < a_list[i+1]:
            placeholder = a_list[i]
            i + 1
        else:
            i + 1
    return placeholder

list1 = [2,5,1,3,40,3,2,1,5]

print(smallest(list1))