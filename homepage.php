<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wetterdaten</title>
</head>

<body>

    <h1>Homepage</h1>

    <div id="view">Weather...</div>
    <div id="lat"></div>
    <div id="lon"></div>
    
    <?php

        // $data = file_get_contents('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7a0b654c530be664fd77cf116ebd6626');
        // echo $data;

    ?>

    <script src="js/weather.js"></script>
    
</body>

</html>