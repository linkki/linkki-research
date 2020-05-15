#!/bin/bash
main() {
  cd "$(dirname $0)"/..

  local mvurl='src="https://www.mv.helsinki.fi/home/lawkaita/more/linkki/img'
  local localurl='src="../img'
  local direction=(
    "$localurl"
    "$mvurl"
  )
  local re="${direction[0]}"
  local subs="${direction[1]}"

  
  local rc
  find . \( -name "*.html" -o  -name "*.js" \) | 
  while read file
  do
    echo "$file"
    grep -n -i "$re" "$file"
    rc=$?
    if [ "$rc" == 0 ]; then
      sed -i -e "s|""$re""|""$subs""|g" "$file"
      echo '->'
      grep -n -i "$subs" "$file" 
    fi
  done
}
main
