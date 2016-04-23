<?php
    if($_GET["action"] == "search"){
        header("Content-type:text/json");
        $list = array(
            array("Code"=>"1001","Name"=>"孙明明","Score"=>"90"),
            array("Code"=>"1002","Name"=>"李明明","Score"=>"80"),
            array("Code"=>"1003","Name"=>"范明明","Score"=>"70")
        );
        echo json_encode($list);
    } elseif ($_GET["action"]=="save"){
        if($_POST["key"]=="1010"){
            echo "1";
        }else{
            echo "0";
        }
    }
?>