function g(x){var o='';return x=='al'?'gal':function h(y){o+='o';return y=='al'?'g'+o+'al':h}}

print(g('al'));
print(g()('al'));
print(g()()('al'));
print(g()()()('al'));
