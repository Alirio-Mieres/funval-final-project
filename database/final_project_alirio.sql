-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-10-2023 a las 20:44:48
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final_project_alirio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bitacoras`
--

CREATE TABLE `bitacoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bitacora` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sistema_operativo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `navegador` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_usuario` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `bitacoras`
--

INSERT INTO `bitacoras` (`id`, `bitacora`, `fecha`, `hora`, `ip`, `sistema_operativo`, `navegador`, `id_usuario`, `created_at`, `updated_at`) VALUES
(1, 'revision diaria', '2023-10-05', '10:30:00', '127.0.0.1', 'window', 'chrome', 1, '2023-10-10 22:43:39', '2023-10-10 22:43:39'),
(2, 'revision diaria', '2023-10-06', '10:30:00', '127.0.0.1', 'window', 'chrome', 1, '2023-10-10 22:43:45', '2023-10-10 22:43:45'),
(3, 'revision diaria', '2023-10-07', '10:30:00', '127.0.0.1', 'window', 'chrome', 1, '2023-10-10 22:43:48', '2023-10-10 22:43:48'),
(4, 'revision diaria', '2023-10-08', '10:30:00', '127.0.0.1', 'window', 'chrome', 1, '2023-10-10 22:43:50', '2023-10-10 22:43:50'),
(5, 'revision diaria', '2023-10-09', '10:30:00', '127.0.0.1', 'window', 'chrome', 1, '2023-10-10 22:43:52', '2023-10-10 22:43:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enlaces`
--

CREATE TABLE `enlaces` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pagina` bigint(20) UNSIGNED NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `enlaces`
--

INSERT INTO `enlaces` (`id`, `descripcion`, `id_pagina`, `id_rol`, `created_at`, `updated_at`) VALUES
(1, 'parametros', 1, 2, '2023-10-10 22:38:57', '2023-10-10 22:38:57'),
(2, 'roles', 2, 1, '2023-10-10 22:39:22', '2023-10-10 22:39:22'),
(3, 'usuarios', 3, 2, '2023-10-10 22:39:42', '2023-10-10 22:39:42'),
(4, 'bitacoras', 4, 1, '2023-10-10 22:39:55', '2023-10-10 22:39:55'),
(5, 'universidades', 5, 2, '2023-10-10 22:40:08', '2023-10-10 22:40:08'),
(6, 'especialidades', 6, 2, '2023-10-10 22:40:22', '2023-10-10 22:40:22'),
(7, 'afiliados', 7, 1, '2023-10-10 22:40:32', '2023-10-10 22:40:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_10_09_151925_create_personas_table', 1),
(6, '2023_10_09_152228_create_rols_table', 1),
(7, '2023_10_09_152455_add_user_fields_table', 1),
(8, '2023_10_09_153043_create_bitacoras_table', 1),
(9, '2023_10_09_153534_create_paginas_table', 1),
(10, '2023_10_09_154122_create_enlaces_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paginas`
--

CREATE TABLE `paginas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `paginas`
--

INSERT INTO `paginas` (`id`, `url`, `estado`, `nombre`, `descripcion`, `icono`, `tipo`, `created_at`, `updated_at`) VALUES
(1, '/parametros', 'active', 'parametros', 'pagina de parametros', 'test', 'parametro', '2023-10-10 22:36:10', '2023-10-10 22:36:10'),
(2, '/roles', 'active', 'roles', 'pagina de roles', 'test', 'roles', '2023-10-10 22:36:29', '2023-10-10 22:36:29'),
(3, '/usuarios', 'active', 'usuarios', 'pagina de usuarios', 'test', 'usuarios', '2023-10-10 22:36:39', '2023-10-10 22:36:39'),
(4, '/bitacoras', 'active', 'bitacoras', 'pagina de bitacoras', 'test', 'bitacoras', '2023-10-10 22:36:52', '2023-10-10 22:36:52'),
(5, '/universidades', 'active', 'universidades', 'pagina de universidades', 'test', 'universidades', '2023-10-10 22:37:10', '2023-10-10 22:37:10'),
(6, '/especialidades', 'active', 'especialidades', 'pagina de especialidades', 'test', 'especialidades', '2023-10-10 22:37:24', '2023-10-10 22:37:24'),
(7, '/afiliados', 'active', 'afiliados', 'pagina de afiliados', 'test', 'afiliados', '2023-10-10 22:37:36', '2023-10-10 22:37:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `primer_nombre` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `segundo_nombre` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `primer_apellido` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `segundo_apellido` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bio` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `telefono`, `bio`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:29:31', '2023-10-10 22:29:31'),
(2, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:31:36', '2023-10-10 22:31:36'),
(3, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:32:25', '2023-10-10 22:32:25'),
(4, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:32:39', '2023-10-10 22:32:39'),
(5, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:40:57', '2023-10-10 22:40:57'),
(6, NULL, NULL, NULL, NULL, NULL, NULL, '2023-10-10 22:41:12', '2023-10-10 22:41:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rol` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `rol`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2023-10-10 22:27:44', '2023-10-10 22:27:44'),
(2, 'user', '2023-10-10 22:27:49', '2023-10-10 22:27:49'),
(3, 'supervisor', '2023-10-10 22:28:24', '2023-10-10 22:28:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `habilitado` tinyint(1) NOT NULL DEFAULT 1,
  `id_persona` bigint(20) UNSIGNED NOT NULL,
  `id_rol` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `habilitado`, `id_persona`, `id_rol`) VALUES
(1, 'admin@gmail.com', NULL, '$2y$10$9R7weKJK385GISPaR5iY8.IQlhNihwmtgfRKqnVeJXiimpHkJ/oSq', NULL, '2023-10-10 22:31:36', '2023-10-10 22:31:36', 1, 2, 1),
(2, 'usuario2@gmail.com', NULL, '$2y$10$mQcwv6NsH1mfxp8ZC2mwDuXJ4b4.zJ9O0iImqQ1gNIE3hFD0oRNBy', NULL, '2023-10-10 22:32:25', '2023-10-10 22:32:25', 1, 3, 2),
(3, 'usuario3@gmail.com', NULL, '$2y$10$mI795M2m4eHUOFBtCaPFXuFIhvUhmgdf7PZ8i9DHHB.keCYHjzpdq', NULL, '2023-10-10 22:32:39', '2023-10-10 22:32:39', 1, 4, 2),
(4, 'supervisor@gmail.com', NULL, '$2y$10$7k2F7szxkcJR/wcJAsIFYuvhMCA03tIhp0QYBaAP7bJRdkrIA6rv6', NULL, '2023-10-10 22:40:57', '2023-10-10 22:40:57', 1, 5, 2),
(5, 'supervisor2@gmail.com', NULL, '$2y$10$/T.Wl.qsMFbCVH42ajA79upEOddvMCiKVM6vwgi/FFBlhSSpKFpfa', NULL, '2023-10-10 22:41:12', '2023-10-10 22:41:12', 1, 6, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bitacoras_id_usuario_foreign` (`id_usuario`);

--
-- Indices de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD PRIMARY KEY (`id`),
  ADD KEY `enlaces_id_pagina_foreign` (`id_pagina`),
  ADD KEY `enlaces_id_rol_foreign` (`id_rol`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paginas`
--
ALTER TABLE `paginas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_id_persona_foreign` (`id_persona`),
  ADD KEY `users_id_rol_foreign` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `enlaces`
--
ALTER TABLE `enlaces`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `paginas`
--
ALTER TABLE `paginas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `bitacoras`
--
ALTER TABLE `bitacoras`
  ADD CONSTRAINT `bitacoras_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `enlaces`
--
ALTER TABLE `enlaces`
  ADD CONSTRAINT `enlaces_id_pagina_foreign` FOREIGN KEY (`id_pagina`) REFERENCES `paginas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enlaces_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_persona_foreign` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
