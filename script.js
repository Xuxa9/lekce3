//ockovani
const jmeno = prompt("Zadejte své jméno a přijímení", "Jan Novák")
const vek = Number(prompt("Zadejte svůj věk",28))

document.body.innerHTML += jmeno + ", " + "věk: " + vek

//vyplata
const dotazMzda = Number(prompt("Zadejte svojí hodinovou sazbu v korunách",300))
const mzda = dotazMzda * 8 * 21
document.body.innerHTML += "Vaše hrubá mzda je " + mzda + "Kč."

//vyplata 2
const dotazMzda2 = Number(prompt("Zadejte svojí hodinovou sazbu v korunách",300))
const hodiny = Number(prompt("Zadejte kolik hodin denně pracujete",8))
const dny = Number(prompt("Zadejte kolik dnů v měsíci pracujete",21))
document.body.innerHTML += "Vaše hrubá mzda je " + dotazMzda2 * hodiny * dny + "Kč."
