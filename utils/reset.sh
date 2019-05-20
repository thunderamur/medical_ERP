#!/usr/bin/env bash

# Try 'utils/reset.sh' to run.
# 'utils/reset.sh OPTION[0..8]' to run with preselected option and exit.

if [[ $0 != "utils/reset.sh" ]]; then
    echo "Try 'utils/reset.sh'"
    exit
fi

if [ -n "$1" ]; then
    CHOICE=$1
fi

chmod +x utils/*

while true
do
    if [ -z "$1" ]; then
        echo "Enter 'help' for show legend"
        read -p "Choose action > " CHOICE
    fi
    case "$CHOICE" in
        "help" )
                echo "0 - 1-6"
                echo "1 - Drop DB"
                echo "2 - Create DB"
                echo "3 - Remove migrations"
                echo "4 - Make migrations"
                echo "5 - Apply migrations"
                echo "6 - Fill DB"
                echo "7 - Dump DB"
                echo "8 - 1256"
                echo "Any other key to exit"
        ;;
        0 )
            utils/postgres_db_drop.sh
            utils/postgres_db_create.sh
            utils/remove_migrations.sh
            python3 manage.py makemigrations
            python3 manage.py migrate
            python3 manage.py loaddata dump.json
            python3 manage.py fill_db
            break
        ;;
        1 ) utils/postgres_db_drop.sh;;
        2 ) utils/postgres_db_create.sh;;
        3 ) utils/remove_migrations.sh;;
        4 ) python3 manage.py makemigrations;;
        5 ) python3 manage.py migrate;;
        6 )
            python3 manage.py loaddata dump.json
            python3 manage.py fill_db
        ;;
        7 ) python3 manage.py dumpdata -e=contenttypes -e=authtoken.token -o dump.json;;
        8 )
            utils/postgres_db_drop.sh
            utils/postgres_db_create.sh
            python3 manage.py migrate
            python3 manage.py loaddata dump.json
            python3 manage.py fill_db
            break
        ;;
        * ) break;;
    esac
    if [ -n "$1" ]; then
        break
    fi
done
