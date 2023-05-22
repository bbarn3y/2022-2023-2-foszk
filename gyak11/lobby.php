Authenticated as:

<?php

include 'util.php';

session_start();

print_r($_SESSION['user']['username']);
$user = $_SESSION['user'];

?>

<button>User button</button>

<?php
    if(in_array('admin', $user['roles'])):
?>
    <button>Admin button</button>
<?php
    endif;
?>


<form action="" method="POST">
    <input name="logout" hidden>
    <button type="submit">Logout</button>
</form>
<?php
if (isset($_POST["logout"])) {
    unset($_SESSION["user"]);
    redirect('login.php');
}
