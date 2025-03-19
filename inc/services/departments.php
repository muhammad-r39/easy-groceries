<?php
// Include database connection
require_once '../config/database.php';

// Set headers for JSON response
header('Content-Type: application/json');

try {
    // Prepare and execute query to get all departments
    $stmt = $conn->prepare("SELECT * FROM departments");
    $stmt->execute();

    // Fetch all departments as an associative array
    $departments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return departments as JSON
    echo json_encode($departments);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>