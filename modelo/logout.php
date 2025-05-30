<?php
session_start();
session_destroy();
header('location: ../../vista/home/home.php');
exit();
?>