<?php
    function checkNum($num){
        return ($num%2)?true:false;
    }
    $num=$_GET['n'];
    if(checkNum($num)){
        echo '奇数';
    }else{
        echo '偶数';
    }
?>