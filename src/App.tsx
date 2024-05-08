import FadeInOut from "./components/FadeInOut/FadeInOut.tsx";
import Header from "./components/Header/Header.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Starfield from "./components/Starfield/Starfield.tsx";
import Timeline from "./components/Timeline/Timeline.tsx";
import Dialog from "./components/Dialog/Dialog.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel"

// https://ibb.co/mbSbRH5
// https://ibb.co/3d8ZfHQ
// https://ibb.co/2crRs9q

function App() {
  return (
    <div>
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
      />
      <Navbar />
      <img className="absolute z-[-5] bottom-[-450px] w-[100%] object-cover filter brightness-[40%]" src="https://i.ibb.co/dmcJd0X/Marte-superficie-1920-removebg-preview-1.png" alt="Marte-superficie-1920-removebg-preview-1" />
      <div className="flex items-center justify-center flex-col">
        <Header />
      </div>
      <div className="h-[400px] pb-[100px] bg-gradient-to-b from-transparent to-[#0f0b0c]" />
      <div id="NozioniPrincipali" className="h-[1000px] bg-[#0f0b0c]">
        <FadeInOut className="flex items-center justify-center flex-col gap-[5rem]">
          <h1 className="font-sans text-normal text-6xl text-center font-extrabold">Nozioni Principali</h1>
          <div className="flex items-center justify-center gap-[5rem]">
            <div className="flex items-center justify-center flex-col gap-[1.5rem] w-[320px]">
              <p className="text-normal text-3xl font-bold text-center">Caratteristiche</p>
              <ul className="list-disc flex flex-col gap-[0.25rem] relative left-[1rem] justify-center">
                <li className="text-normal text-[18px]"><span className="font-semibold">Distanza dal sole:</span> 228 milioni di km</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Periodo di rivoluzione:</span> 687 giorni terrestri</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Periodo di rotazione:</span> 24 ore e 37 minuti terrestri</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Massa:</span> 6,46 x 10²³ kg</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Raggio:</span> 3389,5 km</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Densità:</span> 3,93 g/cm³</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Satelliti:</span> 2</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Accelerazione gravitazionale:</span> 3,71 m/s²</li>
                <li className="text-normal text-[18px]"><span className="font-semibold">Temperatura massima, media e minima:</span> +20˚ C, -63˚ C, -140˚ C</li>
              </ul>
            </div>
            <img src="https://i.pinimg.com/originals/f8/d6/88/f8d688b8b4c45922162154b35763e04c.png" />
            <p className="text-normal text-[18px] text-center w-[320px]">Marte è il quarto pianeta del sistema solare. È più piccolo della Terra ed è caratterizzato da stagioni simili a quelle terrestri. Nonostante le basse temperature, le condizioni ambientali di Marte sono le più simili alla Terra nel Sistema Solare. La superficie di Marte presenta montagne, picchi, crateri e profondi canyon, tra cui il grande vulcano Olympus Mons, alto 26 km e con un cratere di 80 km di diametro, forse il più grande vulcano del Sistema Solare. Marte ha due satelliti naturali, Deimos e Phobos, che orbitano intorno al pianeta come fa la Luna con la Terra.</p>
          </div>
        </FadeInOut>
      </div>
      <div id="EsplorazioniSuMarte" className="h-[800px] bg-[#0f0b0c]">  
        <FadeInOut className="flex items-center justify-center flex-col gap-[3rem]">
          <h1 className="font-sans text-normal text-6xl text-center">Esplorazioni su Marte</h1>
          <p className="text-normal text-[18px] text-center w-[1000px] pb-8">Clicca con il cursore i pallini per rivelare le informazioni</p>
          <Timeline />
          <h1 className="font-sans text-normal text-4xl text-center pt-8">Il futuro delle esplorazioni</h1>
          <div className="flex gap-9 items-center">
            <p className="text-normal text-[18px] text-center w-[600px]">Le missioni finora condotte hanno fornito risultati scientifici straordinari, consentendo la mappatura del pianeta, lo studio dell'atmosfera e test preliminari per future missioni umane. Tuttavia, l'attenzione del pubblico è rivolta al futuro, con il sogno "eutopico" di inviare un equipaggio umano su Marte. Le agenzie spaziali stanno seriamente considerando questa possibilità: l'ESA prevede una missione umana entro gli anni 2030 come parte del programma Aurora, mentre anche la NASA discute lo sviluppo di una simile missione nello stesso decennio. Il visionario Elon Musk ha dichiarato che la sua SpaceX inizierà il processo di colonizzazione di Marte già nel 2024.</p>
            <img width={500} className="rounded-lg" src="https://media.cnn.com/api/v1/images/stellar/prod/2023-05-22t004316z-2116487779-rc2831auwisd-rtrmadp-3-space-exploration-iss-axiom.jpg?c=16x9&q=h_833,w_1480,c_fill" />
          </div>
        </FadeInOut>
      </div>
      <div id="VitaMarte" className="h-[1100px] pt-[50px] bg-[#0f0b0c]">
        <FadeInOut className="flex items-center justify-center flex-col gap-[3rem]">
          <h1 className="font-sans text-normal text-6xl text-center">C'è vita su Marte?</h1>
          <div className="flex gap-[5rem] items-center">
            <Carousel>
              <CarouselContent className="w-[550px]">
                <CarouselItem  className="flex items-center justify-center"><img width={500} className="rounded-lg" src="https://cdn.mos.cms.futurecdn.net/nhMCSfJzegMYwDD9TZcTHF.jpg" /></CarouselItem>
                <CarouselItem  className="flex items-center justify-center"><img width={500} className="rounded-lg" src="https://cdn.mos.cms.futurecdn.net/5sA9kTxtUYXKicqQm87uk-650-80.jpg.webp" /></CarouselItem>
                <CarouselItem  className="flex items-center justify-center"><img width={500} className="rounded-lg h-[281.25px]" src="https://c.ndtvimg.com/2021-09/8h5eom44_mars-rock_625x300_11_September_21.jpg" /></CarouselItem>
                <CarouselItem  className="flex items-center justify-center"><img width={500} className="rounded-lg h-[281.25px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Olympus_Mons_-_ESA_Mars_Express_-_Flickr_-_Andrea_Luck.png/1200px-Olympus_Mons_-_ESA_Mars_Express_-_Flickr_-_Andrea_Luck.png" /></CarouselItem>
                <CarouselItem  className="flex items-center justify-center"><img width={500} className="rounded-lg h-[281.25px]" src="https://leganerd.com/wp-content/uploads/2018/06/opportunity_sandstorm-699x393.jpg" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <p className="text-normal text-[18px] text-center w-[600px]">Attualmente, la priorità per gli scienziati rimane la ricerca di forme di vita su Marte. Nel corso dell'estate del 2023, il rover Perseverance della NASA ha scoperto rocce contenenti molecole organiche nel cratere Jezero, sollevando la possibilità di una forma di vita passata sul pianeta rosso, anche se gli esperti ritengono che tali molecole potrebbero essere di origine non biologica. Il passo successivo per confermare la presenza di vita su Marte è quello di riportare campioni del pianeta sulla Terra per analisi più approfondite nei laboratori terrestri, dotati degli strumenti più avanzati. Inoltre, un altro obiettivo degli scienziati è indagare la presenza di vita in luoghi meno accessibili ma potenzialmente ospitali, come le riserve di ghiaccio sotto la superficie di Marte, per cui si prevede l'invio di un rover in grado di perforare il suolo marziano fino a due metri di profondità.</p>
          </div>
        </FadeInOut>
      </div>
      <div id="Curiosità" className="h-[650px] bg-[#0f0b0c]">
        <FadeInOut className="flex items-center justify-center flex-col gap-[3rem] h-[500px]">
          <h1 className="font-sans text-normal text-6xl text-center">Curiosità</h1>
          <p className="text-normal text-[18px] text-center w-[1000px]">Clicca con il cursore i pallini per rivelare le curiosità</p>
          <img className="relative left-[15%] top-[350px]" width={100} height={100} src="https://i.ibb.co/2W5WFj3/Deimos-MRO-removebg-preview.png" />
          <img className="relative bottom-[125px]" src="https://i.ibb.co/RbMwhWd/181115180453-01-mars-best-moments-mars-globe-valles-marineris-enhanced-removebg-preview.png" />

<Dialog className="relative left-[15%] bottom-[200px] z-50" year="1" title="La debole gravità di Deimos:" description={<div>Deimos è la luna più piccola di marte e per questo la sua accelerazione gravitazionale è estremamente bassa. La gravità su Deimos è così debole che se un essere umano si trovasse sulla sua superficie, potrebbe saltare e lasciare la luna con relativa facilità (i calcoli svolti da me sono presenti <a className="text-blue-400 inline" href="https://saltodeimos.tiiny.site"> in questo foglio LaTeX</a>), come se si stesse camminando su una nuvola.</div>}></Dialog>

          <Dialog className="relative left-[2.25%] bottom-[470px] z-50" year="3" title="La Valles Marineris" description="La Valles Marineris è il sistema di canyon principale di Marte. Si estende per 4.800 chilometri, con una larghezza massima di 320 chilometri e una profondità che raggiunge i 7 chilometri. Questa formazione è circa 10 volte più grande del Grand Canyon terrestre."></Dialog>
          <Dialog className="relative right-[2.5%] bottom-[710px] z-50" year="4" title="Il pianeta rosso" description="La caratteristica tonalità rossastra di Marte è il risultato dell'ossidazione del ferro presente nelle rocce, nella regolite e nella polvere che ricoprono la sua superficie. Questa polvere, espulsa nell'atmosfera, contribuisce a conferire al pianeta il suo distintivo colore rosso."></Dialog>

          <Dialog className="relative right-[17.5%] bottom-[730px] z-50" year="2" title="La fine di Phobos" description="Phobos, la più grande delle due lune di Marte (anche conosciuta come Fobos), si sta lentamente avvicinando al pianeta rosso a causa della gravità marziana. Questo processo, che si prevede accadrà tra circa 30 o 50 milioni di anni, porterà alla disintegrazione di Phobos, trasformandola in un anello intorno a Marte prima della sua scomparsa."></Dialog>
          <img className="relative right-[17.5%] bottom-[850px]" width={100} height={100} src="https://i.ibb.co/3SbVM31/1024px-Phobos-colour-2008-removebg-preview.png" />
        </FadeInOut>
      </div>
      <div id="Considerazioni" className="h-[600px] bg-[#0f0b0c]">
        <FadeInOut className="flex items-center justify-center flex-col gap-[3rem]">
          <h1 className="font-sans text-normal text-6xl text-center">Considerazioni Personali</h1>
          <div className="flex items-center justify-center flex-col gap-[1rem]">
            <p className="text-normal text-[18px] text-center w-[1000px]">La mia analisi su questo argomento mi ha portato a riflettere sull'interesse degli scienziati nel comprendere se Marte possa ospitare vita, spinto dalla crescente preoccupazione per lo stato del nostro pianeta. Tuttavia, personalmente, credo che la migliore soluzione risieda nel concentrarci su come guarire la Terra anziché cercare nuove abitazioni.</p>
            <p className="text-normal text-[18px] text-center w-[1000px]">È innegabile che il nostro pianeta stia attraversando una fase critica, con l'inquinamento e il surriscaldamento globale che minacciano il suo equilibrio. Invece di voltare lo sguardo altrove, dovremmo assumerci la responsabilità di affrontare queste sfide.</p>
            <p className="text-normal text-[18px] text-center w-[1000px]">Quindi, mentre l'esplorazione di Marte può essere affascinante e importante per la nostra comprensione dell'universo, non dobbiamo perdere di vista il fatto che abbiamo una casa qui sulla Terra che richiede il nostro impegno immediato e continuo per proteggerla e preservarla."</p>
          </div>
          <p className="text-normal text-[18px] text-center w-[1000px]">Grazie per aver letto questo sito web realizzato per la borsa di studio tenuta dalla mia scuola in memoria di Marino Perissinotto, il codice per il sito web può essere trovato <a className="text-blue-400" href="https://github.com/davidoskiii/mars-school-project">qui</a>.</p>
        </FadeInOut>
      </div>
    </div>
  )
}

export default App
