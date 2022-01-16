-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2022 at 03:56 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `events_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add user data', 7, 'add_userdata'),
(26, 'Can change user data', 7, 'change_userdata'),
(27, 'Can delete user data', 7, 'delete_userdata'),
(28, 'Can view user data', 7, 'view_userdata'),
(29, 'Can add user info', 7, 'add_userinfo'),
(30, 'Can change user info', 7, 'change_userinfo'),
(31, 'Can delete user info', 7, 'delete_userinfo'),
(32, 'Can view user info', 7, 'view_userinfo'),
(33, 'Can add role', 8, 'add_role'),
(34, 'Can change role', 8, 'change_role'),
(35, 'Can delete role', 8, 'delete_role'),
(36, 'Can view role', 8, 'view_role'),
(37, 'Can add user', 9, 'add_user'),
(38, 'Can change user', 9, 'change_user'),
(39, 'Can delete user', 9, 'delete_user'),
(40, 'Can view user', 9, 'view_user'),
(41, 'Can add event type', 10, 'add_eventtype'),
(42, 'Can change event type', 10, 'change_eventtype'),
(43, 'Can delete event type', 10, 'delete_eventtype'),
(44, 'Can view event type', 10, 'view_eventtype'),
(45, 'Can add event', 11, 'add_event'),
(46, 'Can change event', 11, 'change_event'),
(47, 'Can delete event', 11, 'delete_event'),
(48, 'Can view event', 11, 'view_event'),
(49, 'Can add favorite list', 12, 'add_favoritelist'),
(50, 'Can change favorite list', 12, 'change_favoritelist'),
(51, 'Can delete favorite list', 12, 'delete_favoritelist'),
(52, 'Can view favorite list', 12, 'view_favoritelist'),
(53, 'Can add user to event', 13, 'add_usertoevent'),
(54, 'Can change user to event', 13, 'change_usertoevent'),
(55, 'Can delete user to event', 13, 'delete_usertoevent'),
(56, 'Can view user to event', 13, 'view_usertoevent');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$260000$Ju1vtVaGZsTVT3SKQ9B7P0$1Qk3yeyOkAlSVE/gsdCSjBBrRC/QDcyw6le9x0Yf4Ak=', '2021-11-14 20:04:52.329446', 1, 'superuser', '', '', 'dzenalex9@gmail.com', 1, 1, '2021-11-13 13:31:23.473951');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `backend_userinfo`
--

CREATE TABLE `backend_userinfo` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `backend_userinfo`
--

INSERT INTO `backend_userinfo` (`id`, `first_name`, `last_name`, `username`, `email`) VALUES
(1, 'Alex', 'Dzen', 'dzenalex9', 'dzenalex9@gmail.com'),
(2, 'Isabela', 'Jugariu', 'isajugariu', 'isajugariu@gmail.com'),
(3, 'Amalia', 'Cotoi', 'amaliacotoi', 'amaliacotoi@gmail.com'),
(6, 'firstname231', 'lastname1', 'username1', 'test2@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2021-11-13 13:36:20.314981', '2', 'Isabela Jugariu', 1, '[{\"added\": {}}]', 7, 1),
(2, '2021-11-13 17:14:58.412684', '3', 'Alex Dzen', 1, '[{\"added\": {}}]', 7, 1),
(3, '2021-11-14 20:05:19.293205', '9', 'sgdf gdf', 1, '[{\"added\": {}}]', 7, 1),
(4, '2021-11-14 20:09:53.644115', '1', 'abcd', 1, '[{\"added\": {}}]', 9, 1),
(5, '2021-11-21 11:22:02.223188', '1', 'party', 1, '[{\"added\": {}}]', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(11, 'backend', 'event'),
(10, 'backend', 'eventtype'),
(12, 'backend', 'favoritelist'),
(8, 'backend', 'role'),
(9, 'backend', 'user'),
(7, 'backend', 'userinfo'),
(13, 'backend', 'usertoevent'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2021-11-07 11:57:28.186536'),
(2, 'auth', '0001_initial', '2021-11-07 11:57:29.236599'),
(3, 'admin', '0001_initial', '2021-11-07 11:57:29.464860'),
(4, 'admin', '0002_logentry_remove_auto_add', '2021-11-07 11:57:29.475840'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2021-11-07 11:57:29.486807'),
(6, 'contenttypes', '0002_remove_content_type_name', '2021-11-07 11:57:29.610285'),
(7, 'auth', '0002_alter_permission_name_max_length', '2021-11-07 11:57:29.697932'),
(8, 'auth', '0003_alter_user_email_max_length', '2021-11-07 11:57:29.718766'),
(9, 'auth', '0004_alter_user_username_opts', '2021-11-07 11:57:29.730732'),
(10, 'auth', '0005_alter_user_last_login_null', '2021-11-07 11:57:29.801241'),
(11, 'auth', '0006_require_contenttypes_0002', '2021-11-07 11:57:29.806266'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2021-11-07 11:57:29.816202'),
(13, 'auth', '0008_alter_user_username_max_length', '2021-11-07 11:57:29.835801'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2021-11-07 11:57:29.855698'),
(15, 'auth', '0010_alter_group_name_max_length', '2021-11-07 11:57:29.878621'),
(16, 'auth', '0011_update_proxy_permissions', '2021-11-07 11:57:29.914845'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2021-11-07 11:57:29.935186'),
(18, 'sessions', '0001_initial', '2021-11-07 11:57:29.979525'),
(19, 'backend', '0001_initial', '2021-11-07 12:06:37.762849');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('dyafnwhyml3osasgdta88s5iik6yzudo', '.eJxVjDsOwyAQBe9CHSF-ZiFlep8BLQsEJxGWjF1FuXtsyUXSzsx7bxZwW2vYel7ClNiVSXb5ZRHpmdsh0gPbfeY0t3WZIj8SftrOxznl1-1s_w4q9rqv0VEcEDSQN6IAGQHosixWgjLWglNDKZQyOivQx4RCGec86B1rAM0-X-FnN44:1mmLkC:LYuPsY9OtBZVD0wJmp5QPVAJQ2KOQZXXc-QOJrDWR4Y', '2021-11-28 20:04:52.335430'),
('xownwgpf04lsau7g5v47ejl05yh7epy8', '.eJxVjDsOwyAQBe9CHSF-ZiFlep8BLQsEJxGWjF1FuXtsyUXSzsx7bxZwW2vYel7ClNiVSXb5ZRHpmdsh0gPbfeY0t3WZIj8SftrOxznl1-1s_w4q9rqv0VEcEDSQN6IAGQHosixWgjLWglNDKZQyOivQx4RCGec86B1rAM0-X-FnN44:1mltAa:Z_KPbLfsYifsryQGh6iSuLXBwIDcGmE-hxNgOCxFpho', '2021-11-27 13:34:12.690761');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` float NOT NULL,
  `id_organizer` int(11) NOT NULL,
  `start_date` bigint(20) NOT NULL,
  `end_date` bigint(20) NOT NULL,
  `location` text NOT NULL,
  `description` text NOT NULL,
  `id_type` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `img_name` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `price`, `id_organizer`, `start_date`, `end_date`, `location`, `description`, `id_type`, `status`, `img_name`) VALUES
