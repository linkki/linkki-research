#!/bin/zsh

dir=$(dirname $0)

find . -name "*.html" | while read file
do
	printf "Käsitellään $file... "
	cat $file | awk -f $dir/tee-nav.awk >/tmp/tee-nav.temp
	cat /tmp/tee-nav.temp >$file
	printf "OK\n"
done
