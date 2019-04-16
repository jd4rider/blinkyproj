<!--
This code contains contains both the rendered user side html and server side php.
When a browser hits the /website folder it renders the index.php html code to the 
browser.
-->

<html>
    <head>
        <title>Jonathan Forrider</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1">
        <link rel="stylesheet" type="text/css" href="css/style.css" />
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body style="margin:0px;">
        <navbar></navbar>
        <jumbotron></jumbotron>
        <div class='container'>
        <form  action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
        <fieldset class="form-group">
        <legend>Control that pi...</legend>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="GPIOcontrol" id="optionsRadios1" value="s" checked>
                Check status of the light
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="GPIOcontrol" id="optionsRadios2" value="o">
                Turn on the light
                </label>
            </div>
            <div class="form-check disabled">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="GPIOcontrol" id="optionsRadios3" value="f">
                Turn off the light
                </label>
            </div>
            <div class="form-check disabled">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="GPIOcontrol" id="optionsRadios3" value="b">
                Blink Light Twice
                </label>
            </div>
            <div class="form-check disabled">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="GPIOcontrol" id="optionsRadios3" value="t">
                Check the Temperature
                </label>
            </div>
        </fieldset>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    </body>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/templates.js"></script>
</html>

<?php
/**************************************
  Server Side php scripting
  Re-posts back to same page
****************************************/ 
    $input = "";
    $output = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST"){
	$input = "./blinky"." ".$_POST["GPIOcontrol"];
    //echo $input."<br>";
    exec($input, $output);
    if ($_POST["GPIOcontrol"]=="s")
	   echo "<div class='container'>".$output[0]."</div>";
	if ($_POST["GPIOcontrol"]=="o")
	   echo "<div class='container'>Turn Light On<br></div>";
    if ($_POST["GPIOcontrol"]=="f")
	   echo "<div class='container'>Turn Light Off<br></div>";
    if ($_POST["GPIOcontrol"]=="t")
	   echo "<div class='container'>".$output[0]."</div>";
	if ($_POST["GPIOcontrol"]=="b"){
	   echo "<div class='container'>Light Blinked 2 Times<br></div>";	   
	}
  }
?>
