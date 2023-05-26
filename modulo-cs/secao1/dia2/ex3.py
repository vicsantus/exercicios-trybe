import random
# import json


def shuffle():
    with open('palavras.txt', 'r') as file:
        lista_com_n = [palavra for palavra in file]
    lista_de_palavras = []
    for palavra in lista_com_n:
        if '\n' in palavra:
            lista_de_palavras.append(palavra[:len(palavra) - 1])
        else:
            lista_de_palavras.append(palavra)
    print(lista_de_palavras)
    word = random.choice(lista_de_palavras)
    scrambled_word = "".join(random.sample(word, len(word)))
    tentativa = ''
    while tentativa != word:
        print(f'A palavra é {scrambled_word}.\n')
        tentativa = input('Tenta adivinhar otário: ')
        if tentativa == word:
            print('\nAcertou mizeravi!\n')
            break
        print('\nErrou otário!\n')


shuffle()
