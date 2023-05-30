def maior(lista):
    if len(lista) <= 0:
        return 0

    if lista[-1] < maior(lista[:-1]):
        return maior(lista[:-1])
    else:
        return lista[-1]


print(maior([3, 9, 6, 939393, 7, 666]))
