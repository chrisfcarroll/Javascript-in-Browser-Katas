//-----------------------------------------------------------------------
QUnit.module("Verify test infrastructure")
QUnit.cases( [1] ).test("QUnit and QUnit.parameterize loaded",function(i, assert){ assert.ok( i===1 ); });

//------------------------------------------------------------------------
QUnit.module("Multiply function")
QUnit.cases([
  { title: "3 * 7", a : 3, b : 7, expected : 21 },
  { title: "90123456 * 99234567", a : 90123456, b : 99234567, expected : 8943362132703552},
])
  .test("is correct for calculations within SafeInteger range",function(tcase,assert){
    var actual= multiply( tcase.a, tcase.b);
    assert.equal(actual, tcase.expected);
   });
QUnit.cases([
  { title: "-3 * 7", a : -3, b :  7, expected : -21 },
  { title: "3 * -7", a :  3, b : -7, expected : -21 },
  { title: "-3 * -7", a : -3, b : -7, expected : 21 },
  { title: "-90123456 * -99234567", a : -90123456, b : -99234567, expected : 8943362132703552 }
])
    .test("is correct for negative operands",function(tcase,assert){
      var actual= multiply( tcase.a, tcase.b);
      assert.equal(actual, tcase.expected);
    });
