#!/bin/bash
#
# en jaksa opetella tätä ulkoa 
# sekä kirjoittaa sitä joka kerta 
# joten teen siitä tänne skriptin :)

main() {
  cd "$(dirname $0)"/..  # toimii väärin symlinkeillä
  
  local port=8080
  if [ "$1" ]; then
    port="$1"
  fi
  
  echo osoite:
  echo http://localhost:"$port"/osa1/osa1.html
  python3 -m http.server --bind 127.0.0.1 "$port"
}

main "$@"

