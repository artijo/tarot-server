function testmiddleware(req, res, next) {
  console.log("I am a middleware");
  next();
}

export { testmiddleware };