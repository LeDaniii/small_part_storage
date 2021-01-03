-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2021 at 10:17 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `small_part_storage`
--
CREATE DATABASE IF NOT EXISTS `small_part_storage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `small_part_storage`;

-- --------------------------------------------------------

--
-- Table structure for table `small_part`
--

CREATE TABLE `small_part` (
  `id` int(11) NOT NULL,
  `hall` int(11) DEFAULT NULL,
  `storage_row` int(11) DEFAULT NULL,
  `storage_column` int(11) DEFAULT NULL,
  `machine_part_sort` varchar(100) DEFAULT NULL,
  `machinepart_part_size` varchar(50) DEFAULT NULL,
  `empty_status` tinyint(1) DEFAULT NULL,
  `empty_date` date DEFAULT NULL,
  `refill_date` date DEFAULT NULL,
  `catchphrases` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `small_part`
--
ALTER TABLE `small_part`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `small_part`
--
ALTER TABLE `small_part`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
