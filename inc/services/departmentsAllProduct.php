<?php
// Include database connection
require_once '../config/database.php';
$department_id = $_POST["department_id"];

// Set headers for JSON response
header('Content-Type: application/json');

try {
    $stmt = $conn->prepare("
        SELECT 
            d.id AS department_id,
            d.name AS department_name,
            p.*
        FROM 
            departments d
        JOIN 
            products p ON d.id = p.department
        WHERE 
            d.id = :department_id
    ");
    $stmt->bindParam(':department_id', $department_id, PDO::PARAM_INT);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Initialize the department structure
    $department = null;
    $products = [];

    // Process the results
    foreach ($results as $row) {
        if ($department === null) {
            // Set up department data (only once)
            $department = [
                'department_id' => $row['department_id'],
                'department_name' => $row['department_name'],
                'products' => []
            ];
        }

        // Create a product object excluding department fields
        $product = [];
        foreach ($row as $key => $value) {
            // Skip department-specific fields
            if (!in_array($key, ['department_id', 'department_name'])) {
                $product[$key] = $value;
            }
        }

        // Add product to the products array
        $department['products'][] = $product;
    }

    // Return as JSON
    echo json_encode($department);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>