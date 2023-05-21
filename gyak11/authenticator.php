<?php

class UserStorage {

    // @note The password is password
    function findUser($username, $password): array {
        return array_filter($this->getUsers(), fn($user) => $user['username'] == $username && $user['password'] == md5($password));
    }

    function getUsers(): array {
        return json_decode(file_get_contents('users.json'), true);
    }
}
