<?php $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
      $lang = isset($_GET['lang']);
    if ($lang == 'fr' ) // français
    {
        include_once('langues/fr.php');
    }
    if ($lang == 'en') // anglais
    {
        include_once('langues/en.php');
    }
    if ($lang == 'nl') // néerlandais
    {
        include_once('langues/nl.php');
    }
    if ($lang == 'es') // espagnol
    {
        include_once('langues/es.php');
    }
    if ($lang == 'de') // allemand
    {
        include_once('langues/de.php');
    }
    if ($lang == 'ca') // catalan
    {
        include_once('langues/ca.php');
    }
    if ($lang == 'zh') // chinois
    {
        include_once('langues/zh.php');
    }
    if ($lang == 'da') // danois
    {
        include_once('langues/da.php');
    }
    if ($lang == 'et') // estonien
    {
        include_once('langues/et.php');
    }
    if ($lang == 'fi') // finlandais
    {
        include_once('langues/fi.php');
    }
    if ($lang == 'el') // grec
    {
        include_once('langues/el.php');
    }
    if ($lang == 'it') // italien
    {
        include_once('langues/it.php');
    }
    if ($lang == 'pl') // polonais
    {
        include_once('langues/pl.php');
    }
    if ($lang == 'pt') // portugais
    {
        include_once('langues/pt.php');
    }
    if ($lang == 'ro') // roumain
    {
        include_once('langues/ro.php');
    }
    if ($lang == 'ru') // russe
    {
        include_once('langues/ru.php');
    }
    ?>