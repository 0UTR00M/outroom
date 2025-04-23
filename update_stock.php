<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$product = strtolower($data['product']);
$size = $data['size'];

$filename = 'stock.json';
if (!file_exists($filename)) {
    echo json_encode(['success' => false, 'message' => 'Stock file missing']);
    exit;
}

$stock = json_decode(file_get_contents($filename), true);

if (isset($stock[$product][$size]) && $stock[$product][$size] > 0) {
    $stock[$product][$size]--;
    file_put_contents($filename, json_encode($stock, JSON_PRETTY_PRINT));
    echo json_encode(['success' => true, 'newQty' => $stock[$product][$size]]);
} else {
    echo json_encode(['success' => false, 'message' => 'Out of stock']);
}
?>