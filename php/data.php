<?php
    header("Content-type:text/json");
    $stulist=array(
        array("Code"=>"10101","Name"=>"全真真","Score"=>"80"),
        array("Code"=>"10102","Name"=>"张明基","Score"=>"82"),
        array("Code"=>"10103","Name"=>"郐虎","Score"=>"78"),
        array("Code"=>"10104","Name"=>"周小敏","Score"=>"89"),
        array("Code"=>"10105","Name"=>"际明明","Score"=>"93")
    );
    echo json_encode($stulist);
?>