describe("Underscore Array functions", function() {

  it("_.keys should return an array with an object's keys ", function() {
    var object  = { one: 1, two: 2, three: 3 }, keys;
    keys =_.keys(object);

    expect(["one","two","three"]).toEqual(keys);
  });

  it("_.values should return an array with an object's values ", function() {
    var object  = { one: 1, two: 2, three: 3 }, values;
    values =_.values(object);

    expect([1,2,3]).toEqual(values);
  });

  it("_.defaults should populate undefined properties ", function() {
    var romans = { two: "II" },
      defaults  = { one: 1, two: 2, three: 3 };
    _.defaults(romans, defaults);

    expect({ one: 1, two: "II", three: 3 }).toEqual(romans);
  });

  
});

