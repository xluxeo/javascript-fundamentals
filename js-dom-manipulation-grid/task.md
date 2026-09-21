Es soll das Dojo fortgeführt werden. Hier der aktuelle Stand:
https://codepen.io/jessef/pen/ExKNoWW?editors=1100

Ziele:
- Grid und Elemente erstellen (siehe Screen) -> im Dojo bereits erledigt
- Bei Klick auf den Button "Noch ein Grid Item" soll ein weiteres Grid Item mit einem Default Text in das bestehende Grid eingefügt werden
- Bei Klick auf den Button "Ein Grid Item weniger" soll das letzte Grid Item entfernt werden

Zusatz:
- Es soll der Text aus dem Input Feld entnommen werden und in das neue Grid Item eingesetzt werden
- Es soll nur ein Item entfernt werden, wenn auch wirklich mindestens eins existiert (damit keine Fehlermeldung in der Console steht)
- Es soll für jedes neue Grid Item eine Farbklasse gesetzt werden. Diese Klasse gibt das Dropdown "Farbe wählen" vor. Wenn also "red" gewählt wird, soll die CSS Klasse red dem Grid Item hinzugefügt werden (und im CSS dann entsprechend gestylt (z.B. Hintergrundfarbe oder Border)
- Es soll ein zusätzlicher Button mittels document.createElement in das Dom eingefügt werden (direkt nach dem Button "Ein Item weniger!"), welcher beim Klick das Grid entfernt und stattdessen alle vorhandenen Grid Items in eine unordered list umwandelt (jedes Grid Item ist demnach dann ein List Item)

Hilfreiche Links:
createElement
appendChild
querySelector
value von Input/Select auslesen
innerText setzen
remove Element entfernen
classList Klasse setzen/entfernen etc.
CSS Selector last child

Tipps für die Basis Aufgaben:
- Erstellt für die beiden Buttons einen EventListener (click)
- Erstellt (createElement) darin ein neues Div, speichert dies in einer Variable. Fügt dann an dessen classList o-grid__item hinzu und appended dann das Div an das Grid, welches ihr per querySelector erhaltet
- Beim Entfernen holt ihr euch mittels querySelector das letzte Grid Item und removet es dann
