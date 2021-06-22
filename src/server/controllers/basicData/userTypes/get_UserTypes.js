
const _ = require('lodash')
var { con } = require('../../../database/config/connection');
// neeed to configure
const requestData = (rawData, pageSize = 10, page = 1, sorted = 'asc', filtered = [], res) => {
    return new Promise((resolve, reject) => {
        // You can retrieve your data however you want, in this case, we will just use some local data.
        let filteredData = rawData;

        // You can use the filters in your request, but you are responsible for applying them.
        if (filtered.length) {
            filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
                return filteredSoFar.filter(row => {
                    return (row[nextFilter.id] + "").includes(nextFilter.value);
                });
            }, filteredData);
        }

        // console.log(filtered)
        // You can also use the sorting in your request, but again, you are responsible for applying it.
        const sortedData = _.orderBy(
            filteredData,
            sorted.map(sort => {
                return row => {
                    if (row[sort.id] === null || row[sort.id] === undefined) {
                        return -Infinity;
                    }
                    return typeof row[sort.id] === "string"
                        ? row[sort.id].toLowerCase()
                        : row[sort.id];
                };
            }),
            sorted.map(d => (d.desc ? "desc" : "asc"))
        );

        // You must return an object containing the rows of the current page, and optionally the total pages number.
        const resData = {
            rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
            pages: Math.ceil(filteredData.length / pageSize)
        };

        // Here we'll simulate a server response with 500ms of delay.
        setTimeout(() => resolve(res.status(200).json(resData)), 500);
    });
};
exports.get_UserTypes = async (req, res) => {
    const sql = `select * from userType ;`;
        
        // console.log(sql);
    const { pages, page, sort, filtered } = req.body;
    con(sql, (err, result) => {
        // console.log(result);
        // res.json(result);

        if (pages === undefined) {
            res.status(200).json(result)
        } else { requestData(result, pages, page, sort, filtered, res) }
    })
}
