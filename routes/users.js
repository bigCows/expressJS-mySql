var express = require('express');
var router = express.Router();
const query  = require('../mysql')


// 快捷测试接口，无需遵循restful规范
router.get('/all', async function(req, res, next) {
  try {
    const data = await query('select * from goods_list')
    console.log(data);
    res.send(data);
  } catch (error) {
    throw error
  }
});

router.get('/add', async function(req, res, next) {
try {
  const data = await query(`INSERT INTO goods_list (id, name,customer_id) VALUES (?,?,?)`,[1385253,'棉被',1789453])
  console.log(data);
  res.send({message:'添加成功'});
} catch (error) {
  throw error
}
});

router.get('/update', async function(req, res, next) {
try {
  const id = '1385253'
  const data = await query(`update goods_list name = ?,sex = ?,size = ? where id = ?`,['棉被333','男','L',id])
  console.log(data);
  res.send({message:'更新成功'});
} catch (error) {
  throw error
}
});
router.get('/delete', async function(req, res, next) {
  try {
    const id = '1348533'
    const data = await query(`delete from goods_list where id = ?`,[id])
    console.log(data);
    // res.send({message:'删除成功'});
  res.send(data);
  } catch (error) {
    throw error
  }
});

module.exports = router;
