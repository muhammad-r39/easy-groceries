-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2025 at 04:43 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easy_groceries`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `image`) VALUES
(1, 'Produce', 'bakery.webp'),
(2, 'Dairy', 'dairy.webp'),
(3, 'Grocery', 'grocery.webp'),
(4, 'Health & Beauty', 'health-beauty.webp'),
(5, 'Bakery', 'bakery.webp'),
(6, 'Meat', 'meat.webp');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `department` int(11) DEFAULT NULL,
  `sub_category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `cover_image`, `brand`, `department`, `sub_category`) VALUES
(1, 'Holiday Feast Turkey Stuffing Burgers 568g', 'Delicious gourmet turkey burgers with savory stuffing mix blended right in. Ready to cook from frozen, these juicy burgers bring the flavor of Thanksgiving to your table any time of year. Perfect for quick family dinners or casual entertaining.', 16.99, 'holiday-feast-turkey-small.webp', 'PC', 6, 1),
(2, 'Holiday Scented Candle, 3-Wick Candle 1ea.', 'Transform your home with this luxurious 3-wick scented candle. Featuring notes of pine, cinnamon, and vanilla, it creates a warm, inviting atmosphere perfect for holiday gatherings. Three wicks provide even burning and maximum fragrance distribution. Approximately 25-45 hours of burn time.', 10.99, 'holiday-scented-candle-small.webp', 'PC', 3, 2),
(3, 'Pure J.L. Kraft Dressing', 'The original creamy salad dressing with the perfect balance of tangy and sweet. Made with high-quality ingredients and no artificial preservatives. Versatile enough for salads, sandwiches, or as a dip for vegetables and wings.', 5.99, 'pure-jl-kraft-small.webp', 'KRAFT', 3, 4),
(4, 'Frozen Turkey, 5-7 Kg', 'Premium grade A frozen turkey, perfect for holiday feasts or special family dinners. Farm-raised without antibiotics, this turkey offers juicy, tender meat with exceptional flavor. Easy preparation instructions included for a perfectly roasted centerpiece.', 19.99, 'frozen-turkey-small.webp', 'BUTTERBALL', 6, 3),
(5, 'BROCCOLI', 'Farm-fresh broccoli with tight, green florets and crisp stalks. Rich in vitamins C and K, fiber, and antioxidants. Perfect for steaming, roasting, stir-fries, or enjoying raw with your favorite dip. Harvested at peak ripeness for maximum freshness and nutrition.', 1.99, 'broccoli-small.webp', 'PRODUCE', 3, 5),
(6, 'Caramel Macchiato Coffee Creamer 946ml', 'Indulge in the rich, creamy taste of caramel macchiato in your morning coffee. This premium coffee creamer combines caramel sweetness with hints of vanilla and a smooth, creamy texture. Transform ordinary coffee into a coffeehouse-quality beverage right at home.', 5.59, 'caramel-macchiato-coffee-small.webp', 'Delight', 3, 8),
(7, 'Ready To Serve Soup 540ml', 'Hearty, delicious soup made with premium ingredients and slow-simmered to develop rich flavors. Ready to heat and serve for a quick, satisfying meal. Perfect paired with a sandwich or salad, or enjoyed on its own with crackers or crusty bread.', 3.00, 'ready-to-serve-soup-small.webp', 'Tim Hortons', 3, 6),
(8, 'Organic Greek Yogurt Plain 4%', 'Authentic Greek yogurt made from organic milk and traditional straining methods. With 4% milkfat for a creamy, indulgent texture and 18g of protein per serving. No added sugars, artificial flavors, or preservatives. Perfect for breakfast parfaits, smoothies, or as a versatile cooking ingredient.', 6.29, 'organic-greek-yogurt-small.webp', 'Olympic', 2, 7),
(9, 'Carbonaut Bread Seeded 544 g', 'Low-carb seeded bread that doesn\'t compromise on taste or texture. Made with a blend of nutritious seeds including flax, sunflower, and pumpkin for added fiber and protein. Perfect for sandwiches, toast, or alongside soups and salads. Only 1g net carb per slice.', 8.99, 'carbonaut-bread-small.webp', 'Carbonaut', 1, 9),
(10, 'Thick Sliced Brioche-Style Loaf 620 g', 'Luxuriously soft brioche-style bread sliced extra thick for the ultimate French toast, grilled cheese, or gourmet sandwich. Made with real butter and eggs for a rich, slightly sweet flavor. Each slice delivers the perfect balance of airy lightness and substantial texture.', 3.99, 'thick-sliced-brioche-small.webp', 'D\'ltaliano', 1, 9),
(11, 'Rosemary Focaccia 560 g', 'Aromatic rosemary focaccia crafted in the traditional Italian style. Topped with fresh rosemary and sea salt, then baked to perfection with a crisp exterior and soft, airy interior. Perfect for dipping in olive oil, serving alongside pasta, or creating gourmet sandwiches.', 5.99, 'rosemary-focaccia-small.webp', 'ACE', 1, 9),
(12, 'Olive Ciabatta 225 g', 'Rustic ciabatta bread studded with kalamata and green olives for a Mediterranean flavor experience. Hand-crafted with a slow fermentation process for complex flavor and perfect texture—crisp crust with a light, airy interior. Ideal for bruschetta or alongside soups and salads.', 3.29, 'olive-ciabatta-small.webp', 'ACE', 1, 9),
(13, 'Ciabatta Demi 450 g', 'Traditional Italian ciabatta bread in a convenient half-size format. Features the classic crisp crust and airy, open crumb structure that ciabatta is known for. Perfect size for sandwiches, garlic bread, or serving 2-3 people. Freshly baked and delivered daily.', 6.99, 'ciabatta-demi-small.webp', 'La Baguetterie', 1, 9),
(14, 'Soft Moisturizing Cream 200 ml', 'Ultra-hydrating face cream that provides 24-hour moisture without a greasy feel. Formulated with hyaluronic acid, ceramides, and vitamin E to strengthen the skin barrier and improve elasticity. Suitable for all skin types, especially dry and sensitive skin. Dermatologist tested and fragrance-free.', 10.99, 'soft-moisterizing-small.webp', 'Nivea', 4, 10),
(15, 'After sun Aloe Gel Care 567 g', 'Soothing aloe gel that immediately cools and refreshes sun-exposed skin. Rich in aloe vera, cucumber extract, and vitamin E to hydrate, calm redness, and accelerate skin recovery. Non-greasy formula absorbs quickly and provides instant relief from sun discomfort. Can be stored in the refrigerator for enhanced cooling effect.', 9.49, 'after-sun-aloe-gel-small.webp', 'Life Brand', 4, 14),
(16, 'After Sun Aloe Vera Gel 227 ml', 'Pure, soothing aloe vera gel that provides immediate relief for sunburned or irritated skin. Contains 99% organic aloe vera to hydrate, cool, and help repair damaged skin cells. Absorbs quickly with no sticky residue. Also great for minor burns, insect bites, and dry skin conditions.', 5.99, 'after-sun-aloe-vera-gel-small.webp', 'Live Clean', 4, 14),
(17, 'Classic, Cherry Value Pack 2 ea', 'Iconic cherry-flavored lip balm in a convenient value pack. Provides long-lasting moisture while protecting lips from dryness. Contains SPF 4 to shield against harmful UV rays. The classic cherry flavor everyone loves with a subtle tint that enhances your natural lip color.', 5.99, 'chapstick-classic-cherry-small.webp', 'Chapstick', 4, 15),
(18, 'Color Statement Lipstick, Teddy Bare 1 ea', 'Creamy, high-pigment lipstick in the universally flattering nude shade \"Teddy Bare.\" Smooth application with a semi-matte finish that lasts for hours without drying your lips. Enriched with vitamin E and shea butter for comfortable wear and hydration throughout the day.', 6.99, 'color-statement-lipstrick-small.webp', 'Milani', 4, 11),
(19, 'Eye Shadow, Good Morning 1 ea', 'Silky smooth eyeshadow in \"Good Morning,\" a versatile champagne shimmer that brightens eyes instantly. Highly pigmented formula applies evenly and blends effortlessly. Can be worn alone for a subtle daytime look or layered for more intensity. Crease-resistant formula lasts all day without fading.', 7.00, 'eye-shadow-small.webp', 'Quo Beauty', 4, 12),
(20, 'Baby Got Blush rose all day 1 ea', 'Vibrant rose-toned blush that adds a natural flush of color to cheeks. Buildable formula allows for subtle to bold application. Silky powder blends seamlessly into skin for a natural, radiant finish. Infused with vitamin E to nourish skin while providing long-lasting color.', 5.99, 'baby-got-blush-small.webp', 'Essence', 4, 13),
(21, 'Duo Blush Stick Hug & Kiss', 'Innovative dual-ended blush stick featuring complementary shades \"Hug\" (soft peach) and \"Kiss\" (rosy pink). Creamy formula glides on smoothly and blends effortlessly for a natural-looking flush. Can be worn separately or blended together for a custom color. Perfect for on-the-go touch-ups.', 4.99, 'duo-blush-stick-small.webp', 'Quo Beauty', 4, 11);

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `type` enum('thumb','full') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `product_id`, `image`, `type`) VALUES
(1, 1, 'holiday-feast-turkey-thumb.webp', 'thumb'),
(2, 2, 'holiday-scented-candle-thumb.webp', 'thumb'),
(3, 3, 'pure-jl-kraft-thumb.webp', 'thumb'),
(4, 4, 'frozen-turkey-thumb.webp', 'thumb'),
(5, 5, 'broccoli-thumb.webp', 'thumb'),
(6, 6, 'caramel-macchiato-coffee-thumb.webp', 'thumb'),
(7, 7, 'ready-to-serve-soup-thumb.webp', 'thumb'),
(8, 8, 'organic-greek-yogurt-thumb.webp', 'thumb'),
(9, 9, 'carbonaut-bread-thumb.webp', 'thumb'),
(10, 10, 'thick-sliced-brioche-thumb.webp', 'thumb'),
(11, 11, 'rosemary-focaccia-thumb.webp', 'thumb'),
(12, 12, 'olive-ciabatta-thumb.webp', 'thumb'),
(13, 13, 'ciabatta-demi-thumb.webp', 'thumb'),
(14, 14, 'soft-moisterizing-thumb.webp', 'thumb'),
(15, 15, 'after-sun-aloe-gel-thumb.webp', 'thumb'),
(16, 16, 'after-sun-aloe-vera-gel-thumb.webp', 'thumb'),
(17, 17, 'chapstick-classic-cherry-thumb.webp', 'thumb'),
(18, 18, 'color-statement-lipstrick-thumb.webp', 'thumb'),
(19, 19, 'eye-shadow-thumb.webp', 'thumb'),
(20, 20, 'baby-got-blush-thumb.webp', 'thumb'),
(21, 21, 'duo-blush-stick-thumb.webp', 'thumb'),
(22, 1, 'holiday-feast-turkey-full.webp', 'full'),
(23, 2, 'holiday-scented-candle-full.webp', 'full'),
(24, 3, 'pure-jl-kraft-full.webp', 'full'),
(25, 4, 'frozen-turkey-full.webp', 'full'),
(26, 5, 'broccoli-full.webp', 'full'),
(27, 6, 'caramel-macchiato-coffee-full.webp', 'full'),
(28, 7, 'ready-to-serve-soup-full.webp', 'full'),
(29, 8, 'organic-greek-yogurt-full.webp', 'full'),
(30, 9, 'carbonaut-bread-full.webp', 'full'),
(31, 10, 'thick-sliced-brioche-full.webp', 'full'),
(32, 11, 'rosemary-focaccia-full.webp', 'full'),
(33, 12, 'olive-ciabatta-full.webp', 'full'),
(34, 13, 'ciabatta-demi-full.webp', 'full'),
(35, 14, 'soft-moisterizing-full.webp', 'full'),
(36, 15, 'after-sun-aloe-gel-full.webp', 'full'),
(37, 16, 'after-sun-aloe-vera-gel-full.webp', 'full'),
(38, 17, 'chapstick-classic-cherry-full.webp', 'full'),
(39, 18, 'color-statement-lipstrick-full.webp', 'full'),
(40, 19, 'eye-shadow-full.webp', 'full'),
(41, 20, 'baby-got-blush-full.webp', 'full'),
(42, 21, 'duo-blush-stick-full.webp', 'full');

