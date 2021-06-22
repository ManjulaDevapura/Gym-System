-- MySQL dump 10.13  Distrib 8.0.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gym_management
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendence`
--

DROP TABLE IF EXISTS `attendence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendence` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `in` datetime DEFAULT NULL,
  `out` datetime DEFAULT NULL,
  `user_Id` int(11) DEFAULT NULL,
  `created` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attendence`
--

LOCK TABLES `attendence` WRITE;
/*!40000 ALTER TABLE `attendence` DISABLE KEYS */;
INSERT INTO `attendence` VALUES (1,'2019-12-17 08:00:00','2019-12-17 09:00:00',17,'2021-04-30'),(2,'2021-04-29 22:31:59','2020-06-29 22:31:59',17,'2021-04-30'),(3,'2020-06-29 22:31:59','2020-06-30 22:31:59',17,'2021-04-30'),(4,'2020-06-29 22:31:59','2020-06-29 22:31:59',1,'2019-12-29'),(5,'2020-06-29 22:31:59','2020-06-29 22:31:59',2,'2019-12-29'),(6,'2020-06-28 22:31:59','2020-06-28 22:31:59',3,'2019-12-28'),(7,'2020-06-28 22:31:59','2020-06-28 22:31:59',17,'2020-06-28'),(8,'2020-06-29 22:31:59','2020-06-29 22:31:59',4,'2019-12-29'),(9,'2020-06-29 22:31:59','2020-06-29 22:31:59',5,'2019-12-30'),(10,'2020-06-29 22:31:59','2020-06-29 22:31:59',6,'2019-12-30'),(11,'2020-06-29 22:31:59','2020-06-29 22:31:59',7,'2019-12-31'),(12,'2020-06-29 22:31:59','2020-06-29 22:31:59',8,'2019-12-31'),(13,'2020-06-29 22:31:59','2020-06-29 22:31:59',9,'2019-12-31'),(14,'2020-06-29 22:31:59','2020-06-29 22:31:59',10,'2019-12-27'),(15,'2020-06-29 22:31:59','2020-06-29 22:31:59',11,'2019-12-26'),(16,'2020-06-29 22:31:59','2020-06-29 22:31:59',12,'2019-12-25'),(17,'2020-06-29 22:31:59','2020-06-29 22:31:59',13,'2019-12-24'),(18,'2020-06-29 22:31:59','2020-06-29 22:31:59',14,'2021-04-30'),(19,'2020-06-29 22:31:59','2020-06-29 22:31:59',15,'2021-04-30'),(20,'2020-06-29 22:31:59','2020-06-29 22:31:59',16,'2021-04-30'),(21,'2020-06-29 22:31:59','2020-06-29 22:31:59',17,'2021-04-30');
/*!40000 ALTER TABLE `attendence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `body`
--

DROP TABLE IF EXISTS `body`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `body` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `height` double DEFAULT NULL,
  `weight` double DEFAULT NULL,
  `chest` double DEFAULT NULL,
  `hip` double DEFAULT NULL,
  `neck` double DEFAULT NULL,
  `waist` double DEFAULT NULL,
  `forearm` double DEFAULT NULL,
  `calf` double DEFAULT NULL,
  `photo` blob,
  `created` datetime NOT NULL,
  `history` int(11) DEFAULT '0',
  `user_Id` int(11) NOT NULL,
  `instructor_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `body`
--

LOCK TABLES `body` WRITE;
/*!40000 ALTER TABLE `body` DISABLE KEYS */;
INSERT INTO `body` VALUES (1,1,8,2,7,6,3,5,4,NULL,'2020-06-29 22:31:59',1,22,2),(2,11,88,22,77,66,33,55,44,NULL,'2020-06-30 02:09:03',1,24,2),(3,111,888,222,777,666,333,500,444,NULL,'2020-07-08 19:13:47',0,24,2),(4,1,8,2,7,6,3,5,4,NULL,'2021-04-06 23:29:10',0,25,-777142429),(5,1,9,2,8,7,3,6,4,NULL,'2021-04-07 23:04:20',0,31,-777142429),(6,4,4,3,6,7,2,8,1,NULL,'2021-04-07 23:24:56',0,32,2),(7,7,7,7,7,7,7,7,7,NULL,'2021-04-07 23:38:31',0,33,17),(8,1777,1111,77,111,11,777,1,7,NULL,'2021-04-26 01:00:33',0,34,2);
/*!40000 ALTER TABLE `body` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `card` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `card_Id` int(11) NOT NULL,
  `user_Id` int(11) NOT NULL,
  `created` datetime DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `card`
--

LOCK TABLES `card` WRITE;
/*!40000 ALTER TABLE `card` DISABLE KEYS */;
INSERT INTO `card` VALUES (1,123,1,'2021-03-04 14:01:08',0),(2,1234567,1,'2021-03-04 14:17:52',1);
/*!40000 ALTER TABLE `card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diet`
--

DROP TABLE IF EXISTS `diet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `diet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(250) DEFAULT NULL,
  `user_Id` int(11) NOT NULL,
  `instructor_Id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `history` int(11) DEFAULT '0',
  `breakfast` varchar(100) DEFAULT NULL,
  `lunch` varchar(100) DEFAULT NULL,
  `dinner` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diet`
--

LOCK TABLES `diet` WRITE;
/*!40000 ALTER TABLE `diet` DISABLE KEYS */;
INSERT INTO `diet` VALUES (1,'Test Man',24,2,'2020-06-29 22:31:59',1,'break','luncgh','dinner'),(2,'Test Dev',24,2,'2020-07-08 19:06:56',1,NULL,NULL,NULL),(3,'?',22,17,'2020-07-08 19:07:31',1,NULL,NULL,NULL),(4,'???',22,17,'2020-07-08 19:12:27',1,NULL,NULL,NULL),(5,'17',24,2,'2020-07-08 19:12:45',1,NULL,NULL,NULL),(6,'?????',22,17,'2020-10-25 11:35:44',1,NULL,NULL,NULL),(7,'!',22,17,'2020-10-25 11:41:36',1,NULL,NULL,NULL),(8,'',24,2,'2021-02-04 14:26:22',1,'Senitha kawa Roti','Senitha kawa Bath','Senitha kawa Pan'),(9,'Old',2,2,'2021-02-04 14:26:22',1,'Senitha kawa Roti','Senitha kawa Bath','Senitha kawa Pan'),(10,'New',2,2,'2021-02-04 14:26:22',0,'Senitha kawa Roti','Senitha kawa Bath','Senitha kawa Pan'),(11,'',22,17,'2021-04-23 23:59:36',1,'Senitha kawa Roti','Senitha kawa Bath','Senitha kawa Pan'),(12,'XXX',22,17,'2021-04-24 00:16:54',1,'Senitha kawa Roti 1','Senitha kawa Bath 2','Senitha kawa Pan 3'),(13,'X8X',22,17,'2021-04-24 00:20:43',0,'break','luncgh','dinner'),(14,'123',24,2,'2021-04-24 10:00:22',0,'break','luncgh','dinner');
/*!40000 ALTER TABLE `diet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `duepayments`
--

DROP TABLE IF EXISTS `duepayments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duepayments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_Id` int(11) DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duepayments`
--

LOCK TABLES `duepayments` WRITE;
/*!40000 ALTER TABLE `duepayments` DISABLE KEYS */;
INSERT INTO `duepayments` VALUES (56,3,'Pay the Salary to user for 2021-4-25'),(57,16,'Pay the Salary to user for 2021-4-25'),(58,20,'Pay the Salary to user for 2021-4-25'),(59,22,'Pay the Salary to user for 2021-4-25'),(60,24,'Pay the Salary to user for 2021-4-25'),(61,25,'Pay the Salary to user for 2021-4-25'),(62,27,'Pay the Salary to user for 2021-4-25'),(63,28,'Pay the Salary to user for 2021-4-25'),(64,31,'Pay the Salary to user for 2021-4-25'),(65,33,'Pay the Salary to user for 2021-4-25'),(66,32,'Pay the Salary to user for 2021-4-25');
/*!40000 ALTER TABLE `duepayments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `equipment`
--

DROP TABLE IF EXISTS `equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `equipment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(75) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `status` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `equipment`
--

LOCK TABLES `equipment` WRITE;
/*!40000 ALTER TABLE `equipment` DISABLE KEYS */;
INSERT INTO `equipment` VALUES (1,'Stick',15000,'15kg','2019-12-17 08:00:00',1),(2,'Ball',250,'Cricket',NULL,0);
/*!40000 ALTER TABLE `equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `excercise`
--

DROP TABLE IF EXISTS `excercise`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `excercise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(250) DEFAULT NULL,
  `user_Id` int(11) NOT NULL,
  `instructor_Id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `history` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `excercise`
--

LOCK TABLES `excercise` WRITE;
/*!40000 ALTER TABLE `excercise` DISABLE KEYS */;
INSERT INTO `excercise` VALUES (1,'Test Man Me',24,2,'2020-06-29 22:31:59',1),(2,'WoW',22,17,'2020-07-09 14:44:08',1),(3,'Nice',24,2,'2020-07-09 14:44:27',1),(4,'>>>',22,17,'2020-10-25 11:35:58',1),(5,'fhhfh',22,17,'2020-10-25 12:57:55',1),(6,'>>>',22,17,'2021-04-24 00:26:03',0),(7,'fhhfh',24,2,'2021-04-24 10:01:16',0);
/*!40000 ALTER TABLE `excercise` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `expences`
--

DROP TABLE IF EXISTS `expences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `expences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `value` int(11) DEFAULT '0',
  `payType_Id` int(11) DEFAULT NULL,
  `log_Id` int(11) DEFAULT NULL,
  `toUser_Id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expences`
--

LOCK TABLES `expences` WRITE;
/*!40000 ALTER TABLE `expences` DISABLE KEYS */;
INSERT INTO `expences` VALUES (1,NULL,50000,1,2,2,1),(2,'2021-03-16 01:22:53',300,3,2,1,2),(3,'2021-04-25 01:17:42',1000,3,1,0,10);
/*!40000 ALTER TABLE `expences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `income`
--

DROP TABLE IF EXISTS `income`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `income` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `payType_Id` int(11) DEFAULT NULL,
  `log_Id` int(11) DEFAULT NULL,
  `toUser_Id` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `income`
--

LOCK TABLES `income` WRITE;
/*!40000 ALTER TABLE `income` DISABLE KEYS */;
INSERT INTO `income` VALUES (1,'2021-04-25 01:44:25',500,3,2,1,3);
/*!40000 ALTER TABLE `income` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime DEFAULT NULL,
  `user_Id` int(11) NOT NULL,
  `type_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'admin','627661c621eab1b7b298abc47d1a250d','2020-06-10 17:17:17','2020-06-18 22:41:35',1,1),(2,'a','c4ca4238a0b923820dcc509a6f75849b','2020-06-10 17:17:17','2020-06-18 22:39:45',2,3),(3,'a2','c4ca4238a0b923820dcc509a6f75849b','2020-06-10 17:17:17','2020-06-11 17:17:17',1,1),(8,'asd','fa1b865d9280d4a488afa30fd60216e7','2020-06-20 01:08:20',NULL,3,1),(12,'123','202cb962ac59075b964b07152d234b70','2020-06-24 01:57:53','2021-04-06 23:35:40',17,3),(13,'1','c4ca4238a0b923820dcc509a6f75849b','2020-06-24 02:24:30',NULL,18,2),(16,'bad','202cb962ac59075b964b07152d234b70','2020-06-24 02:33:28','2021-04-06 23:44:04',20,1),(17,'1231V','679844d4841c1ee8259b175cdf1eca6c','2020-06-27 01:41:53',NULL,22,4),(18,'c','c4ca4238a0b923820dcc509a6f75849b','2020-06-29 22:31:59',NULL,24,4),(19,'123321V','f79a12c23dfe16a5d955c5b542760dc9','2021-04-06 23:29:10',NULL,25,4),(20,'123452V','922096db4153b3ed55f6a6076a56c39b','2021-04-06 23:33:52',NULL,26,3),(21,'12345','827ccb0eea8a706c4c34a16891f84e7b','2021-04-06 23:36:26',NULL,16,1),(22,'123432V','3b6ed58c56a016bf84d37c0a7771133b','2021-04-06 23:38:22',NULL,27,1),(23,'1234321V','2541d104afd966f674499c95d925f71b','2021-04-06 23:40:48',NULL,28,1),(24,'1235533V','239e53aafff2d5f7d3da7882250d7933','2021-04-06 23:52:02',NULL,29,3),(25,'345678911v','c4ca4238a0b923820dcc509a6f75849b','2021-04-06 23:53:28','2021-04-25 19:41:45',30,5),(26,'12311V','a23c01dc4c1b33cc1ecfe98259424b17','2021-04-07 23:04:20',NULL,31,4),(28,'1234543234V','32783d8ddf3d51adbc61d84b6048243f','2021-04-07 23:38:31',NULL,33,4),(33,'Asdsa','536a056b710e94b16169efd17a4a657b','2021-04-25 19:33:33',NULL,32,1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membership`
--

DROP TABLE IF EXISTS `membership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membership` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_Id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `amount` int(11) NOT NULL,
  `start` date NOT NULL,
  `end` date NOT NULL,
  `package_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membership`
--

LOCK TABLES `membership` WRITE;
/*!40000 ALTER TABLE `membership` DISABLE KEYS */;
INSERT INTO `membership` VALUES (1,24,'2020-06-29 22:31:59',25000,'2020-06-29','2021-05-01',1),(2,24,'2020-06-29 22:31:59',25000,'2021-05-29','2021-06-29',5),(3,30,'2020-06-29 22:31:59',25000,'2020-06-29','2021-06-30',2),(4,22,'2020-09-14 02:25:51',25000,'2020-09-14','2021-09-14',6),(6,22,'2020-09-21 01:11:49',25000,'2021-09-15','2022-09-15',3),(7,24,'2020-09-21 01:13:25',25000,'2021-07-01','2022-07-01',4),(8,17,'2021-04-06 23:45:44',25000,'2021-04-06','2022-04-06',1);
/*!40000 ALTER TABLE `membership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(275) NOT NULL,
  `subject` varchar(25) NOT NULL,
  `user_Id` int(11) NOT NULL,
  `status` int(11) DEFAULT '0',
  `created` datetime NOT NULL,
  `type` int(11) DEFAULT '4',
  `inst_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Added Today By Admin','New User',22,1,'2019-12-17 08:00:00',4,2),(2,'Added Today By Senitha','New User',22,1,'2019-12-17 08:00:00',1,2),(3,'Added Today By Admin','New User',22,1,'2019-12-17 08:00:00',2,2),(4,'Added Today By Admin','New User',22,1,'2019-12-17 08:00:00',3,2),(5,' New Member allocated to you 1234543234V - asada at 2021-04-07 23:38:31. \n    Please add Excersice schedule and Diet Plan to this member ','New Member',22,1,'2021-04-07 23:38:31',1,1),(6,' New Member allocated to you 12377v - Nandasiri at 2021-04-26 01:00:33. \n    Please add Excersice schedule and Diet Plan to this member ','New Member',34,0,'2021-04-26 01:00:33',1,2);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package`
--

DROP TABLE IF EXISTS `package`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL DEFAULT '0',
  `expired` varchar(45) DEFAULT '0',
  `period` int(4) NOT NULL DEFAULT '1',
  `type` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package`
--

LOCK TABLES `package` WRITE;
/*!40000 ALTER TABLE `package` DISABLE KEYS */;
INSERT INTO `package` VALUES (1,'Annualy',25000,'0',365,'Peak'),(2,'Monthly',2500,'0',30,NULL),(3,'Daily',350,'0',1,NULL),(4,'Hourly',200,'0',1,NULL),(5,'Quater',9000,'0',121,NULL),(6,'Test',999,'0',10,NULL),(7,'Testing',55,'0',1,'Peak');
/*!40000 ALTER TABLE `package` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay_type`
--

DROP TABLE IF EXISTS `pay_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reason` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay_type`
--

LOCK TABLES `pay_type` WRITE;
/*!40000 ALTER TABLE `pay_type` DISABLE KEYS */;
INSERT INTO `pay_type` VALUES (1,'salary'),(2,'undefined'),(3,'Water');
/*!40000 ALTER TABLE `pay_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salary`
--

DROP TABLE IF EXISTS `salary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `basic` int(11) DEFAULT '0',
  `allowance` int(11) DEFAULT '0',
  `deduction` int(11) DEFAULT '0',
  `total` int(11) DEFAULT '0',
  `created` date DEFAULT NULL,
  `user_Id` int(11) DEFAULT '0',
  `paidBy` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salary`
--

LOCK TABLES `salary` WRITE;
/*!40000 ALTER TABLE `salary` DISABLE KEYS */;
INSERT INTO `salary` VALUES (1,150000,30000,5000,175000,'2021-04-25',1,1),(2,200000,0,0,200000,'2021-04-24',3,1);
/*!40000 ALTER TABLE `salary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nic` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(150) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `dob` date NOT NULL,
  `sex` tinyint(1) NOT NULL DEFAULT '1',
  `created` datetime NOT NULL,
  `activity` tinyint(1) DEFAULT '0',
  `mobile` int(10) NOT NULL DEFAULT '777142431',
  `user_Id` int(11) DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `nic_UNIQUE` (`nic`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123V','Manjula Devapura','5C,Wellawaththa','manjuladevapura@gmail.com','1994-12-17',1,'2019-12-17 08:00:00',1,777142437,NULL,'2020-06-25 01:04:58'),(2,'1234V','Supun Srilal','5C,Wellawaththa','manjuladevapura@gmail.com','1994-12-17',1,'2019-12-17 08:00:00',1,777142431,NULL,NULL),(3,'12345V','Hiran Sasindika','5C,Wellawaththa','manjuladevapura@gmail.com','1994-12-17',1,'2019-12-17 08:00:00',1,777142431,NULL,NULL),(16,'12v1','test1','testA1','manjuladevapura@gmail.com','2002-06-17',1,'2020-06-20 15:39:21',1,700000001,NULL,NULL),(17,'1a','Ins','1add','manjuladevapura@gmail.com','2002-06-22',1,'2020-06-24 01:57:53',1,777142424,NULL,NULL),(18,'3nic','3nam','3add','manjuladevapura@gmail.com','2002-06-21',0,'2020-06-24 02:24:30',1,723456789,NULL,NULL),(20,'4nic','4name','4add','manjuladevapura@gmail.com','2002-06-01',1,'2020-06-24 02:33:28',1,701234567,NULL,NULL),(22,'1231V','Manjula','asad','manjuladevapura@gmail.com','2002-06-25',1,'2020-06-27 01:41:53',1,700000007,17,'2020-06-27 01:48:23'),(24,'20200629v','1 a','2 b','manjuladevapura@gmail.com','2002-06-28',1,'2020-06-29 22:31:59',1,702006291,2,NULL),(25,'123321V','Test','add','manjuladevapura@gmail.com','2003-03-07',1,'2021-04-06 23:29:10',1,700000001,2,NULL),(26,'123452V','ins 1','add','manjuladevapura@gmail.com','2003-04-04',1,'2021-04-06 23:33:52',1,700000004,NULL,NULL),(27,'123432V','adm','add','manjuladevapura@gmail.com','2003-04-04',1,'2021-04-06 23:38:22',1,700000008,NULL,NULL),(28,'1234321V','sup','ad','manjuladevapura@gmail.com','2003-04-03',1,'2021-04-06 23:40:48',1,700000011,NULL,NULL),(29,'1235533V','asasa','qqq','manjuladevapura@gmail.com','2003-04-03',1,'2021-04-06 23:52:02',1,700004004,NULL,NULL),(30,'3456789v','kamal','sdfghj','manjuladevapura@gmail.com','2003-04-01',1,'2021-04-06 23:53:28',1,700000000,NULL,NULL),(31,'12311V','nam','ads','manjuladevapura@gmail.com','2003-04-03',1,'2021-04-07 23:04:20',1,700000025,2,NULL),(32,'12323V','Nam','ads','manjuladevapura@gmail.com','2003-04-03',1,'2021-04-07 23:24:56',1,700000037,2,NULL),(33,'1234543234V','asada','asasas','manjuladevapura@gmail.com','2003-04-03',1,'2021-04-07 23:38:31',1,700000062,17,NULL),(34,'12377v','Nandasiri','colombo 6','nanda@gmail.com','2000-01-01',1,'2021-04-26 01:00:33',1,777142431,2,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertype`
--

DROP TABLE IF EXISTS `usertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertype`
--

LOCK TABLES `usertype` WRITE;
/*!40000 ALTER TABLE `usertype` DISABLE KEYS */;
INSERT INTO `usertype` VALUES (1,'Admin'),(2,'Operator'),(3,'Instructor'),(4,'Member'),(5,'Punch');
/*!40000 ALTER TABLE `usertype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-01  3:59:06
