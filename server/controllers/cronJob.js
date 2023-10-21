const cron = require("node-cron");

const itemsCronJob = () => {
    // Setting up cron job to update Availability of doctor
    cron.schedule("*/1 * * * *", function () {
        console.log("---------------------");
        console.log("running a task every 1 minute");
    });
};
module.exports = itemsCronJob;
