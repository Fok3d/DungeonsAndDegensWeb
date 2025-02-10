<?php
    
    $title = "Dungeons & Degens";
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1><?php echo $title; ?></h1>
        <nav>
            <ul>
                <li><a href="#">Domů</a></li>
                <li><a href="#">Pravidla</a></li>
                <li><a href="#">Vytvořit postavu</a></li>
                <li><a href="#">Příběhy</a></li>
                <li><a href="#">Kontakt</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>Vítejte ve světě Dungeons & Degens!</h2>
            <p>Vydejte se na epické dobrodružství, bojujte s nestvůrami a objevujte tajemné světy.</p> <!-- Made by ai--->
            <a href="game.php" class="btn">Začít hrát</a>
        </section>
    </main>
    <footer>
        <p>&copy; <?php echo date("Y"); ?> Dungeons & Degens. Všechna práva vyhrazena (mrdky).</p>
    </footer>
</body>
</html>