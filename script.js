//ockovani
const jmeno = prompt("Zadejte své jméno a přijímení", "Jan Novák")
const vek = Number(prompt("Zadejte svůj věk",28))

document.body.innerHTML += jmeno + ", " + "věk: " + vek

//vyplata
const dotazMzda = Number(prompt("Zadejte svojí hodinovou sazbu v korunách",300))
const mzda = dotazMzda * 8 * 21
document.body.innerHTML += "Vaše hrubá mzda je " + mzda + "Kč"
