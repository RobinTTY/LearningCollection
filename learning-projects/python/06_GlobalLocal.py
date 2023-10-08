def func():
    x = 1
    def inner():
        x = 2
        print("inner:", x)
    inner()
    print("outer:", x)
 
def nonlocal_func():
    x = 1
    def inner():
        nonlocal x
        x = 2
        print("inner:", x)
    inner()
    print("outer:", x)
 
func()  # inner: 2
        # outer: 1
 
nonlocal_func()  # inner: 2
                 # outer: 2