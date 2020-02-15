BEGIN {
    nav="\t\t\tJäsää lapsille";
    for (i=1;i<=5;i++) {
        nav = nav "\n\t\t\t· <a href=\"../osa" i "/osa" i ".html\">Osa " i "</a>";
    }
    nav = nav "\n\t\t\t· <a href=\"../projektit/projektit.html\">Projektit</a>";
    innav = 0;
}

/<nav>/ {
    print $0;
    print nav;
    innav = 1;
}

{
    if (!innav) print $0;
}

/<\/nav>/ {
    print $0;
    innav = 0;
}