(17, 'test event', 20, 15, 1639833780, 1639837380, 'Cluj-Napoca', 'test event description', 1, 'accepted', 'dea88363-45a6-490d-ac12-0f2ae01db025.jpg'),
(18, 'sdg', 12.3, 15, 1639865340, 1639865580, 'dfhgfdhfg', 'sdgdfg', 1, 'pending', 'cc1ee254-1795-46b6-bb97-1a88f4e15024.png');

-- --------------------------------------------------------

--
-- Table structure for table `event_types`
--

CREATE TABLE `event_types` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event_types`
--

INSERT INTO `event_types` (`id`, `name`) VALUES
(1, 'party');

-- --------------------------------------------------------

--
-- Table structure for table `favorite_lists`
--

CREATE TABLE `favorite_lists` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'organizer'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `id_role` int(11) DEFAULT NULL,
  `id_rating` int(11) DEFAULT NULL,
  `notifications` tinyint(4) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `id_role`, `id_rating`, `notifications`, `status`) VALUES
(15, 'user@user.com', 'pbkdf2_sha256$260000$IHxfYi4ulUN71B5YsPZLLw$ierFS/3rmCZvCvYPV3tf6IrOVxC8yYPAMiuSMzldEgc=', 3, NULL, NULL, 'accepted'),
(19, 'org@org.com', 'pbkdf2_sha256$260000$8JMRcAsABL7UvfqrCeKvE1$IHpkO4o2Xp87uKgdHZqX0EWymQKlkJDveQ9R4WFoMPY=', 2, NULL, NULL, 'pending'),
(20, 'dzenalex9@gmail.com', 'pbkdf2_sha256$260000$4znILs8fYLroU1ghXBD9S8$ISgDnGnOYkeKyxq6g6LDoXOXPBIky+unpP2AgoTsWno=', 3, NULL, NULL, 'accepted');

-- --------------------------------------------------------

--
-- Table structure for table `users2events`
--

CREATE TABLE `users2events` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_event` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users2events`
--

INSERT INTO `users2events` (`id`, `id_user`, `id_event`) VALUES
(8, 20, 17),
(9, 15, 17);

-- --------------------------------------------------------

--
-- Table structure for table `users_chat`
--

CREATE TABLE `users_chat` (
  `id_user1` int(11) NOT NULL,
  `id_user2` int(11) NOT NULL,
  `message` text NOT NULL,
  `id_sender` int(11) NOT NULL,
  `send_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users_info`
--

CREATE TABLE `users_info` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `dob` date NOT NULL,
  `about` text NOT NULL,
  `id_user` int(11) NOT NULL,
  `img_name` text NOT NULL,
  `facebook` text DEFAULT NULL,
  `instagram` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_info`
