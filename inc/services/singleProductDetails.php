<?php
// Include database connection
require_once '../config/database.php';
$product_id = $_POST["product_id"];

// Set headers for JSON response
header('Content-Type: application/json');

try {
    // Prepare and execute query to get all departments
    $stmt = $conn->prepare("
      SELECT 
        p.*,
        pi_thumb.image AS thumb_image,
        pi_full.image AS full_image,
        pi_thumb.pair AS pair_number
      FROM
        products p
      LEFT JOIN 
        product_images pi_thumb ON p.id = pi_thumb.product_id AND pi_thumb.type = 'thumb'
      LEFT JOIN 
        product_images pi_full ON p.id = pi_full.product_id AND pi_full.type = 'full' AND pi_full.pair = pi_thumb.pair
      WHERE 
        p.id = :product_id
      ORDER BY
        pi_thumb.pair"
    );

    $stmt->bindParam(':product_id', $product_id, PDO::PARAM_INT);
    $stmt->execute();

    // Initialize product array
    $product = null;

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        if ($product === null) {
            // Create the product array with all columns from the products table
            $product = [];
            foreach ($row as $key => $value) {
                // Skip columns that are specific to the images tables
                if (!in_array($key, ['thumb_image', 'full_image', 'pair_number'])) {
                    $product[$key] = $value;
                }
            }
            // Initialize the images array
            $product['images'] = [];
        }
        // Add image pair if it exists
        if ($row['thumb_image'] && $row['full_image']) {
            $product['images'][] = [
                'thumb' => $row['thumb_image'],
                'full' => $row['full_image']
            ];
        }
    }
    // Return departments as JSON
    echo json_encode($product);
} catch(PDOException $e) {
    // Return error message
    http_response_code(500);
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close connection
$conn = null;
?>