const mysql = require('mysql2/promise')

const pool = mysql.createPool(
  {
    host: 'localhost',
    user:'root',
    password:'mxflzh..0',
    database:'mxf_db',
    waitForConnections: true,
    connectionLimit:1, // 连接池最大连接数
  }
)

// 从连接池中获取连接
const getConnection = async () => {
  try {
    const connection = await pool.getConnection()
    return connection
  } catch (error) {
    throw error
  }
}

/**
 * @method: query
 * @description: 执行sql语句
 * @param  sql sql语句
 * @param  params 查询参数
 * @returns 查询结果
 */
const query = async (sql, params) => {
  const connection = await getConnection()
  try {
    const [rows] = await connection.query(sql, params)
    return rows
  } catch (error) {
    throw error
  } finally {
    connection.release();
  }
}

module.exports = query