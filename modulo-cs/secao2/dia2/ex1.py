def cPar(numero):
    count = 0
    for n in range(1, numero):
        if n % 2 == 0:
            count += 1
    return count


print(cPar(10))
