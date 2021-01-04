### Workspace
Al jaren lang gebruik ik voor mijn eigen host laptop een Windows. Dit bevalt me wel goed, alleen begin
ik hier toch aan te twijfelen. Sinds ik cyber security doe, ben ik veel bezig met Linux systemen. Als voorbeeld Kali Linux, 
een van de vele offensieve beveiligingsprojecten - gefinancierd, ontwikkeld en onderhouden als een gratis en open-source penetratietestplatform. Kali Linux
is gebaseerd op Debian en dit is een Unix-achtig besturingssysteem en werkt als een Linux.

Sinds ik daar zoveel mee bezig ben begin ik te twijfelen aan Windows. Ook nu ik mijn Kali Linux terminal via ZSH heb ingesteld, ben ik helemaal verkocht.
ZSH is een super overzichtelijke en handige shell in vergelijking met bash. ZSH heb ik naar mijn eigen voorkeur ingesteld en heb ik
[Oh-My-ZSH](https://github.com/ohmyzsh/ohmyzsh) en [powerlevel10k](https://github.com/romkatv/powerlevel10k) geinstalleerd. Wat betreft mijn voorkeur en gezien
mijn toekomst als cyber security professional, ga ik deze zomer wellicht mijn computer ombouwen zodat het gebaseerd is op
Linux.

## VMware Workstation Pro
VMware Workstation Pro is een gehoste hypervisor die draait op Windows- en Linux-besturingssystemen.
Het stelt gebruikers in staat virtuele machines op een enkele fysieke machine in te stellen en deze gelijktijdig met de hostmachine te gebruiken.

De virtuele machines die ik gebruik zijn Kali Linux, Windows en Protostar.
Kali Linux gebruik ik om pentesten mee uit te voeren en Windows gebruik ik vaak als slachtoffer om PoC's mee te testen.
Als laatste gebruik ik Protostar om aanvalstechnieken als buffer overflow en binary exploitation mee te oefenen.

### Kali Linux
De VM die ik het meeste gebruik is Kali Linux. Tijdens dit semester heb ik veel geleerd, zo heb ik ook
mijn eigen Kali Linux machine ingesteld en tools geïnstalleerd. 

De tools die ik zelf ik gebruik zijn hierdoor uitgelegd:

#### Reverse engineering
Voor reverse engineering heb ik best een set aan tools geïnstalleerd.
Deze tools zijn gericht op het uitlezen van gedecompileerde bestanden, het verkrijgen van jar bestanden of het decoderen van resources.

Tools als [Ghidra](https://ghidra-sre.org/) en [IDA](https://www.hex-rays.com/products/ida/) gebruik ik voor het uitlezen van gedecompileerde bestanden.
Ghidra probeert zoveel mogelijk de originele code te reconstrueren, dit gebruik ik bij bijvoorbeeld java klasses. 
IDA gebruik ik om software om te zetten naar assembly code. IDA is mijn favoriet, aangezien de UI van deze
tool heel fijn is om te gebruiken. Zelf heb ik de IDA Pro versie voor zowel 32 - als 64-bit bestanden.

Verder heb ik nog tools als [dex2jar](https://github.com/pxb1988/dex2jar), om ```.dex``` bestanden naar een ```.jar``` bestand te converteren.
De [apktool](https://ibotpeaches.github.io/Apktool/) voor het decoderen van ``.apk`` bestanden. [DnSpy](https://github.com/dnSpy/dnSpy) gebruik ik voor het verkrijgen van assembly code vanuit ``.NET``
bestanden. Ook dient dit als een debugger. Verder gebruik ik [JD gui](https://tools.kali.org/reverse-engineering/jd-gui) voor het decompileren van java bestanden, maar mijn voorkeur gaat uit toch uit naar
IDA.

#### Phishing
Wat betreft phishing heb ik twee tools gebruikt, [GoPhish](https://getgophish.com/) en [SET](https://github.com/trustedsec/social-engineer-toolkit) Beide tools bieden de functionaliteit om phishing uit te voeren.
SET daarentegen heeft naar mijn mening een stuk meer mogelijkheden dan GoPhish. Beide heb ik gebruikt en 
om die reden kan ik zeggen dat de voorkeur uit gaat naar SET. 

De reden is, omdat ik GoPhish niet vertrouw met de data die ze krijgen.
Alle data die je binnen krijgt via een phishing mail gaat via GoPhish, maar nergens staat wat zij doen met deze data. Wel heeft GoPhish
een fijne en duidelijke UI. SET daarentegen heeft alleen een command line interface, maar dit ben ik toch gewend.

#### Cyber kill chain
Verder heb ik nog tools geïnstalleerd die gecategoriseerd kunnen worden op basis van de cyber kill chain.

**Reconnaissance** <br/>
Tools die ik voor deze fase geïnstalleerd heb zijn: [Gobuster](https://github.com/OJ/gobuster), [dirbuster](https://tools.kali.org/web-applications/dirbuster) en [Sublist3r](https://github.com/aboul3la/Sublist3r).
De eerste twee tools gebruik ik om directories, bestanden, subdomeinen en virtual host names mee te brute-forcen. Zo krijg je een snel overzicht over wat de applicatie allemaal bevat.
Hierin heeft Gobuster mijn voorkeur aangezien deze het snelst en handigst werkt.

Sublist3r gebruik ik nog extra om subdomeinen en websites mee te brute-forcen.

**Exploitation**<br/>
In de exploitatie fase gebruik ik een aantal tools [Evil winrm](https://github.com/Hackplayers/evil-winrm), [Shellter](https://www.shellterproject.com/download/), [AutoIt](https://www.autoitscript.com/site/) en [msfvenom](https://www.offensive-security.com/metasploit-unleashed/msfvenom/).
Evil winrm gebruik ik om een reverse shell connectie op te zetten met een windows machine, omdat je via de windows command line niet van gebruiker kan wisselen.
Om een payload te genereren gebruik ik Shellter of msfvenom. Met shellter kan je shellcode injecteren in native Windows apllicaties en met msfvenom kan je je eigen payload maken en genereren.
Met AutoIt kan je scripts maken die gecompiled kunnen worden voor Windows Powershell.

**Privelege Escalation** <br/>
Voor privelege escalation heb ik twee tools namelijk [WinPEAS](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/winPEAS) en [LinPEAS](https://github.com/carlospolop/privilege-escalation-awesome-scripts-suite/tree/master/linPEAS). Beide checken voor mogelijke uitbuitingen in privileges van een machine.
WinPEAS doet dit voor windows en LinPEAS voor Linux.

#### Algemeen
Algemene tools die ik gebruikt heb zijn [pip](https://pip.pypa.io/en/stable/), [Postman](https://www.postman.com/) en [BurpSuite](https://portswigger.net/burp). Alle drie zijn ze onmisbaar in mijn toolset.
Zo gebruik ik pip om packages van python te installeren op mijn Kali. Aangezien ik dagelijks gebruik maak van Python is dit niet te missen in mijn toolset.
Verder Postman, dit is een tool die ik gebruik bij elk onderzoek die gebruik maakt van API's. Via deze tool kan je eigen API calls maken en
hiermee dus een fuzzing test uitvoeren op de endpoints. Als laatst heb ik ook nog BurpSuite, de rode draad van het pentesten.
BurpSuite gebruik ik bij elke pentest, met deze tool kan HTTP verkeer worden onderschept en aangepast. Hierdoor kan ik fuzzing testen uitvoeren op de applicatie.

Verder heb ik ook nog zelf scripts gemaakt tijdens Hack The Box machines. Als voorbeeld heb ik 
een script gemaakt die op basis van SQL-injection het wachtwoord achterhaald van de gebruikers van een applicatie.

