import React from 'react';
import FadeInOut from '../FadeInOut/FadeInOut';
import Button from '../Button/Button';

// foto importante
// https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA23239.jpg
// articolo
// https://www.astrospace.it/2023/12/14/le-ultime-scoperte-di-perseverance-che-ha-superato-i-mille-giorni-di-permanenza-su-marte/

const Header: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-[10vw] h-screen" id="Header">
      <FadeInOut>
        <div className="flex items-center gap-[4rem] flex-col">
          <div className="flex items-center gap-[1.5rem] flex-col w-[420px]">
            <h1 className="font-sans text-normal text-6xl text-center">
              <span className="font-bold">Marte</span> e i suoi <span className="font-bold"> misteri</span>
            </h1>
            <span className="uppercase text-normal text-[20px] font-sans tracking-[0.25rem]">ricerca scolastica</span>
            <p className="text-normal text-[18px] text-center w-[400px]">Marte, da sempre avvolto da misteri, potrebbe aver suscitato interesse per la sua somiglianza con la Terra; le agenzie spaziali continuano la ricerca di risposte. Esaminiamo le sue caratteristiche e rivediamo le scoperte finora effettuate</p>
            {/* <p className="text-normal text-[18px] text-center w-[400px]">Esplora Marte con i nostri esperti! Approfondisci la conoscenza del pianeta rosso attraverso una guida autorevole e preparati per un'esperienza unica nel suo genere.</p> */}
          </div>
          <Button to="NozioniPrincipali">leggi di più</Button>
        </div>
      </FadeInOut>
    </section>
  );
};

export default Header;
