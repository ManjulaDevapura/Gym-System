const _ = require("lodash");
var { con } = require("../../../database/config/connection");
// neeed to configure
const requestData = (
  rawData,
  pageSize = 10,
  page = 1,
  sorted = "asc",
  filtered = [],
  res
) => {
  return new Promise((resolve, reject) => {
    // You can retrieve your data however you want, in this case, we will just use some local data.
    let filteredData = rawData;

    // You can use the filters in your request, but you are responsible for applying them.
    if (filtered.length) {
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter((row) => {
          return (row[nextFilter.id] + "").includes(nextFilter.value);
        });
      }, filteredData);
    }

    // You can also use the sorting in your request, but again, you are responsible for applying it.
    const sortedData = _.orderBy(
      filteredData,
      sorted.map((sort) => {
        return (row) => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map((d) => (d.desc ? "desc" : "asc"))
    );

    // You must return an object containing the rows of the current page, and optionally the total pages number.
    const resData = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize),
    };

    // Here we'll simulate a server response with 500ms of delay.
    setTimeout(() => resolve(res.status(200).json(resData)), 500);
  });
};

exports.get_Messages = async (req, res) => {
  const { pages, page, sort, filtered, inst_Id } = req.body;
  if (filtered.length > 0) {
    for (var a = 0; a < filtered.length; a++) {
      // console.log(filtered[a]);
      // console.log(filtered[a].id);
      // console.log(filtered[a].value);
      if (filtered[a].id === "type") {
        if (filtered[a].value === "H" || filtered[a].value === "High") {
          filtered[a].value = 1;
        } else if (filtered[a].value === "U" ||filtered[a].value === "Urgent") {
          filtered[a].value = 2;
        } else if (filtered[a].value === "N" ||filtered[a].value === "Normal") {
          filtered[a].value = 3;
        } else if (filtered[a].value === "L" ||filtered[a].value === "Low") {
          filtered[a].value = 4;
        }
      }
    }
  }
  const sql = `SELECT 
                	messages.*, 
                	user.name, 
                    user.mobile,
                    concat(messages.user_Id," - ",user.name) as userData,
                    DATE_FORMAT(messages.created,  "%Y-%m-%d") as created
                		FROM gym_management.messages
                left join user 
                    on user.id = messages.user_Id
                        where inst_Id = ${inst_Id}
                        order by messages.status ASC, messages.type ASC, messages.created ASC
                    ;`;

  con(sql, (err, result) => {
    if (pages === undefined) {
      res.status(200).json(result);
    } else {
      requestData(result, pages, page, sort, filtered, res);
    }
  });
};
