always();

async function always() {
    document.getElementById('header').innerHTML += await (await fetch('header.html')).text();
    document.getElementById('footer').innerHTML += await (await fetch('footer.html')).text();
    document.getElementById('head').innerHTML += await (await fetch('head.html')).text();
}

