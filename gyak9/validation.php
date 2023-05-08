<?php
print_r($_POST);
function validate($input, &$errors) {
    if (!isset($input['categories']) || count($input['categories']) < 2) {
        $errors['categories'] = 'Choose at least 2 categories';
    }
}

$errors = [];
if (!empty($_POST)) {
    validate($_POST, $errors);
}

?>

<!-- action="validation.php" -->
<form method="post">

    <div>
        <input type="radio" name="bool" value="true"> True
        <input type="radio" name="bool" value="false"> False
        <input type="radio" name="bool" value="other"> Other
    </div>

    <div>
        <input type="checkbox" name="categories[]" value="1"> Cat1
        <input type="checkbox" name="categories[]" value="2"> Cat2
        <input type="checkbox" name="categories[]" value="3"> Cat3
    </div>
    <?php if (isset($errors['categories'])): ?>
        <div style="color: red"><?= $errors['categories'] ?></div>
    <?php endif; ?>

    <div>
        <input type="text" name="email" />
    </div>

    <button type="submit">Submit</button>

</form>

