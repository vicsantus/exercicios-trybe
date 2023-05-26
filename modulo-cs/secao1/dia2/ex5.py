def fizzBuzz(listNum: list[int]) -> list[int or str]:
    newList = []
    for num in listNum:
        if (num % 3) != 0 and (num % 5) != 0:
            newList.append(num)
        if (num % 3) == 0 and (num % 5) == 0:
            newList.append('FizzBuzz')
        if (num % 3) == 0 and (num % 5) != 0:
            newList.append('Fizz')
        if (num % 3) != 0 and (num % 5) == 0:
            newList.append('Buzz')
    return newList


if __name__ == '__main__':
    print(fizzBuzz([1, 3, 5, 7, 9, 15]))
