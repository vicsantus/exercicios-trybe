import math


def latas(tamParede):
    mult = 3
    lata = 18
    valLata = 80
    quantLitros = tamParede / mult
    quantLatas = math.ceil(quantLitros / lata)

    preco = quantLatas * valLata

    return (quantLatas, preco)


print(latas(90))
