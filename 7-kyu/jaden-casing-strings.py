def to_jaden_case(string):
    a= string.split()
    b = []
    for c in a:
        b.append(c.capitalize())
    print(b)
    c=''
    for i in b:
        c+=" " +i
    return c.strip()