-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 30, 2024 at 07:00 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `donor_darah`
--

-- --------------------------------------------------------

--
-- Table structure for table `didonor`
--

CREATE TABLE `didonor` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `butuh_golongan_darah` enum('A','B','O','AB') NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `darah_sudah_di_terima` enum('belum','sudah') NOT NULL,
  `uang_yang_diterima` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `didonor`
--

INSERT INTO `didonor` (`id`, `nama`, `password`, `butuh_golongan_darah`, `lokasi`, `darah_sudah_di_terima`, `uang_yang_diterima`) VALUES
(1, 'raffa', 'raffa', 'AB', 'bekasi', 'sudah', 0);

-- --------------------------------------------------------

--
-- Table structure for table `pendonor`
--

CREATE TABLE `pendonor` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `golongan_darah` enum('A','B','O','AB') NOT NULL,
  `lokasi` varchar(255) NOT NULL,
  `donor_darah_berapa_kali` int(11) NOT NULL,
  `donor_uang_berapa` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pendonor`
--

INSERT INTO `pendonor` (`id`, `name`, `password`, `golongan_darah`, `lokasi`, `donor_darah_berapa_kali`, `donor_uang_berapa`) VALUES
(1, 'raffa', 'raffa', 'AB', 'bekasi', 0, 0),
(2, 'akmal', 'akmal', 'O', 'jakarta', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `didonor`
--
ALTER TABLE `didonor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pendonor`
--
ALTER TABLE `pendonor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `didonor`
--
ALTER TABLE `didonor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pendonor`
--
ALTER TABLE `pendonor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
