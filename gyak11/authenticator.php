<?php

include 'util.php';

class UserStorage {

    // @note The password is password
    function findUser($username, $password): array {
        return array_filter($this->getUsers(), fn($user) => $user['username'] == $username && $user['password'] == md5($password));
    }

    function getUsers(): array {
        return json_decode(file_get_contents('users.json'), true);
    }
}

function checkUser($userStorage, $username, $password) {
    $user = $userStorage -> findUser($username, $password);
    return (count($user)) === 1 ? array_shift($user) : NULL;
}

function login($user) {
    session_start();
    $_SESSION['user'] = $user;
}

$userStorage = new UserStorage();
if (!empty($_POST) && isset($_POST['username']) && isset($_POST['password'])) {
    $user = checkUser($userStorage, $_POST['username'], $_POST['password']);
    if ($user) {
        login($user);
        redirect('lobby.php');
    } else {
        redirect('login.php');
    }
}


