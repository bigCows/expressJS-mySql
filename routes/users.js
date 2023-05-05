var express = require('express');
var router = express.Router();
const query  = require('../mysql')

/* GET users listing. */
router.get('/all', async function(req, res, next) {
  const data = await query('select * from goods_list')
  console.log(data);
  res.send(data);
});

router.get('/add', async function(req, res, next) {
  const data = await query(`INSERT INTO goods_list (id, name,customer_id) VALUES (?,?,?)`,[1385253,'棉被',1789453])
  console.log(data);
  res.send({message:'添加成功'});
});

router.get('/update', async function(req, res, next) {
  const id = '1385253'
  const data = await query(`update goods_list set name = ?,sex = ?,size = ? where id = ?`,['棉被222','男','L',id])
  console.log(data);
  res.send({message:'更新成功'});
});
router.get('/delete', async function(req, res, next) {
  const id = '1348533'
  const data = await query(`delete from goods_list where id = ?`,[id])
  console.log(data);
  // res.send({message:'删除成功'});
  res.send(data);
});

module.exports = router;
