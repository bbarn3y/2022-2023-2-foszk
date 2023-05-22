<?php
    // TASK F
    session_start();
    include_once 'storage.php';
    $storage = new Storage(new JsonIO('recipes.json'));
    $recipe = $storage -> findById($_GET['recipe'] ?? '');
    if ($recipe !== null) {
        $_SESSION['fridge'] = array_diff($_SESSION['fridge'] ?? [], $recipe);
    }
    header('Location: index.php');

?>