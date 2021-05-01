<?php
/*
*  Copyright (c) Codiad & Kent Safranski (codiad.com), distributed
*  as-is and without warranty under the MIT License. See
*  [root]/license.txt for more. This information must remain intact.
*/
//////////////////////////////////////////////////////////////////
// CONFIG
//////////////////////////////////////////////////////////////////
// PATH TO CODIAD
define("BASE_PATH", "/opt/www/");
// BASE URL TO CODIAD (without trailing slash)
define("BASE_URL", "localhost");
// THEME : default, modern or clear (look at /themes)
define("THEME", "default");
define("WHITEPATHS", BASE_PATH);
// SESSIONS (e.g. 7200)
$cookie_lifetime = "0";
// TIMEZONE
date_default_timezone_set("America/Chicago");
// Allows to overwrite the default language
//define("LANGUAGE", "en");
// External Authentification
//define("AUTH_PATH", "/path/to/customauth.php");
//////////////////////////////////////////////////////////////////
?>
