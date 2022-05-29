-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2022 at 01:22 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `transport`
--

-- --------------------------------------------------------

--
-- Table structure for table `addemployeetobus`
--

CREATE TABLE `addemployeetobus` (
  `id` int(11) NOT NULL,
  `transporttype` varchar(200) NOT NULL,
  `shift` varchar(200) NOT NULL,
  `route` varchar(200) NOT NULL,
  `epfnumber` varchar(200) NOT NULL,
  `name` varchar(250) NOT NULL,
  `pickuppoint` varchar(250) NOT NULL,
  `pickuptime` varchar(200) NOT NULL,
  `droptime` varchar(200) NOT NULL,
  `vanroute` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addemployeetobus`
--

INSERT INTO `addemployeetobus` (`id`, `transporttype`, `shift`, `route`, `epfnumber`, `name`, `pickuppoint`, `pickuptime`, `droptime`, `vanroute`) VALUES
(12, 'bus', 'shiftA', 'rathnapura-a', '1254', 'Nadun Yalegama', 'Avissawella', '7.20am', '6.00pm', 'awissawella'),
(13, 'van', 'shiftB', 'rathnapura-b', '12546', 'Nadun Yalegama', 'Avissawella', '7.20am', '7.15pm', 'awissawella'),
(14, 'van', 'shiftB', 'rathnapura-a', '1254', 'Namal', 'Gampola', '8.15am', '15.15pm', 'awissawella'),
(15, 'bus', 'shiftB', 'rathnapura-b', '4569', 'Dhananjay Bandara', 'Avissawella', '08.30am', '18.20pm', 'Rathnapura'),
(16, 'bus', 'shiftA', 'rathnapura-a', '1245', 'Bandara Yalegama', 'Rathnapura', '06.45am', '18.20pm', 'Rathnapura'),
(17, 'bus', 'shiftB', 'rathnapura-a', '12546', 'Nadun', 'Main Road', '12.16am', '13.25pm', 'Rathnapura'),
(18, 'van', 'shiftC', 'rathnapura-b', '6532', 'Bandara', 'Foddcity', '12.50pm', '16.52pm', 'Rathnapura'),
(19, 'bus', 'shiftA', 'rathnapura-a', '1245', 'nadun', 'avissawella', '08.30am', '17.30pm', 'awissawella'),
(20, '', '', '', '', '', '', '', '', ''),
(21, '', '', '', '', '', '', '', '', ''),
(22, 'bus', '12Hours', 'rathnapura-a', '12456', 'nadun', '07.30am', '13.30pm', '18.45pm', 'Rathnapura'),
(23, 'bus', 'shiftA', 'USA', '1254', 'Nadun Yalegama', 'Awissawella', '07.50am', '07.25pm', 'awissawella'),
(24, '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `addemployeetovan`
--

CREATE TABLE `addemployeetovan` (
  `id` int(200) NOT NULL,
  `transporttype` varchar(200) NOT NULL,
  `shift` varchar(200) NOT NULL,
  `transportroute` varchar(250) NOT NULL,
  `epfnumber` varchar(200) NOT NULL,
  `name` varchar(250) NOT NULL,
  `pickuppoint` varchar(250) NOT NULL,
  `pickuptime` varchar(200) NOT NULL,
  `droptime` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addemployeetovan`
--

INSERT INTO `addemployeetovan` (`id`, `transporttype`, `shift`, `transportroute`, `epfnumber`, `name`, `pickuppoint`, `pickuptime`, `droptime`) VALUES
(13, '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `addvehicle`
--

CREATE TABLE `addvehicle` (
  `id` int(100) NOT NULL,
  `shift` varchar(100) NOT NULL,
  `vehicletype` varchar(100) NOT NULL,
  `vehicleroute` varchar(200) NOT NULL,
  `drivername` varchar(200) NOT NULL,
  `drivercontactnumber` int(20) NOT NULL,
  `driverlicensenumber` varchar(20) NOT NULL,
  `vehiclenumber` varchar(20) NOT NULL,
  `kmperoneroute` varchar(100) NOT NULL,
  `capacity` varchar(1000) NOT NULL,
  `startingtimemorning` varchar(20) NOT NULL,
  `startingtimeday` varchar(20) NOT NULL,
  `endtimemorning` varchar(20) NOT NULL,
  `endtimeday` varchar(20) NOT NULL,
  `firstmemerpickuptimemorning` varchar(20) NOT NULL,
  `firstmemerpickuptimeday` varchar(20) NOT NULL,
  `lastmemerdroptime` varchar(20) NOT NULL,
  `vehicleleaderonename` varchar(100) NOT NULL,
  `vehicleleaderonecontactnumber` int(20) NOT NULL,
  `vehicleleadertwoname` int(100) NOT NULL,
  `vehicleleadertwocontactnumber` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `addvehicle`
--

INSERT INTO `addvehicle` (`id`, `shift`, `vehicletype`, `vehicleroute`, `drivername`, `drivercontactnumber`, `driverlicensenumber`, `vehiclenumber`, `kmperoneroute`, `capacity`, `startingtimemorning`, `startingtimeday`, `endtimemorning`, `endtimeday`, `firstmemerpickuptimemorning`, `firstmemerpickuptimeday`, `lastmemerdroptime`, `vehicleleaderonename`, `vehicleleaderonecontactnumber`, `vehicleleadertwoname`, `vehicleleadertwocontactnumber`) VALUES
(27, 'shiftA', 'bus', 'Rathnapura', 'namal', 119, '454sk', '45466s', '45', '52', '5.20am', '12.00pm', '8.00am', '7.00pm', '4.20am', '17.00pm', '5.25pm', 'namal', 199, 0, 200),
(28, 'shiftA', 'bus', 'Avissawella', 'Nadun', 778685243, 'kjdfhoahdofhal545', 'd;ljfa;64165143', '52', '52', '545212am', '65464564am', '54445456am', '65431pm', '5465456pm', '54', '', '', 0, 0, 0),
(29, 'shiftA', 'bus', 'Avissawella', 'Nadun', 778685243, 'kjdfhoahdofhal545', 'd;ljfa;64165143', '52', '52', '545212am', '65464564am', '54445456am', '65431pm', '5465456pm', '54', '', '', 0, 0, 0),
(30, 'shiftA', 'bus', 'Avissawella', 'Nadun', 778685243, 'kjdfhoahdofhal545', 'd;ljfa;64165143', '52', '52', '545212am', '65464564am', '54445456am', '65431pm', '5465456pm', '545', '', '', 0, 0, 0),
(31, 'shiftA', 'bus', 'Avissawella', 'Nadun', 778685243, 'kjdfhoahdofhal545', 'd;ljfa;64165143', '52', '52', '545212am', '65464564am', '54445456am', '65431pm', '5465456pm', '545am', '64645654pm', 'kelum', 2147483647, 0, 68468465),
(32, 'shiftB', 'bus', 'Colombo', 'Nadun Yalegama', 778685242, 'sdlansdlna45452', '24da5s24AS', '20', '52', '07.30am', '12.00pm', '10.00am', '17.23pm', '10.50am', '17.16pm', '15.20pm', 'namal', 119, 0, 229),
(33, 'shiftA', 'bus', 'sdasd', 'dasd', 546565, 'sdas646', '564654', '6465', '452', '465', '335', '65423', '863', '652', '865', '9865', 'asdas', 654543, 0, 74984653),
(34, '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(35, '', '', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(36, 'shiftA', 'bus', '', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(37, 'shiftB', 'bus', 'Colombo', 'Namal Senanayake', 2147483647, 'adsfadfjna535', 'assdfdasd4546', '48', '52', '04.00am', '13.00pm', '08.00am', '21.00pm', '04.20am', '13.30pm', '20.30pm', 'Kasun Sirisena', 2147483647, 0, 2147483647),
(38, 'shiftA', 'van', 'Colombo', 'Nadun Yalegama', 778685242, '464as66a', 'sd5as6.da', '65', '20', '04.00am', '13.00pm', '08.00am', '17.00pm', '04.30am', '13.30pm', '21.00pm', 'Bandara', 646546454, 0, 2147483647),
(39, 'shiftB', 'van', 'Kegalle', 'Duminda Silva', 2147483647, 'dfasf6a', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(40, 'shiftB', 'van', 'Kegalle', 'Duminda Silva', 2147483647, 'dfasf6a4', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(41, 'shiftB', 'van', 'Kegalle', 'Duminda Silva', 2147483647, 'dfasf6a4', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0),
(42, 'shiftB', 'van', 'Colomo', '', 0, '', '', '', '', '', '', '', '', '', '', '', '', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`, `password`) VALUES
(21, 'sdasded', 'dcsdvv'),
(22, 'sdasded', 'dcsdvv'),
(23, 'sdasded', 'dcsdvv');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addemployeetobus`
--
ALTER TABLE `addemployeetobus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addemployeetovan`
--
ALTER TABLE `addemployeetovan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `addvehicle`
--
ALTER TABLE `addvehicle`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addemployeetobus`
--
ALTER TABLE `addemployeetobus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `addemployeetovan`
--
ALTER TABLE `addemployeetovan`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `addvehicle`
--
ALTER TABLE `addvehicle`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
