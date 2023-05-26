def funcNomeMorrendo(palavra):
    count = len(palavra)
    for letter in range(count, 0, -1):
        print(palavra[:letter])


funcNomeMorrendo('beatriz')
