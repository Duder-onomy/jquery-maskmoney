"use strict";

module("programmatic_sets");
test("it correctly masks the input when the inputs value is set with jquery.val()", function() {
    var $input = $("#input1").maskMoney();

    $input.val("500");

    equal($input.val(), "5.00", "Failed");
});
