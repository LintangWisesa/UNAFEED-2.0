-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: unafeed
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cart` (
  `cpid` int(11) NOT NULL,
  `cuid` int(11) NOT NULL,
  `cjumlah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (5,1,5),(3,1,1);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unafeed_users`
--

DROP TABLE IF EXISTS `unafeed_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unafeed_users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `unama` varchar(255) NOT NULL,
  `uemail` varchar(255) NOT NULL,
  `upassword` varchar(255) NOT NULL,
  `ufoto` varchar(255) DEFAULT 'http://localhost:1234/file/user.jpg',
  `ualamat` varchar(255) DEFAULT NULL,
  `ukabkota` varchar(255) DEFAULT NULL,
  `utelp` varchar(255) DEFAULT NULL,
  `utglreg` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `utglupdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `uemail` (`uemail`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unafeed_users`
--

LOCK TABLES `unafeed_users` WRITE;
/*!40000 ALTER TABLE `unafeed_users` DISABLE KEYS */;
INSERT INTO `unafeed_users` VALUES (1,'Lintang','lintangwisesa@ymail.com','12345','http://localhost:1234/file/flintang.jpg','Jl. Mawar 9 Griya Loka BSD','Tangerang Selatan','0123456789','2019-08-29 08:16:33','2019-10-10 03:26:39'),(2,'Caraka','raka@unafeed.id','12345','http://localhost:1234/file/user.jpg',NULL,NULL,NULL,'2019-08-29 08:34:10','2019-08-30 00:55:46'),(3,'Apiz','apiz@yogya.com','12345','http://localhost:1234/file/user.jpg',NULL,NULL,NULL,'2019-08-29 08:37:27','2019-08-29 08:37:27'),(4,'Jati','jati@unafeed.id','12345','http://localhost:1234/file/user.jpg',NULL,NULL,NULL,'2019-08-29 09:55:01','2019-08-29 09:55:01');
/*!40000 ALTER TABLE `unafeed_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unasense`
--

DROP TABLE IF EXISTS `unasense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unasense` (
  `iid` int(11) NOT NULL,
  `isuhuu` varchar(255) DEFAULT NULL,
  `isuhua` varchar(255) DEFAULT NULL,
  `ilembab` varchar(255) DEFAULT NULL,
  `ipressu` varchar(255) DEFAULT NULL,
  `ialti` varchar(255) DEFAULT NULL,
  `itangki` varchar(255) DEFAULT NULL,
  `itime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unasense`
--

LOCK TABLES `unasense` WRITE;
/*!40000 ALTER TABLE `unasense` DISABLE KEYS */;
INSERT INTO `unasense` VALUES (2611,'26','18.3','66','96974','368.2',NULL,'2019-08-31 01:28:23'),(2611,'26.5','18.3','66','96976','368.11',NULL,'2019-08-31 01:28:37'),(2611,'26.5','18.3','66','96976','367.94',NULL,'2019-08-31 01:28:51'),(2611,'26.4','18.3','66','96982','367.77',NULL,'2019-08-31 01:29:05'),(2611,'26.3','18.3','66','96975','368.11',NULL,'2019-08-31 01:29:19'),(2611,'26.3','18.3','66','96980','368.37',NULL,'2019-08-31 01:29:32'),(2611,'26.3','18.3','66','96982','367.77',NULL,'2019-08-31 01:29:46'),(2611,'26.4','18.3','66','96982','367.16',NULL,'2019-08-31 01:30:00'),(2611,'26.2','18.3','66','96983','367.85','52','2019-08-31 01:30:23'),(2611,'26.2','18.3','66','96989','367.68','52','2019-08-31 01:30:45'),(2611,'26.1','18.3','66','96986','367.77','52','2019-08-31 01:31:06'),(2611,'26','18.3','66','96982','368.11','52','2019-08-31 01:31:26'),(2611,'26.3','18.3','66','96987','367.77','52','2019-08-31 01:31:47'),(2611,'222.6','18.3','66','245684','-8138.49','52','2019-08-31 01:32:08'),(2611,'222.6','18.3','66','245684','-8138.49','52','2019-08-31 01:32:29'),(2611,'26.8','18.3','66','97011','365.61','52','2019-08-31 01:32:49'),(2611,'27','18.3','66','97009','365.87','52','2019-08-31 01:33:10'),(2611,'27','18.3','62','97008','365.7','52','2019-08-31 01:33:46'),(2611,'26.9','18.3','62','96989','367.59','52','2019-08-31 01:34:00'),(2611,'26.8','18.3','62','96989','366.65','52','2019-08-31 01:34:14'),(2611,'26.8','18.3','62','96998','366.82','52','2019-08-31 01:34:28'),(2611,'26.3','18.3','62','96993','366.82','52','2019-08-31 01:34:42'),(2611,'26.3','18.3','62','97003','366.56','52','2019-08-31 01:34:55'),(2611,'26.3','18.3','62','97006','366.04','52','2019-08-31 01:35:09'),(2611,'26.1','18.3','62','96993','366.47','52','2019-08-31 01:35:22'),(2611,'26','18.3','62','96983','367.34','52','2019-08-31 01:35:36'),(2611,'26.1','18.3','62','97002','366.56','52','2019-08-31 01:35:50'),(2611,'26','18.3','62','97007','365.87','52','2019-08-31 01:36:04'),(2611,'25.9','18.3','62','97006','365.87','52','2019-08-31 01:36:17'),(2611,'25.7','18.3','31','96557','404.32','52','2019-08-31 08:57:53'),(2611,'25.7','18.3','18','96551','404.49','52','2019-08-31 08:58:10'),(2611,'25.7','18.3','19','96559','404.58','52','2019-08-31 08:58:24'),(2611,'25.8','18.3','19','96558','404.93','52','2019-08-31 08:58:39'),(2611,'25.8','18.3','19','96555','404.58','52','2019-08-31 08:58:53'),(2611,'25.8','18.3','31','96561','404.67','52','2019-08-31 08:59:08'),(2611,'25.9','18.3','19','96549','405.1','52','2019-08-31 08:59:22'),(2611,'25.9','18.3','33','96553','405.19','52','2019-08-31 08:59:36'),(2611,'26','18.3','19','96560','404.32','52','2019-08-31 08:59:50'),(2611,'26.1','18.3','19','96555','404.49','52','2019-08-31 09:00:03'),(2611,'26.1','18.3','19','96548','404.84','52','2019-08-31 09:00:18'),(2611,'26.2','18.3','19','96556','405.01','52','2019-08-31 09:00:32'),(2611,'26.2','18.3','19','96555','404.58','52','2019-08-31 09:00:45'),(2611,'26.3','18.3','19','96554','405.45','52','2019-08-31 09:01:00'),(2611,'26.3','18.3','18','96557','404.49','52','2019-08-31 09:01:13'),(2611,'26.4','18.3','19','96555','404.75','52','2019-08-31 09:01:28'),(2611,'26.4','18.3','18','96552','405.36','52','2019-08-31 09:01:46'),(2611,'26.5','18.3','19','96552','405.1','52','2019-08-31 09:01:59'),(2611,'26.7','18.3','18','96557','404.32','52','2019-08-31 09:02:32'),(2611,'26.6','18.3','18','96559','404.23','52','2019-08-31 09:02:34'),(2611,'26.7','18.3','17','96558','404.41','52','2019-08-31 09:02:46'),(2611,'26.8','18.3','18','96554','404.93','52','2019-08-31 09:03:00'),(2611,'26.8','18.3','18','96554','405.01','52','2019-08-31 09:03:14'),(2611,'26.9','18.3','18','96558','404.49','52','2019-08-31 09:03:31'),(2611,'27','18.3','17','96556','405.1','52','2019-08-31 09:03:46'),(2611,'27','18.3','18','96554','404.75','52','2019-08-31 09:04:02'),(2611,'27.1','18.3','18','96553','404.58','52','2019-08-31 09:04:16'),(2611,'27.1','18.3','17','96562','404.93','52','2019-08-31 09:04:30'),(2611,'27.4','18.3','18','96559','404.49','52','2019-08-31 09:07:09'),(2611,'27.4','18.3','18','96561','403.89','52','2019-08-31 09:07:27'),(2611,'27.4','18.3','18','96558','404.84','52','2019-08-31 09:07:42'),(2611,'27.5','18.3','19','96558','404.93','52','2019-08-31 09:07:55'),(2611,'27.5','18.3','19','96560','404.58','52','2019-08-31 09:08:09'),(2611,'27.5','18.3','19','96558','404.49','52','2019-08-31 09:08:24'),(2611,'27.6','18.3','19','96557','404.49','52','2019-08-31 09:08:41'),(2611,'27.6','18.3','19','96560','404.58','52','2019-08-31 09:08:56'),(2611,'27.7','18.3','19','96558','405.19','52','2019-08-31 09:09:10'),(2611,'27.8','18.3','19','96560','404.49','52','2019-08-31 09:09:23'),(2611,'27.8','18.3','19','96559','404.58','52','2019-08-31 09:09:41'),(2611,'27.9','18.3','19','96559','404.49','52','2019-08-31 09:09:54'),(2611,'27.9','18.3','19','96553','404.84','52','2019-08-31 09:10:08'),(2611,'28','18.3','19','96560','404.58','52','2019-08-31 09:10:22'),(2611,'28','18.3','19','96560','404.23','52','2019-08-31 09:10:36'),(2611,'28.1','18.3','19','96561','404.49','52','2019-08-31 09:10:50'),(2611,'28.1','18.3','19','96560','404.67','52','2019-08-31 09:11:05'),(2611,'28.2','18.3','19','96560','404.75','52','2019-08-31 09:11:19'),(2611,'28.2','18.3','19','96566','404.75','52','2019-08-31 09:11:33'),(2611,'28.3','18.3','19','96557','404.67','52','2019-08-31 09:11:47'),(2611,'28.3','18.3','19','96560','404.49','52','2019-08-31 09:12:01'),(2611,'28.4','18.3','19','96556','404.49','52','2019-08-31 09:12:14'),(2611,'28.4','18.3','19','96557','404.67','52','2019-08-31 09:12:28'),(2611,'28.4','18.3','19','96551','404.93','52','2019-08-31 09:12:42'),(2611,'28.5','18.3','18','96561','405.27','52','2019-08-31 09:12:56'),(2611,'28.6','18.3','30','96554','404.49','52','2019-08-31 09:13:10'),(2611,'28.6','18.3','18','96558','404.67','52','2019-08-31 09:13:24'),(2611,'28.6','18.3','24','96557','405.01','52','2019-08-31 09:13:38'),(2611,'28.7','18.3','19','96552','404.93','52','2019-08-31 09:13:53'),(2611,'28.7','18.3','18','96557','404.67','52','2019-08-31 09:14:08'),(2611,'28.8','18.3','18','96559','404.93','52','2019-08-31 09:14:26'),(2611,'28.8','18.3','30','96559','404.49','52','2019-08-31 09:14:41'),(2611,'28.9','18.3','18','96557','405.19','52','2019-08-31 09:14:55'),(2611,'28.9','18.3','18','96558','404.84','52','2019-08-31 09:15:09'),(2611,'29','18.3','18','96565','404.41','52','2019-08-31 09:15:23'),(2611,'29','18.3','25','96560','404.67','52','2019-08-31 09:15:37'),(2611,'29.1','18.3','28','96557','404.49','52','2019-08-31 09:15:51'),(2611,'29.1','18.3','18','96557','404.67','52','2019-08-31 09:16:05'),(2611,'29.1','18.3','18','96560','404.84','52','2019-08-31 09:16:19'),(2611,'29.1','18.3','18','96561','404.58','52','2019-08-31 09:16:33'),(2611,'29.2','18.3','22','96560','404.23','52','2019-08-31 09:16:47'),(2611,'29.2','18.3','18','96560','404.58','52','2019-08-31 09:17:00'),(2611,'29.2','18.3','18','96562','403.97','52','2019-08-31 09:17:14'),(2611,'29.3','18.3','18','96560','405.1','52','2019-08-31 09:17:28'),(2611,'29.3','18.3','18','96564','404.23','52','2019-08-31 09:17:41'),(2611,'29.3','18.3','18','96562','403.97','52','2019-08-31 09:17:56'),(2611,'29.4','18.3','18','96566','404.41','52','2019-08-31 09:18:09'),(2611,'29.4','18.3','18','96567','404.23','52','2019-08-31 09:18:23'),(2611,'29.4','18.3','18','96560','404.41','52','2019-08-31 09:18:37'),(2611,'29.4','18.3','17','96560','404.32','52','2019-08-31 09:18:51'),(2611,'29.5','18.3','17','96561','404.41','52','2019-08-31 09:19:05'),(2611,'29.5','18.3','18','96560','403.8','52','2019-08-31 09:19:19'),(2611,'29.5','18.3','17','96569','404.49','52','2019-08-31 09:19:32'),(2611,'29.6','18.3','17','96565','404.32','52','2019-08-31 09:19:46'),(2611,'29.6','18.3','17','96562','403.54','52','2019-08-31 09:20:00'),(2611,'29.6','18.3','29','96560','404.75','52','2019-08-31 09:20:13'),(2611,'29.6','18.3','18','96564','404.49','52','2019-08-31 09:20:27'),(2611,'29.7','18.3','18','96571','403.63','52','2019-08-31 09:20:41'),(2611,'29.7','18.3','18','96570','403.97','52','2019-08-31 09:20:54'),(2611,'29.7','18.3','18','96567','403.8','52','2019-08-31 09:21:08'),(2611,'29.7','18.3','18','96562','404.75','52','2019-08-31 09:21:22'),(2611,'29.8','18.3','18','96565','403.37','52','2019-08-31 09:21:35'),(2611,'29.8','18.3','18','96571','403.97','52','2019-08-31 09:21:49'),(2611,'29.8','18.3','18','96566','404.23','52','2019-08-31 09:22:03'),(2611,'29.8','18.3','18','96567','404.15','52','2019-08-31 09:22:17'),(2611,'29.9','18.3','18','96563','403.8','52','2019-08-31 09:22:31'),(2611,'29.9','18.3','18','96573','404.06','52','2019-08-31 09:22:45'),(2611,'29.9','18.3','18','96571','403.89','52','2019-08-31 09:22:58'),(2611,'29.9','18.3','18','96562','403.97','52','2019-08-31 09:23:12'),(2611,'30','18.3','18','96567','403.45','52','2019-08-31 09:23:40'),(2611,'30','18.3','18','96572','403.8','52','2019-08-31 09:23:53');
/*!40000 ALTER TABLE `unasense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unastore`
--

DROP TABLE IF EXISTS `unastore`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unastore` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `pnama` varchar(255) DEFAULT NULL,
  `pharga` int(11) DEFAULT NULL,
  `psatuan` varchar(255) DEFAULT NULL,
  `pfoto` varchar(255) DEFAULT NULL,
  `prating` int(11) DEFAULT NULL,
  `pdeskripsi` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unastore`
--

LOCK TABLES `unastore` WRITE;
/*!40000 ALTER TABLE `unastore` DISABLE KEYS */;
INSERT INTO `unastore` VALUES (1,'Bibit Sidat',125000,'kg','http://localhost:1234/file/store1.png',5,'Bibit sidat berkualitas asli peranakan Unagi dari Jepang.'),(2,'Sidat',200000,'kg','http://localhost:1234/file/store2.png',5,'Sidat/Unagi asli import dari Jepang, dibudidayakan peternak Yogyakarta dengan pakan berkualitas & habitat asri.'),(3,'Pakan Sidat',50000,'kg','http://localhost:1234/file/store3.png',5,'Pakan sidat bergizi tinggi diolah dengan bahan baku pilihan. Mengandung protein 40%, lemak 5%, serat kasar 2%, abu 13%, kadar air 11% & kestabilan dalam air mencapai 90%.'),(4,'Kolam Fiber',3000000,'buah','http://localhost:1234/file/store4.png',5,'Kolam berbahan fiber glass dengan ukuran 200cm x 200cm x 70cm, ketebalan 5-8mm, warna biru & dilengkapi dengan lubang pembuangan.'),(5,'Una Feeder',1500000,'unit','http://localhost:1234/file/store5.png',5,'Una Feeder: alat pemberi makan (feeder) sidat otomatis berbasis mikrokontroller & terintegrasi teknologi IoT. User dapat memonitor kondisi kolam yang terdapat Una Feeder melalui layanan online Una Sense.');
/*!40000 ALTER TABLE `unastore` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unaxdk`
--

DROP TABLE IF EXISTS `unaxdk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `unaxdk` (
  `xid` int(11) NOT NULL,
  `xsuhu` varchar(255) DEFAULT NULL,
  `xdo` varchar(255) DEFAULT NULL,
  `xph` varchar(255) DEFAULT NULL,
  `xamonia` varchar(255) DEFAULT NULL,
  `xtds` varchar(255) DEFAULT NULL,
  `xtangki` varchar(255) DEFAULT NULL,
  `xtime` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unaxdk`
--

LOCK TABLES `unaxdk` WRITE;
/*!40000 ALTER TABLE `unaxdk` DISABLE KEYS */;
INSERT INTO `unaxdk` VALUES (2611,'25.2','6','7','0.02','250','48','2019-10-16 13:41:15'),(2611,'25.2','6','7','0.02','250','48','2019-10-16 13:41:15'),(2611,'25','5.9','7.1','0.022','253','47','2019-10-16 13:41:15'),(2611,'25.4','6.2','7.3','0.021','252','47','2019-10-16 13:41:15'),(2611,'25.1','6.1','7','0.025','257','49','2019-10-16 13:41:15'),(2611,'25.4','6.5','7.3','0.019','253.2','46','2019-10-16 13:57:13'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:10:43'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:11:47'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:14:07'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:15:12'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:32:58'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:34:08'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:34:42'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:35:27'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:35:36'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:42:59'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:44:28'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:44:31'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:44:57'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:44:59'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:51:10'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:51:27'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:53:00'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:53:16'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:53:28'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 04:56:49'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:02:26'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:02:31'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:10:29'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:10:33'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:12:23'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:12:34'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:13:14'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:15:19'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:15:22'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:16:01'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:16:48'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:46:08'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:51:38'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:51:40'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 05:51:41'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 06:05:49'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 06:05:54'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 06:07:43'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 06:29:15'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 09:20:25'),(2611,'22.3','6.2','7.3','0.021','252.9','44','2019-10-17 09:20:32');
/*!40000 ALTER TABLE `unaxdk` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-26  9:31:01
