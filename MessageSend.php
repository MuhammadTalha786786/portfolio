<?php


      include 'main.php';
      session_start();
      session_unset();//unset all the variables
      session_destroy();//destroy the session
      session_abort();
      print_r("New Variable");

?>