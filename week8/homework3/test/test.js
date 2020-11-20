// importing my function from another file
const foo = require("../foo");
const assert = require("assert");

describe("foo should return... ", () => {
  it("it should return bar", () => {
    assert.strictEqual(foo(), "bar");
  });
});

describe("foo should return... ", () => {
  it("it should return bar", () => {
    assert.strictEqual(foo(), "bar");
  });
});

describe("foo should return..", () => {
  it("it should return bat", () => {
    assert.strictEqual(foo(), "bat");
  });
});

//! Your test is not working here because you created another package.json file without
//! mocha installed or declared in the scripts-> test: "mocha". Installing the modules in the
//! root directory would have been enough If you do want to install the package.json here, you
//! can, but you didn't install mocha, nor did you set the scripts to test: "mocha" in the json
//! file.
