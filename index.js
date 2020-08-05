var backtrace = require("backtrace-node");
const { aggressivelyTry } = require("./junkDrawer");

backtrace.initialize({
  endpoint: "https://" + process.env.BTUNIVERSE + ".sp.backtrace.io:6098",
  token: process.env.BTTOKEN,
});

(() => {
  try {
    aggressivelyTry();
  } catch (error) {
    var report = backtrace.createReport();
    report.setError(error);
    report.sendSync();
  }
})();
