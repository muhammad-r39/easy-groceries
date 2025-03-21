<?php
// Include database connection
require_once '../config/database.php';

// Set headers for JSON response
header('Content-Type: application/json');

try {
    $stmt = $conn->prepare("
        SELECT flash_sale.*, products.*
        FROM flash_sale
        JOIN products ON flash_sale.product_id = products.id
    ");
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