<?php

interface PersonsApi {
    function getPersons(): array;
    function getPersonsOverAge(int $age): array;
}

abstract class PersonsFromWhatever implements PersonsApi {
    abstract function getPersons(): array;

    function getPersonsOverAge(int $age): array {
        $result = [];
        foreach ($this->getPersons() as $person) {
            if ($person['age'] >= $age) {
                $result[] = $person;
            }
        }
        return $result;
    }
}

class PersonsFromCSV extends PersonsFromWhatever {
    function getPersons(): array {
        $personsFromCsv = [];
        $personsFromCsvFile = fopen('persons.csv', 'r');

        $headers = fgetcsv($personsFromCsvFile, NULL, ',');
        while($row = fgetcsv($personsFromCsvFile, NULL, ",")) {
            $personsFromCsv[] = array_combine($headers, $row);
        }

        fclose($personsFromCsvFile);
        return $personsFromCsv;
    }
}

class PersonsFromJSON extends PersonsFromWhatever {
    function getPersons(): array {
        return json_decode(file_get_contents('persons.json'), true);
    }
}


$personsCSVApi = new PersonsFromCSV();
$personsJSONApi = new PersonsFromJSON();
print_r($personsCSVApi->getPersons());

?>

<h1>All persons</h1>

<ul>
<?php foreach($personsCSVApi->getPersons() as $person): ?>
    <li>
        <?= $person['name'] ?>
    </li>
<?php endforeach; ?>
</ul>

<ul>
<?php foreach($personsJSONApi->getPersons() as $person): ?>
    <li>
        <?= $person['name'] ?>
    </li>
<?php endforeach; ?>
</ul>



