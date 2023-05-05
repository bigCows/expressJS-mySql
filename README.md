## 新建goods_order表，限制id字段为主键且自增，status字段为50个以内的字符
- CREATE TABLE goods_order (id INT AUTO_INCREMENT PRIMARY KEY,status VARCHAR(50))

## 查询特定条件
- SELECT * FROM  `goods_list` WHERE `size` = 'L'

## 查询特定列
- SELECT size FROM goods_list

## 插入数据时，字段必须和表中字段对应，不能少，不能多，字段顺序也不能更改
- INSERT INTO `shopping`.`goods_list` (`id`, `name`, `color`, `size`, `sex`, `material`, `price`, `description`, `stock`，`saleNum`) VALUES (132546, '围巾', 'white', 'XL', '1', '纯棉', 90.00, '9', NULL, '20',NULL);

## 删除数据，不指定条件会删除所有数据
- DELETE FROM `goods_list` WHERE name = '背心'
- DELETE FROM `goods_list` 

## 修改数据
- UPDATE goods_list SET name='羊毛毛衣' WHERE name='毛衣'

## 模糊查询
- SELECT * FROM goods_list WHERE `name` LIKE '%衣%'

## 排序ORDER BY(默认正序，DESC反向排序)
- SELECT * FROM goods_list 	ORDER BY sex DESC

## 分页排序查询 
- SELECT * FROM goods_list 	ORDER BY price  LIMIT 5 OFFSET 0

## 记录表中数据总数(total为自定义字段)
- SELECT COUNT(*) total FROM goods_list

## 联表查询（笛卡尔查询，查询总条数为每个表的总数乘积）
- SELECT * FROM goods_list,goods_list_copy 

## 联表查询 当前表中id和复制表中ids相同的，将id name listid description 字段查出来,cur、cop、curdes、copdes分别为两张表的自定义别名
- SELECT cur.id,cur.name,cur.description curdes,cop.listid,cop.description copdes FROM goods_list cur JOIN goods_list_copy cop ON cur.id = cop.listid