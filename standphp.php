<?php
$link = mysqli_connect("localhost", "root", "123", "signupdata");
if (mysqli_connect_error()) {
    echo "error";
}

$name = $_POST['username'];
$password=$_POST['pass'];
$query="select * from adminlog where Username='$name' ";
$result=mysqli_query($link,$query);
$temp=mysqli_fetch_assoc($result);
$user=$temp['Username'] ;
$pass=$temp['Password'];
$filename ="";
$tempname ="";
if($name==$user&&$password==$pass)
{
  // header("Location:admin.html");
 echo  "<form action='' method='POST' enctype='multipart/form-data'>
  <input type='file' value='' name='choose1' id='uploadtime'>
  <input type='submit' value='Upload' name='submit'  id='uploadsubmit'>    
  </form>" ;  
  $filename=$_FILES["choose1"]["name"];
  $tempname =$_FILES["choose1"]["tmp_name"];
  echo "<h1>$filename</h1>";
  
}
else
{
    echo "wrong username or password";
}

   
 ?>