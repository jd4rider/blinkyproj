var ind = '';
var abt = '';
var cont = '';
var funstuff = '';
var proj = '';
var titleembelish = '';

if(location.pathname == '/website/index.php') {ind = 'active'; titleembelish = ''; }
else if(location.pathname == '/website/about.html') {abt = 'active'; titleembelish = ' - About';} 
else if(location.pathname == '/website/contact.html') {cont = 'active'; titleembelish = ' - Contact';}
else if(location.pathname == '/website/guessthestory.html') {funstuff = 'active'; titleembelish = ' - FunStuff';}
else {proj = 'active'; titleembelish = ' - Projects';}

jumbotronhtml = `
<div class="jumbotron jumbotron-fluid" style="height: 450px; background-image:url('images/header.jpg'); background-repeat: no-repeat; background-position: 55% 45%; background-size: cover;">
  <div class="container" style='color: white; padding-top: 70px !important;'>
    <h1>Jonathan Forrider `+titleembelish+`</h1> 
    <p>Welcome to the site about me.</p> 
  </div>
</div>`

navbarhtml = `
<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
    <div class="container">
      <a class="navbar-brand" href="index.php"><img class="grow" src="images/me.jpeg" width=auto height="32"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item `+ind+`" >
            <a class="nav-link" href="index.php">Home<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item `+abt+`">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item `+cont+`">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
          <li class="nav-item `+funstuff+`">
            <a class="nav-link" href="guessthestory.html">Funstuff</a>
          </li>
          <li class="nav-item dropdown `+proj+`">
            <a class="nav-link dropdown-toggle" href="/projects.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/projects.html">All Projects</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <!--<form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search" aria-label="Search">
        </form>-->
      </div>
    </div>
  </nav>
  <script>
        $(".nav-item li").click(function() {
            $(".nav-item li").removeClass('active');
            $(this).addClass('active');
        });
  </script>`
    
contactformhtml = `
<form class="needs-validation" method="POST" action="https://formspree.io/jd4rider@gmail.com" novalidate>
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" aria-describedby="firstName" name="fname" placeholder="First Name" required>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
          Please enter your First Name.
      </div>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" aria-describedby="lastName" name="lname" placeholder="Last Name" required>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
          Please enter your Last Name.
      </div>
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Your Email" required>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
          Please enter a valid Email.
      </div>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="text" data-validation="custom" data-validation-regexp="/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/" class="form-control" id="phone" aria-describedby="phoneNumber" name="phone" placeholder="Your Phone" required>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
          Please enter your Phone Number.
      </div>
      <br>
      <div class="form-group">
        <label for="comment">Comments</label>
        <textarea class="form-control" name="comment" id="comment" rows="3" required></textarea>
      </div>
      <div class="valid-feedback">
        Looks good!
      </div>
      <div class="invalid-feedback">
          Please enter a Comment.
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <script>
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();
    </script>`
    
$("navbar").html(navbarhtml);
$("contactform").html(contactformhtml);
$("jumbotron").html(jumbotronhtml);
$("projects").html(projectshtml);

function telephoneCheck(str) {
  //var x = document.getElementById('phone').value;
  //alert(x);
  return (/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/.test(str));
 }
