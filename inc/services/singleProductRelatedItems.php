<?php
// Include database connection
require_once '../config/database.php';
$product_id = $_POST["product_id"];

// Set headers for JSON response
header('Content-Type: application/json');

try {
    $stmt = $conn->prepare("
        SELECT related_products.*, products.*
        FROM related_products
        JOIN products ON related_products.related_product_id = products.id
        WHERE related_products.product_id = :product_id
    ");
    $stmt->bindParam(':product_id', $product_id, PDO::PARAM_INT);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return as JSON
    echo json_encode($results);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>