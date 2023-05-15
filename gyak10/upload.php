<?php
print_r($_FILES);
if (!empty($_FILES)) {
    $fileContent = file_get_contents($_FILES['thefile']['tmp_name']);
    echo nl2br($fileContent);
}

?>

<form method="post" enctype="multipart/form-data">
    Upload file: <input type="file" name="thefile"/>
    <button type="submit">Upload file</button>
</form>


