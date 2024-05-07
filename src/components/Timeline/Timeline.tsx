import Dialog from "../Dialog/Dialog.tsx";

const Timeline = () => {
  return (
    <div className="z-20 flex items-center justify-center">
      <div className="w-[1300px] h-[10px] relative">
        <div className="w-full h-4 bg-[#ec663a] flex items-center justify-around rounded-full">
        <Dialog year="1964" title="Mariner 4 - 28 novembre 1964" description="Mariner fù la prima sonda a visitare Marte, passò a 9844 km dal pianeta e scattò 22 immagini."></Dialog>
        <Dialog year="1971" title="Mars 2 e Mars 3 - 27 novembre 1971" description="Mars 2 fu il primo veicolo spaziale a orbitare intorno a Marte. Mars 3 riuscì a far atterrare un lander sulla superficie, operativo solo per 20 secondi a causa di una tempesta di polvere marziana."></Dialog>
        <Dialog year="1975" title="Sonde gemelle Viking - 20 agosto 1975" description="Negli anni '70, le sonde Viking, formate da un orbiter e un lander ciascuna, catturarono le prime immagini dettagliate di Marte, rivelando un paesaggio desertico simile alla tundra terrestre per temperatura. Gli orbiter mapparono circa il 97% del pianeta."></Dialog>
        <Dialog year="1996" title="Mars Pathfinder - 4 dicembre 1996" description="Dopo le sonde Viking, l’esplorazione di Marte si interruppe e riprese solo negli anni novanta. Nel 1996 prese piede la missione Pathfinder, che trasportava a bordo il piccolo rover Sojourner. Da allora il principale obiettivo è stato verificare se sul pianeta esistono, o sono esistiti in passato, microrganismi o altre forme elementari di vita."></Dialog>
        <Dialog year="2000" title="Anni 2000" description="Nel corso degli anni 2000, numerosi Paesi hanno intrapreso missioni di esplorazione marziana. Oltre agli Stati Uniti e alla Russia, anche il Giappone, l'India, l'Agenzia Spaziale Europea, la Cina e gli Emirati Arabi Uniti si sono uniti a questa impresa. La NASA ha inviato sulla superficie di Marte quattro rover: Spirit e Opportunity nel 2003, Curiosity nel 2011 e Perseverance nel 2021. Inoltre, diverse agenzie spaziali, tra cui la NASA stessa, hanno posizionato satelliti artificiali in orbita intorno al pianeta rosso."></Dialog>
        <Dialog year="2016" title="ExoMars - 14 marzo 2016" description="Tra le recenti iniziative di esplorazione marziana figura la missione ExoMars, condotta dall'Agenzia Spaziale Europea (ESA). ExoMars si articola in due fasi: nella prima, avviata il 14 marzo 2016, la sonda (TGO) ha raggiunto l'orbita di Marte dopo quasi sette mesi di viaggio, iniziando una dettagliata analisi della presenza di metano e altri gas nell'atmosfera. Originariamente, la missione prevedeva anche il lancio di un modulo sulla superficie, chiamato Schiapparelli in omaggio all'astronomo italiano Giovanni V. Schiaparelli, autore della prima mappa accurata di Marte nel XIX secolo. Tuttavia, a causa di problemi tecnici, il modulo è precipitato durante la fase di atterraggio. La seconda fase della missione, programmata per maggio 2020, è stata posticipata senza una data precisa. Questa fase avrebbe dovuto portare su Marte un rover innovativo, capace di muoversi e scavare fino a due metri di profondità per raccogliere campioni."></Dialog>
        </div>
      </div>    
    </div>
  )
}

export default Timeline
