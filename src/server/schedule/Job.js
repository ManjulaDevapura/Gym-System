/**
 * ******************************************************************
 * @file This file defines for check DB for ever Day
 * @author Manjula Devapura
 * ******************************************************************
 */
const CronJob = require("cron").CronJob;

var { con } = require("../database/config/connection");
var Transac = require("../database/config/transac");
var Messenger = require("../messenger/messenger");

// change the time for midnight 4 am
var job = new CronJob(
  "* */1 * * * *",
  function () {
    // const d = new Date();
    // console.log(' ');
    // console.log(' ');
    // console.log(' ');
    // console.log(`\x1b[37;1m***********************************************************************`);
    //     console.log(`\x1b[32mCRON JOB :\x1b[31m[${new Date().toString()}] \x1b[0mEveryDay Job start...!`);
    //     console.log('\x1b[32mCRON JOB :',`\x1b[31m[${new Date().toString()}]` ,'\x1b[0m');
    // Messenger(" Call Me Man ",1);
  },
  null,
  true,
  "Asia/Colombo"
);

efficencyCal = () => {
  var d = new Date().toLocaleString("en-US", { timeZone: "Africa/Tunis" });
  console.log("INFO : Tunis time", d.toString());
  var iso = new Date(d.toString()).toISOString();
  // console.log('cron date', iso.toString().split('T')[0]);

  var checkSql = `SELECT id
                            ,start_date
                            ,start_time
                            ,break_date
                            ,break_time
                            ,spent_totalTime
                            ,require_time
                            ,last_modified_date
                            FROM prod_step
                            WHERE start_date='${
                              iso.toString().split("T")[0]
                            }' AND auto_cal_time=1 AND auto_pause=0 AND (status IN (1) OR status IN(2));`;

  // var checkSql = `SELECT id
  //                         ,start_date
  //                         ,start_time
  //                         ,require_time
  //                         FROM prod_step
  //                         WHERE status=1 AND start_date='${iso.toString().split('T')[0]}';`;

  con(checkSql, (err, result) => {
    if (err !== "") {
      console.log("------------------------------");
      console.log(`\x1b[31;1mAUTO PROCESSING ERROR :\x1b[39m ${err}`);
      console.log("------------------------------");
    } else {
      // console.log(result[0].last_modified_date );

      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          const element = result[i];

          // let jsonDate = new Date(element.start_date);
          // let newDateString = jsonDate.toLocaleString().split(' ')[0] + ' ' + element.start_time;

          // let startDate = new Date(newDateString);
          let startDate = new Date(element.last_modified_date);
          var diffMs = new Date(d) - startDate;

          /**
           * calculate spent time to start date and now
           */
          let spentTime =
            Math.round(((diffMs % 86400000) % 3600000) / 60000) +
            Math.floor((diffMs % 86400000) / 3600000) * 60;
          console.log("spent time", spentTime);
          console.log(element.id);
          console.log(startDate.toString());
          console.log(d);

          /**
           * update spent_totalTime, efficiency, last_modified_date
           */
          let sql = `UPDATE prod_step SET spent_totalTime=${
            element.spent_totalTime + spentTime
          } 
                                                    , efficiency = (((${
                                                      element.spent_totalTime +
                                                      spentTime
                                                    } -(SELECT IFNULL(SUM(time),0) FROM prod_wastedTime WHERE prod_step_ref=${
            element.id
          })) * 100)/${element.require_time})
                                                    , last_modified_date=DATE_ADD('${
                                                      iso.split("T")[0]
                                                    } ${
            iso.split("T")[1].split("Z")[0]
          }', INTERVAL 1 HOUR) WHERE id=${element.id};`;

          // let sql = `UPDATE prod_step SET spent_totalTime=${spentTime} + (SELECT IFNULL(SUM(spendTime),0) FROM prod_step_details WHERE ref_prodstep=${element.id})
          //                                 , efficiency = (((${(spentTime)} + (SELECT IFNULL(SUM(spendTime),0) FROM prod_step_details WHERE ref_prodstep=${element.id})-(SELECT IFNULL(SUM(time),0) FROM prod_wastedTime WHERE prod_step_ref=${element.id})) * 100)/${element.require_time})
          //                                 , last_modified_date=DATE_ADD('${iso.split('T')[0]} ${iso.split('T')[1].split('Z')[0]}', INTERVAL 1 HOUR) WHERE id=${element.id};`

          // let sql = `UPDATE prod_step SET spent_totalTime=${spentTime} + (SELECT IFNULL(SUM(spendTime),0) FROM prod_step_details WHERE ref_prodstep=${element.id})
          // , efficiency = (((${(spentTime)} + (SELECT IFNULL(SUM(spendTime),0) FROM prod_step_details WHERE ref_prodstep=${element.id})-(SELECT IFNULL(SUM(time),0) FROM prod_wastedTime WHERE prod_step_ref=${element.id})) * 100)/${element.require_time})
          // , last_modified_date=DATE_ADD('${iso.split('T')[0]} ${iso.split('T')[1]}', INTERVAL 1 HOUR) WHERE id=${element.id};`

          Transac.con(sql, (err, result) => {
            if (err !== "") {
              console.log("------------------------------");
              console.log(`\x1b[31;1mAUTO PROCESSING ERROR :\x1b[39m ${err}`);
              console.log("------------------------------");
            } else {
              console.log("******************************************");
              console.log(
                `\x1b[32mAUTO PROCESS INFO :\x1b[39m AUTO EFFICIENCY CALCULATION`
              );
              console.log("******************************************\x1b[0m");
            }
          });
        }
      }
    }
  });
};

module.exports = job;
