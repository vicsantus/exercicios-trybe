def c_par(numero):
    if numero <= 1:
        return 0
    if (numero - 1) % 2 == 0:
        return 1 + c_par(numero - 1)
    else:
        return c_par(numero - 1)


print(c_par(10))
