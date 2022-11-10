const quotes = ['Šta možeš reći tokom seksa i sahrane - prvo ide najuža rodbina',
'Ja da imam toliki kurac, išao bih okolo i kadio ljude',
'Nije imala ruke, al\' dobro je drkala',
'Vrijeme leti kad se zabavljaš ili si u komi',
'Jovana pije čaj:\'To ti je jedina trava koju nisi zapalila\'',
'Eto zašto nemaš seks, zato što izbjegavaš svaku investiciju',
'Poderana joj koljena do kukova',
'Akcija za malu djecu: Udomi, ne pravi',
'Ja uopšte ne jebem koliko bih htio',
'Do koje ste tačke išli? Do G tačke!',
'Kod nas iz vrtića na pornić idu',
'Ja sam bogataš u pokušaju',
'Sva prespremna stavila masku u teretani jer čuva poslovni prostor',
'Ja se rastočim kao kilo baruta, a vi k’o ugalj za roštilj',
'Pjevala je od Pavarottija - O dole mio',
'Veju veju pahulje, mraz po staklu šara, stiže nova godina, kara ti se stara',
'Ona i pršće zato što joj je kateter oslabio',
'Bolje biti mamuran od poroka, nego od proroka',
'E ne bacam vatrice, totalno sam devatrizir’o',
'Sir je u stvari ustajala kravlja izlučevina',
'Witcher svako može igrati. To je walking simulator',
'Koeficijent inteligencije mi je skočio za 50%. Bio je 3, sad je 4',
'Da li vam je seks bio gramatički ispravan?',
'Ako je to mjerilo bjeline, žuta je promjenila svoj opis',
'Ona nije Kleopatra, ona je njena retardirana sestra',
'Pa može i kurva da stane u frižider ako je dobro narežeš',
'Ti ne možeš zaspati zato što ti nedostaje neka aktivnost koja troši energiju, a to je nabijanje na kurac. A imaš simulaciju toga na treningu',
'Ponudiš je rakijom, al’ je držiš za grkljan da malo promješa prije nego što se ljubi s tobom',
'Bolje da si se paskala nego praksala',
'Ozbiljan razgovor je samo ako je seksualno orijentisan. Sve drugo je pametovanje',
'Šta možeš reći tokom seksa i sahrane - prvo ide najuža rodbina',
'Ja da imam toliki kurac, išao bih okolo i kadio ljude',
'Nije imala ruke al’ dobro je drkala',
'Vrijeme leti kad se zabavljaš. Ili kad si u komi',
'Snježana i sedam Turaka',
'Incest sijamskih blizanaca, spojenih glavom',
'Kupam se u sluzu, svršavam po guzu',
'Kako se zove kuća bez vina? Nevina',
'Kako se zove Zoran koji sve uništava? Razoran',
'Daje na kašiku, prima na kutlaču']

let placeForQuotes = document.getElementById('quote-place')

function dailyQuotes (){
    let quotesFromSait = Math.floor(Math.random() * (quotes.length))
    //document.write(quotes[quotesFromSait])
    placeForQuotes.textContent = quotes[quotesFromSait]
}

document.addEventListener('load', dailyQuotes()) 