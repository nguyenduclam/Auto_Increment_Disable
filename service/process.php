<?php
	//include 'database.php';
	$conn = mysqli_connect('localhost', 'root', '', 'update_id_latlng');
	if (mysqli_connect_errno()) {
		echo 'Failed to connect';
	}
	//echo("wow");
	$lat = $_POST['lat'];
	$lng = $_POST['lng'];
	//echo($lat);
	$result = mysqli_query($conn, "SELECT * FROM Test");
	$row = mysqli_num_rows($result);
	
	$query0 = "INSERT INTO Test VALUES(1, '$lat', '$lng')";
	$queryNULL = "INSERT INTO Test VALUES(($row + 1), '$lat', '$lng')";

	if ($row == 0) {
		mysqli_query($conn, $query0);
	} else {
		mysqli_query($conn, $queryNULL);
	}

	if (mysqli_affected_rows($conn) > 0) {
		echo "<p>Success</p>";
		echo "<a href='../index.html'>Go Back</a>";
	} else {
		echo "Failed";
		echo mysqli_error($conn);
	}
?>