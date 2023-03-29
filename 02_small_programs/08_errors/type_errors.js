let a;       // a is declared but is empty, as it has not been set to a value.
typeof(a);

a.name;      // TypeError: Cannot read property 'name' of undefined

a = 1;
a();         // TypeError: Property 'a' is not a function

const b = 42;
b = 3.14;    // TypeError: Assignment to constant variable.