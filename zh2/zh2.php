<?php
function readBooksFromCSV(string $filename): array {
    $result = [];
    $booksFromCSVFile = fopen($filename, "r");
    $headers = fgetcsv($booksFromCSVFile, NULL, ",");
    while($row = fgetcsv($booksFromCSVFile, NULL, ",")) {
        $result[] = array_combine($headers, $row);
    }
    fclose($booksFromCSVFile);
    return $result;
}

$booksFromCSV = [];
$errors = [];
$filename = 'm_books.csv';

# 1.1

# 1.2
# 1.3
# 1.4

# 1.5

?>

<form method="post">
    <div>
        Cím: <input type="text" name="title" />
        <!-- # 1.2 -->
    </div>
    <div>
        Szerző: <input type="text" name="author" />
        <!-- # 1.3 -->
    </div>
    <div>
        Megjelenési év: <input type="number" name="release" />
        <!-- # 1.4 -->
    </div>

    <button type="submit">Könyv mentése</button>
</form>

<!-- # 1.6 -->

<!-- # 1.7 -->

<!-- # +1 -->
