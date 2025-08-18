const EventEmmiter = require("node:events");

class SchoolBell extends EventEmmiter {}

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
  console.log("Hurrah! School Suti.");
});
schoolBell.on("ring", () => {
  console.log("Kire Vule Bajailo naki? r o akta class ace to...");
});
schoolBell.on("broken", () => {
  console.log("Kire vi, aj ki suti hbe na re!...");
});

schoolBell.emit("ring");
schoolBell.emit("broken");
