const cron = require("node-cron");
const { urls } = require("../configs/monk.config");

cron.schedule(
  "00 00 00 * * *",
  async () => {
    try {
      const count = await urls.count();
      if (count > 1) {
        await urls.remove({});
      }
    } catch (error) {}
  },
  {
    scheduled: true,
    timezone: "Asia/Ho_Chi_Minh",
  }
);
