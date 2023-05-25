def maiorChar(lista):
    maior = ""
    for palavra in lista:
        if len(palavra) >= len(maior):
            maior = palavra
    return maior


# print(maiorChar(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
