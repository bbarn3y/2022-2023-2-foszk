<?php
    // TASK D
    session_start();
    $_SESSION['fridge'] = array_unique(array_merge($_SESSION['fridge'], array_keys($_POST ?? [])));
    header('Location: index.php');

?>