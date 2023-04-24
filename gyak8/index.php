<?php
    declare(strict_types=1)
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

Hi there!

<?php echo "Dynamic hello!" ?>
<?= "Simple echo" ?>

<?php
// Types
$bool = true;
$int = 7;
$float = 7.2;
$string = "szöveg";
$array = [4, 8, 12];
$callable = function() {}

?>

<?php
echo $string;
echo '<br>';
echo "part1" . "part2";
echo '<br>';
echo 5 + 10;
echo '<br>';
echo 5 <=> 3;
echo '<br>';
echo 9 ?? NULL ?? 8;
echo NULL ?? NULL ?? 8;
echo 1 ? 2 : 0;
echo 1 ?: 0; // 1 ? 1 : 0

echo "<br> gettype(bool):" . gettype(true);
echo "<br> gettype(int):" . gettype(5);
echo "<br> gettype(float):" . gettype(5.2);
echo "<br> gettype(string):" . gettype("szöveg");
echo "<br> gettype(array):" . gettype($array);
echo "<br> gettype(callable):" . gettype($callable);
echo "<br> is_callable(callable):" . is_callable($callable);

function even(array $array): array {
    $result = [];
    foreach ($array as $number) {
        if ($number % 2 == 0) {
            $result[] = $number;
        }
    }
    return $result;
}

function filter(array $array, callable $function): array {
    $result = [];
    foreach ($array as $number) {
        if ($function($number)) {
            $result[] = $number;
        }
    }
    return $result;
}

$numbers = [-2, 0, 5, 7, 19, 10, 12, -17, -11];
$evenNumbers = even($numbers);

echo "<br>Even numbers:";
foreach ($evenNumbers as $evenNumber) {
    echo '<br>' . $evenNumber;
}

$oddNumbers = filter($numbers, function($n) {
    return $n % 2 == 1;
});
echo "<br>Odd numbers:";
foreach ($oddNumbers as $oddNumber) {
    echo '<br>' . $oddNumber;
}

$positiveNumbers = array_filter($numbers, function($num) {
    return $num > 0;
});
echo "<br>Positive numbers:";
print_r($positiveNumbers);

// Data
$settings = [
    1 => [
        'name' => 'Theme',
        'type' => 'radio',
        'options' => [
            'light' => false,
            'dark' => true
        ]
    ],
    2 => [
        'name' => 'Mode',
        'type' => 'checkbox',
        'options' => [
            'mode1' => true,
            'mode2' => false,
            'mode3' => true
        ]
    ]
];
?>

<h3>Settings</h3>
<input type="radio" name="name" value="a" /> A
<input type="radio" name="name" value="b" /> B

<?php foreach($settings as $id => $setting): ?>
    <h3><?= $setting['name'] ?></h3>
    <?php foreach ($setting['options'] as $option => $checked): ?>
        <input type="<?= $setting['type'] ?>"
               name="<?= $setting['name'] ?>"
               value="<?php $option ?>"
                <?= $checked ? 'checked' : '' ?>/>
        <?= $option ?>
    <?php endforeach; ?>
<?php endforeach; ?>

<?php
    $background = $_GET['color'] ?? 'white';
?>
<style>
    html {
        background: <?= $background ?>;
    }
</style>

<a href="http://localhost:8000?color=green">Make me green!</a>






</body>
</html>
