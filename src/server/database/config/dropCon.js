exports.drop = (connection) => {
    if (connection != null) {
        // console.log(connection)
        connection.end(err => {
            if (err) { console.log(`db error: ${err}`); connection.destroy(); }

            console.log(`db closed..!`);
        })
    }
}