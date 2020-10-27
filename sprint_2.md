### Taken
Mijn taak tijdens deze sprint was om mee te werken aan de pentest voor het Airscrubber project en hierbij een rapportage te maken. Deze rapportage 
heb ik gemaakt met meerdere studenten, maar hier heb ik wel het voortouw in genomen.
<br /> Tijdens de pentest heb ik de volgende dingen (mee) gevonden die benoemingswaardig zijn:
- Geen beveiliging op alle endpoints in de backend, als gebruiker met minder rechten kan je alle endpoints gebruiken. Dit moet wel met een geldig JWT token.
- Er zitten geen checks in de hele applicatie, vaak krijg je errors of erger nog. Er zit netjes een check of je een geldig JWT token hebt, **maar** niet bij wat voor
gebruiker dit hoort. Je kan dus alles met een gebruiker doen wat een administrator ook kan, zolang je maar een geldig JWT token hebt.
- Bij het aanmaken van sensoren, gebruikers en dergelijke kan je attributen weg/leeg laten en het systeem maakt het gewoon aan.
- De site scoort op [security headers](https://securityheaders.com/) een dikke onvoldoende!

De bijbehorende rapportage is <a class="downloadlink"onClick="passwd('./files/Airscrubber-Report.docx','Rapportage Airscrubber')">hier</a> te zien.

Verder ben ik officeel scrum master, dit wilde ik graag zelf om zo leiderschap te kunnen leren. <br />

### Review
Aan het einde van elke sprint wordt er teruggekeken op het functioneren van zowel de groep als de individuen. Het doel is om aan de feedback van mijn groepsgenoten te werken, 
met als doel om mij als professional te ontwikkelen. Het is de bedoeling dat ik bij elke sprint de feedback heb meegenomen en heb laten zien dat ik mezelf heb ontwikkeld.


