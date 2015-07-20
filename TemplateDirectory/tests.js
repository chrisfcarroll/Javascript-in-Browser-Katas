//-----------------------------------------------------------------------
QUnit.module("Verify test infrastructure")
QUnit.cases( [1] ).test("QUnit and QUnit.parameterize loaded",function(i, assert){ assert.ok( i===1 ); });

//------------------------------------------------------------------------
QUnit.module("Somefunction")
QUnit.cases([
  { title: "3 and 7", a : 3, b : 7, expected : 10 },
  { title: "a and b", a : "a", b : "b", expected : "ab"},
])
  .test("is correct",function(tcase,assert){
    var actual= somefunction( tcase.a + tcase.b);
    assert.equal(actual, tcase.expected);
   });
