import Client from "../models/client.model";
import { Request, Response } from "express";

const StatisticController = {

  getGenderStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $group: {_id: "$sex", count: {$sum: 1}}
      }
    ]).then((stat) => {
      res.json(stat);
    }, (err) => {
      res.json(err);
    });
  },

  getAgeStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $group: {
          _id: {
            sex: "$sex",
            year: {
              $subtract: [
                new Date().getFullYear(),
                {
                  $year: {
                    $toDate: "$birthDate"
                  }
                }
              ]
            }
          },
          count: {$sum: 1},
        }
      }
    ]).then((stat) => {
      res.json(stat);
    }, (err) => {
      res.json(err);
    });
  },

  knowFromStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $group: {_id: "$knowFrom", count: {$sum: 1}}
      }
    ]).then((stat) => {
      res.json(stat);
    }, (err) => {
      res.json(err);
    });
  },

  getRegMonthStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $group: {
          _id: {
            year: {
              $year: {
                $toDate: "$registrationDate"
              }
            },
            month: {
              $month: {
                $toDate: "$registrationDate"
              }
            }
          },
          count: {$sum: 1}
        }
      }
    ]).then((stat) => {
      const statistic = stat.map(function (value) {
        const item = value._id;
        item.count = value.count;
        return item;
      });
      res.json(statistic);
    }, (err) => {
      res.json(err);
    });
  },

  getAttendanceStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $unwind: "$visitsHistory",
      },
      {
        $group: {
          _id: {
            year: {
              $year: {
                $toDate: "$visitsHistory.checkIn"
              }
            },
            month: {
              $month: {
                $toDate: "$visitsHistory.checkIn"
              }
            }
          },
          count: {$sum: 1}
        }
      }
    ]).then((stat) => {
      const statistic = stat.map(function (value) {
        const item = value._id;
        item.count = value.count;
        return item;
      });
      res.json(statistic);
    }, (err) => {
      res.json(err);
    });
  },

  subscriptionsStats: function (_req: Request, res: Response) {
    Client.aggregate([
      {
        $unwind: "$subscriptions",
      },
      {
        $group: {
          _id: {
            subscriptionType: "$subscriptions.subscriptionType"
          },
          count: {$sum: 1}
        }
      }
    ]).then((stat) => {
      const statistic = stat.map(function (value) {
        const item = value._id;
        item.count = value.count;
        return item;
      });
      res.json(statistic);
    }, (err) => {
      res.json(err);
    });
  },

};

export default StatisticController;
