import random


def shuffle():
    lista_de_palavras = ['desenrola', 'bate', 'joga', 'diladinho']
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
