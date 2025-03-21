<?php
// Include database connection
require_once '../config/database.php';

// Set headers for JSON response
header('Content-Type: application/json');

try {
    $stmt = $conn->prepare("
        SELECT best_selling.*, products.*
        FROM best_selling
        JOIN products ON best_selling.product_id = products.id
    ");
    $stmt->execute();

    $departments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return as JSON
    echo json_encode($departments);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>