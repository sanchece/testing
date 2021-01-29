
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(1000,8,4)).toEqual("12.19");
  
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(10043,8,5.8)).toEqual("131.00")

  // ..
});

 it("should handle high interest rates", function() {
   expect(calculateMonthlyPayment(1000,40,99)).toEqual('82.50')
   // ..
 });

