# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.16)
# Database: baidu
# Generation Time: 2017-08-25 09:06:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table baidunews
# ------------------------------------------------------------

DROP TABLE IF EXISTS `baidunews`;

CREATE TABLE `baidunews` (
  `newsid` int(20) NOT NULL AUTO_INCREMENT,
  `newstitle` varchar(200) NOT NULL DEFAULT '',
  `newsimg` varchar(200) NOT NULL,
  `newstype` varchar(200) NOT NULL,
  `newstime` date NOT NULL,
  PRIMARY KEY (`newsid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='百度新闻';

LOCK TABLES `baidunews` WRITE;
/*!40000 ALTER TABLE `baidunews` DISABLE KEYS */;

INSERT INTO `baidunews` (`newsid`, `newstitle`, `newsimg`, `newstype`, `newstime`)
VALUES
	(16,'美食222','img/15.jpg','精选','2017-08-19'),
	(17,'美食','img/3.jpg','精选','2017-06-08'),
	(19,'旅游','img/16.jpg','百家','0000-00-00'),
	(20,'旅游','img/4.jpg','本地','2017-06-14'),
	(21,'做饭','img/9.jpg','本地','2017-06-09'),
	(25,'读书','img/4.jpg','本地','2017-06-09'),
	(27,'画画','img/2.jpg','本地','2017-06-08'),
	(28,'去西藏','img/12.jpg','百家','2017-06-15'),
	(29,'成都','img/12.jpg','本地','2017-06-21'),
	(30,'重庆','img/9.jpg','本地','2017-06-15'),
	(31,'音乐','img/12.jpg','百家','2017-06-08'),
	(32,'精选','img/10.jpg','精选','2017-06-15'),
	(33,'精选3','img/16.jpg','精选','2017-06-14'),
	(34,'精选2','img/15.jpg','精选','2017-06-14'),
	(35,'百家','img/22.jpg','百家','2017-06-14'),
	(36,'百家2','img/19.jpg','百家','2017-06-14'),
	(37,'百家','img/18.jpg','百家','2017-06-14'),
	(38,'本地','img/11.jpg','本地','2017-06-14'),
	(39,'本地','img/10.jpg','本地','2017-06-14'),
	(41,'百家','img/5.jpg','百家','2017-06-14'),
	(42,'百家','img/7.jpg','百家','2017-06-22'),
	(43,'本地','img/23.jpg','本地','2017-06-07'),
	(44,'本地','img/9.jpg','本地','2017-06-16'),
	(46,'本地','img/9.jpg','本地','2017-06-09'),
	(47,'精选4','img/22.jpg','精选','2017-06-15'),
	(48,'精选5','img/22.jpg','精选','2017-06-15'),
	(49,'精选6','img/23.jpg','精选','2017-06-15'),
	(50,'精选7','img/24.jpg','精选','2017-06-15'),
	(51,'本地4','img/25.jpg','本地','2017-06-15'),
	(52,'本地5','img/26.jpg','本地','2017-06-15'),
	(53,'本地6','img/27.jpg','本地','2017-06-15'),
	(54,'百家4','img/3.jpg','百家','2017-06-15'),
	(55,'百家4','img/4.jpg','百家','2017-06-15'),
	(56,'百家5','img/5.jpg','百家','2017-06-15'),
	(57,'百家6','img/6.jpg','百家','2017-06-15'),
	(58,'百家7','img/7.jpg','百家','2017-06-15'),
	(61,'&lt;script&gt;alert(document.cookie)&lt;/script&gt;','a','精选','2017-08-11'),
	(62,'321312dasdasd','31231','精选','2017-08-16'),
	(63,'美食123','img/12.jpg	','精选','2017-08-12'),
	(64,'百度123','img/3.jpg	','本地','2017-08-18'),
	(65,'你好','123','精选','2017-08-03'),
	(66,'万一','12313','精选','2017-08-12'),
	(67,'你好','312312','精选','2017-08-11'),
	(68,'312312','312312','精选','2017-08-18'),
	(69,'你好','img/15.jpg','精选','2017-08-18'),
	(70,'万一万一呢','123	','精选','2017-08-17'),
	(71,'万一万一','231','精选','2017-08-11'),
	(72,'万一万一','231','精选','2017-08-11');

/*!40000 ALTER TABLE `baidunews` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
