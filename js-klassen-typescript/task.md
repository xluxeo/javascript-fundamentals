Erstelle ein kleines Programm zur Verwaltung von Büchern in einer Bibliothek. Sie sollen eine Klasse Book und eine Klasse Library erstellen und folgende Anforderungen umsetzen.

Klasse Book:
Eigenschaften:
title (String): Der Titel des Buches.
author (String): Der Autor des Buches.
isbn (String): Die ISBN-Nummer des Buches.
Methoden:
constructor(title: string, author: string, isbn: string): Initialisiert die Eigenschaften.
getDetails(): Gibt die Details des Buches als String zurück im Format: "Title: [title], Author: [author], ISBN: [isbn]".


Klasse Library:
Eigenschaften:
books (Array von Book): Eine Liste von Büchern in der Bibliothek.
Methoden:
constructor(): Initialisiert die Liste der Bücher als leeres Array.
addBook(book: Book): Fügt ein Buch zur Bibliothek hinzu.
removeBook(isbn: string): Entfernt ein Buch aus der Bibliothek basierend auf der ISBN-Nummer.
