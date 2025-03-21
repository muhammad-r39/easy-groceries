<?php
// Include database connection
require_once '../config/database.php';

// Set headers for JSON response
header('Content-Type: application/json');

// Get cart products from POST
if (!isset($_POST["cart_products"])) {
    http_response_code(400);
    echo json_encode(['error' => 'No cart products provided']);
    exit;
}

// Decode the JSON string from POST
$cart_products = json_decode($_POST["cart_products"], true);

// Check if cart is empty
if (empty($cart_products)) {
    echo json_encode([]);
    exit;
}

// Extract product IDs from cart
$product_ids = array_map(function($item) {
    return $item['id'];
}, $cart_products);

// Convert array to comma-separated string for SQL IN clause
$ids_string = implode(',', array_map(function($id) {
    return "'" . (int)$id . "'"; // Sanitize IDs by casting to integer
}, $product_ids));

try {
    // Use proper IN clause in the SQL query
    $sql = "SELECT * FROM products WHERE id IN ($ids_string)";
    $stmt = $conn->prepare($sql);
    $stmt->execute();

    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return as JSON
    echo json_encode($products);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>