--

INSERT INTO `users_info` (`id`, `first_name`, `last_name`, `dob`, `about`, `id_user`, `img_name`, `facebook`, `instagram`) VALUES
(16, 'Alex', 'Dzen', '1999-10-20', 'about', 20, 'no_profile_pic.png', 'https://www.facebook.com/alex.dzen.9', '-'),
(17, 'abc', 'abc', '1998-12-11', 'acc', 15, 'no_profile_pic.png', '-', '-');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `backend_userinfo`
--
ALTER TABLE `backend_userinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_type` (`id_type`);

--
-- Indexes for table `event_types`
--
ALTER TABLE `event_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `favorite_lists`
--
ALTER TABLE `favorite_lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_event` (`id_event`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- Indexes for table `users2events`
--
ALTER TABLE `users2events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_event` (`id_event`);

--
-- Indexes for table `users_chat`
--
ALTER TABLE `users_chat`
  ADD KEY `id_user1` (`id_user1`),
  ADD KEY `id_user2` (`id_user2`),
  ADD KEY `id_sender` (`id_sender`);

--
-- Indexes for table `users_info`
--
ALTER TABLE `users_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `backend_userinfo`
--
ALTER TABLE `backend_userinfo`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `event_types`
--
ALTER TABLE `event_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `favorite_lists`
--
ALTER TABLE `favorite_lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users2events`
--
ALTER TABLE `users2events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users_info`
--
ALTER TABLE `users_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `event_types` (`id`);

--
-- Constraints for table `favorite_lists`
--
ALTER TABLE `favorite_lists`
  ADD CONSTRAINT `favorite_lists_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `favorite_lists_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`);

--
-- Constraints for table `users2events`
--
ALTER TABLE `users2events`
  ADD CONSTRAINT `users2events_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users2events_ibfk_2` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`);

--
-- Constraints for table `users_chat`
--
ALTER TABLE `users_chat`
  ADD CONSTRAINT `users_chat_ibfk_1` FOREIGN KEY (`id_user1`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_chat_ibfk_2` FOREIGN KEY (`id_user2`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_chat_ibfk_3` FOREIGN KEY (`id_sender`) REFERENCES `users` (`id`);

--
-- Constraints for table `users_info`
--
ALTER TABLE `users_info`
  ADD CONSTRAINT `users_info_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
