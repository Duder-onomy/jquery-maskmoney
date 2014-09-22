"use strict";

module("programmatic_sets");
test("it correctly masks the input when the inputs value is set with jquery.val()", function() {
    var $input = $("#input1").maskMoney();

    $input.val("500");

    equal($input.val(), "5.00", "Failed");
});

test("it is performant", function() {
    var $input = $("#input1").maskMoney();

    $input.val("500");

    equal(true, false, "Failed");
});

test("when calling 'unmask', it replaces the override.", function() {
    equal(true, false, "Failed");    
});
