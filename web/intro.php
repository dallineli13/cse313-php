<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/base.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h2>Golf Club Selection</h2>
    </header>
    <main>
    <?php echo date("D M d, Y G:i a"); ?>
        <p>Hover over the image to input a yardage. We will then calculate the club that most professional golfers would use to get the ball close! </p>
        <div class='wrap'>
            <img src="images/golf.jpg">
            <div id='ydg' class="hidden">
                <label>Yardage: <input type='number'></label>
                <button onclick="getClub()">Get Club!</button>
                <div id='club'></div>
            </div>
        <div>
    </main>
    
</body>
<script src='js/week2.js'></script>
</html>