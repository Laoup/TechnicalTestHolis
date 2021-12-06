# TechnicalTestHolis

## API

1-> Aller dans le répertoire /api et entrez dans le terminal la commande  
```
yarn install package.json
```

2-> [Installez PhpMyAdmin](https://doc.ubuntu-fr.org/phpmyadmin)

3-> Ouvrez le fichier .env.sample et renseignez les champs DB_NAME; DB_USER; DB_PASSWORD
DB_USER & DB_PASSWORD sont vos informations login/mdp pour vous connecter a votre session PhpMyAdmin

4-> Dans votre session PhpMyAdmin créez une base de donnée du même nom que celui renseigné pour DB_NAME

5-> Lancez l'api avec la commande ``` yarn start:dev ```

## Website

1-> Aller dans le répertoire /website et entrez dans le terminal la commande  
```
yarn install package.json
```

2-> Lancez le serveur web avec la commande ``` yarn dev ```