-- --------------------------------------------------------

--
-- Table structure for table `related_products`
--

CREATE TABLE `related_products` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `related_product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `related_products`
--

INSERT INTO `related_products` (`id`, `product_id`, `related_product_id`) VALUES
(1, 1, 2),
(2, 1, 3),
(3, 1, 4),
(4, 2, 1),
(5, 2, 3),
(6, 2, 4),
(7, 3, 1),
(8, 3, 2),
(9, 3, 4),
(10, 4, 1),
(11, 4, 2),
(12, 4, 3),
(13, 5, 6),
(14, 5, 7),
(15, 5, 8),
(16, 6, 5),
(17, 6, 7),
(18, 6, 8),
(19, 7, 5),
(20, 7, 6),
(21, 7, 8),
(22, 8, 5),
(23, 8, 6),
(24, 8, 7),
(25, 9, 10),
(26, 9, 11),
(27, 9, 12),
(28, 10, 9),
(29, 10, 11),
(30, 10, 13),
(31, 11, 9),
(32, 11, 10),
(33, 11, 12),
(34, 12, 9),
(35, 12, 11),
(36, 12, 13),
(37, 13, 10),
(38, 13, 11),
(39, 13, 12),
(40, 14, 15),
(41, 14, 16),
(42, 14, 17),
(43, 15, 14),
(44, 15, 16),
(45, 15, 18),
(46, 16, 14),
(47, 16, 15),
(48, 16, 19),
(49, 17, 14),
(50, 17, 18),
(51, 17, 20),
(52, 18, 15),
(53, 18, 17),
(54, 18, 19),
(55, 18, 21),
(56, 19, 16),
(57, 19, 18),
(58, 19, 20),
(59, 20, 17),
(60, 20, 19),
(61, 20, 21),
(62, 21, 18),
(63, 21, 19),
(64, 21, 20);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `review` text DEFAULT NULL,
  `rating` int(11) NOT NULL CHECK (`rating` between 1 and 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `product_id`, `review`, `rating`) VALUES
(1, 1, NULL, 5),
(2, 1, NULL, 4),
(3, 1, NULL, 5),
(4, 1, NULL, 3),
(5, 1, NULL, 5),
(6, 2, NULL, 4),
(7, 2, NULL, 4),
(8, 2, NULL, 5),
(9, 2, NULL, 4),
(10, 3, NULL, 3),
(11, 3, NULL, 2),
(12, 3, NULL, 4),
(13, 3, NULL, 3),
(14, 3, NULL, 3),
(15, 3, NULL, 2),
(16, 4, NULL, 5),
(17, 4, NULL, 5),
(18, 4, NULL, 4),
(19, 4, NULL, 5),
(20, 5, NULL, 4),
(21, 5, NULL, 2),
(22, 5, NULL, 3),
(23, 5, NULL, 4),
(24, 6, NULL, 4),
(25, 6, NULL, 3),
(26, 6, NULL, 4),
(27, 6, NULL, 5),
(28, 6, NULL, 4),
(29, 7, NULL, 5),
(30, 7, NULL, 5),
(31, 7, NULL, 4),
(32, 7, NULL, 5),
(33, 7, NULL, 5),
(34, 8, NULL, 3),
(35, 8, NULL, 3),
(36, 8, NULL, 4),
(37, 9, NULL, 2),
(38, 9, NULL, 3),
(39, 9, NULL, 2),
(40, 9, NULL, 1),
(41, 10, NULL, 5),
(42, 10, NULL, 4),
(43, 10, NULL, 5),
(44, 10, NULL, 4),
(45, 10, NULL, 5),
(46, 11, NULL, 4),
(47, 11, NULL, 3),
(48, 11, NULL, 4),
(49, 12, NULL, 5),
(50, 12, NULL, 4),
(51, 12, NULL, 5),
(52, 12, NULL, 5),
(53, 13, NULL, 2),
(54, 13, NULL, 3),
(55, 13, NULL, 2),
(56, 13, NULL, 1),
(57, 13, NULL, 2),
(58, 14, NULL, 4),
(59, 14, NULL, 4),
(60, 14, NULL, 3),
(61, 14, NULL, 4),
(62, 15, NULL, 5),
(63, 15, NULL, 5),
(64, 15, NULL, 5),
(65, 15, NULL, 4),
(66, 15, NULL, 5),
(67, 16, NULL, 3),
(68, 16, NULL, 3),
(69, 16, NULL, 4),
(70, 16, NULL, 3),
(71, 17, NULL, 4),
(72, 17, NULL, 5),
(73, 17, NULL, 4),
(74, 17, NULL, 4),
(75, 17, NULL, 5),
(76, 18, NULL, 2),
(77, 18, NULL, 1),
(78, 18, NULL, 2),
(79, 18, NULL, 2),
(80, 19, NULL, 5),
(81, 19, NULL, 4),
(82, 19, NULL, 4),
(83, 19, NULL, 5),
(84, 20, NULL, 3),
(85, 20, NULL, 3),
(86, 20, NULL, 4),
(87, 20, NULL, 3),
(88, 20, NULL, 2),
(89, 21, NULL, 5),
(90, 21, NULL, 4),
(91, 21, NULL, 5),
(92, 21, NULL, 5),
(93, 21, NULL, 4);

-- --------------------------------------------------------

--
-- Table structure for table `sub_categories`
--

CREATE TABLE `sub_categories` (
  `id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_categories`
--

INSERT INTO `sub_categories` (`id`, `department_id`, `name`) VALUES
(1, 6, 'Burgers'),
(2, 3, 'Candle'),
(3, 6, 'Frozen Meat'),
(4, 3, 'Sauce'),
(5, 3, 'Vegetables'),
(6, 3, 'Canned Food'),
(7, 2, 'Yogurt'),
(8, 3, 'Coffee'),
(9, 1, 'Bread'),
(10, 4, 'Cream'),
(11, 4, 'Lipstick'),
(12, 4, 'Eye Shadow'),
(13, 4, 'Blush'),
(14, 4, 'Aloe Vera Gel');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `related_products`
--
ALTER TABLE `related_products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_categories`
--
ALTER TABLE `sub_categories`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `related_products`
--
ALTER TABLE `related_products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `sub_categories`
--
ALTER TABLE `sub_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
