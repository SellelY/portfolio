<?php

ini_set("display_errors", 1);
    $json = file_get_contents("index.json");
    $data = json_decode($json, true);

    if ($data === null) {
        echo json_encode (["error" => "Failed to parse JSON data"]);
        exit;
    }

    $response = [
        "projects" => []
    ];

    foreach ($data["projects"] as $project) {
        $response["projects"][] = [
            "name" => $project["name"],
            "image" => $project["image"]
        ];
    }

    header("Content-Type: application/json");
    echo json_encode($response, JSON_PRETTY_PRINT);

?>