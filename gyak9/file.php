<?php

$personsFile = fopen("persons.json", "r");

$personsAsString = fread($personsFile, filesize("persons.json"));
// echo $personsAsString;
$parsedPersons = json_decode($personsAsString, true);
print_r($parsedPersons);

fclose($personsFile);

?>