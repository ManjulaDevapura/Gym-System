
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
exports.get_Members = async (req, res) => {
    const sql = `select 
    user.*,
	(select CONCAT(id,"- ",name) from user as u2 where u2.id = user.user_Id) as instructor
        from user 
            left join login on user.id = login.user_Id
                where login.type_Id = 4;`;
        
        
    const { pages, page, sort, filtered } = req.body;
    con(sql, (err, result) => {
        

        if (pages === undefined) {
            res.status(200).json(result)
        } else { requestData(result, pages, page, sort, filtered, res) }
    })
}





    
// var sortingSql = '';
// if (sort.length > 0) {
//     sortingSql = 'ORDER BY '
// } else if (sort.length === 0) {
//     sortingSql = 'ORDER BY user.id';
// }
// for (var a = 0; a < sort.length; a++) {
//     let sortingType = ' ASC';
//     if (sort[a].desc === true) {
//         sortingType = ' DESC';
//     }
//     sortingSql = sortingSql + sort[a].id + sortingType
//     if (sort.length > (a + 1)) {
//         sortingSql = sortingSql + ', '
//     }
// }

// // search
// var searchingSql = '';
// if (filtered.length > 0) {
//     searchingSql = 'WHERE login.type_Id = 4 AND '
// }else{
//     searchingSql = 'where login.type_Id = 4 '
// }

// for (var x = 0; x < filtered.length; x++) {
//     searchingSql = searchingSql + filtered[x].id + " LIKE '" + filtered[x].value + "%'";
//     if (filtered.length > (x + 1)) {
//         searchingSql = searchingSql + 'AND '
//     }
// }

// const sqlGet = `select 
// count(*),
// user.*,
// (select CONCAT(id,"- ",name) from user as u2 where u2.id = user.user_Id) as instructor
//     from user 
//         left join login on user.id = login.user_Id                    
//                 ${searchingSql}
//                 ${sortingSql}
//                 ;`;

                
// con(sqlGet, (errGet, resultGet) => {
//     if (errGet !== '') {
//         res.status(400).json(errGet.code);
//     } else {
//         let result_json = JSON.stringify(resultGet)
//         let result_json13 = result_json.slice(13)
//         let noOfRecords = result_json13.slice(0, -2)

//         let reminderOfRows = noOfRecords % pages;
//         let noOfPages = parseInt(noOfRecords / pages) + (reminderOfRows > 0 ? 1 : 0)

//         let rowNo = '';
//         page > 0 ? (rowNo = (pages * page) + ',') : rowNo = ''

//         var sql = `select 
//         user.*,
//         (select CONCAT(id,"- ",name) from user as u2 where u2.id = user.user_Id) as instructor
//             from user 
//                 left join login on user.id = login.user_Id
//                     ${searchingSql}
//                     ${sortingSql}
//                     LIMIT ${rowNo}${pages}
//                     ;`;
//         con(sql, (err, result) => {
//             const resData = {
//                 rows: result,
//                 pages: noOfPages
//             };
//             res.status(200).json(resData)

//         })
//     }
// })
