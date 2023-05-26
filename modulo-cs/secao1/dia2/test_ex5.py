from ex5 import fizzBuzz


def test_if_function_fizzBuzz_work_fine():
    assert fizzBuzz([1, 3, 5, 7, 9, 15]) == [
                                              1,
                                              'Fizz',
                                              'Buzz',
                                              7,
                                              'Fizz',
                                              'FizzBuzz'
                                             ]
