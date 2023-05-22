<?php
    // TASK A
    include_once 'storage.php';
    $storage = new Storage(new JsonIO('recipes.json'));
    $recipes = $storage->findAll();
    // TASK B
    session_start();
    if (!isset($_SESSION['fridge'])) {
        $_SESSION['fridge'] = [];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Task 4</title>
</head>
<body>
    <h1>Task 4: Recipe tracker</h1>

    <h2>List of recipes</h2>
    <?php foreach($recipes as $name => $ingredients): ?>
        <!-- TASK A -->
        <a href="details.php?recipe=<?= $name ?>"><?= $name ?></a>
        <!-- TASK E -->
        <?php if (!count(array_filter($ingredients, fn($i) => !in_array($i, $_SESSION['fridge'])))): ?>
            <a style="color: green"
               href="make.php?recipe=<?= $name ?>">Can make!</a>
        <?php endif; ?>
        <br>
    <?php endforeach; ?>


    <h2>Fridge contents</h2>
    <!-- TASK B -->
    <?= !$_SESSION['fridge'] ? 'The fridge is empty!' : '' ?>
    <ul>
        <?php foreach($_SESSION['fridge'] as $ingredient): ?>
            <li><?= $ingredient ?></li>
        <?php endforeach; ?>
    </ul>

</body>
</html>
