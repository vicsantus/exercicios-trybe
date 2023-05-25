from math import sqrt


def media(lista):
    if len(lista) == 0:
        return None
    return sqrt(sum(lista) / len(lista))


# print(media([1, 2, 3]))
