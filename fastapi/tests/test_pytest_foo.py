def test_bar1():
    def add(a, b):
        return a + b
    assert 5 == add(2,3)