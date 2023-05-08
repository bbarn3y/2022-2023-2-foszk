<?php

    print_r($_GET);
    print_r($_POST);

    $number = $_GET['number'] ?? $_POST['number'];

    $errors = [];

    if ($number == null || $number == '') {
        $errors[] = 'Please provide something.';
    } else if (!is_numeric($number)) {
        $errors[] = 'Please provide a valid number!';
    }

    $squareRoot = null;
    if (count($errors) == 0) {
        $squareRoot = sqrt($number);
    }

?>

<div>Number: <?= $number ?></div>
<?php if ($squareRoot != null): ?>
    <div>Square root: <?= $squareRoot ?></div>
<?php endif; ?>

<?php foreach($errors as $error): ?>
    <div style="color: red"><?= $error ?></div>
<?php endforeach; ?>

