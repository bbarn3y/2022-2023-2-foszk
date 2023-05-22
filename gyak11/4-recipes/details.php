<?php
    session_start();
    $name = $_GET['recipe'] ?? '';
    include_once 'storage.php';
    $storage = new Storage(new JsonIO('recipes.json'));
    $recipe = $storage->findById($name);
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

    <a href="index.php">← Back to recipes</a>

    <h2>Title</h2>

    <form action="save.php" method="POST">
        <!-- TASK C -->
        <?php foreach ($recipe as $ingredient): ?>
            <input type="checkbox" id="<?= $ingredient ?>" name="<?= $ingredient ?>"
                   <?= in_array($ingredient, $_SESSION['fridge']) ? 'checked disabled' : '' ?>
            <label for="<?= $ingredient ?>"><?= $ingredient ?></label>
            <br>
        <?php endforeach; ?>

        <button type="submit">Save</button>
    </form>

    </body>
</html>