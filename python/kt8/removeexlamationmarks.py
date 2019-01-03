# def remove_exclamation_marks(s):
#     new_string = str(filter(lambda ch: ch not in "!",s))
#     return new_string


def remove_exclamation_marks(s):
    nl = list()
    for i in s:
        if i != "!":
            nl.append(i)
        
    return ''.join(nl)




print(remove_exclamation_marks("Hi! Hello!"), "Hi Hello")
print(remove_exclamation_marks("Hello World!!!"), "Hello World")
print(remove_exclamation_marks(""), "")
print(remove_exclamation_marks("Hello World!"), "Hello World")
print(remove_exclamation_marks("Oh, no!!!"), "Oh, no")