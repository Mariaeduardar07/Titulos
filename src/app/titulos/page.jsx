import React from "react";
import Header from "../components/header";
import styles from "./titulos.module.css";
import Footer from "../components/footer";
import Card from "../components/cards";
import Section from "../components/section";
 
 export default function Titulos() {
   return (
     <div className={styles.container}>
      <Header />
       <main className={styles.main}>
         <Section titulo={"Conquistas Principais"}>
            <Card 
            ano={2012} 
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg" detalhes={"Corinthians 2 x 0 Boca Juniors"} 
            textoAlt={"Troféu do Mundial Interclubes 2012"} titulo={"Mundial de Clubes da FIFA"} />

            <Card ano={2012} capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg" 
            detalhes={"Corinthians 2 x 0 Boca Juniors"} 
            textoAlt={"Troféu do Mundial Interclubes 2012"} 
            titulo={"Copa Libertadores da América"} />
        

            <Card 
            ano={2000}
            capa="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
            detalhes={"Corinthians 0(4) x 0(3) Vasco"}
            textoAlt={"Copa Libertadores da América"}
            titulo={"Copa Libertadores da América"} />
         </Section>
        <Section />

<section titulo={"Campeonato Brasilero"}>
  
</section>
         <section className={styles.promo}>
           <h2>Campeonatos Estaduais</h2>
           <div className={styles.trophiesGrid}>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu do Campeonato Paulista 2023"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Campeonato Paulista</h3>
                 <p className={styles.year}>2023</p>
                 <p className={styles.details}>
                   <span className={styles.recordTitle}>
                     30º título estadual
                   </span>
                 </p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu do Campeonato Paulista 2019"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Campeonato Paulista</h3>
                 <p className={styles.year}>2019</p>
                 <p className={styles.details}>
                   <span className={styles.recordTitle}>
                     29º título estadual
                   </span>
                 </p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu do Campeonato Paulista 2018"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Campeonato Paulista</h3>
                 <p className={styles.year}>2018</p>
                 <p className={styles.details}>
                   <span className={styles.recordTitle}>
                     28º título estadual
                   </span>
                 </p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
           </div>
         </section>
 
         <section className={styles.otherTrophies}>
           <h2>Outras Conquistas</h2>
           <div className={styles.trophiesGrid}>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu da Copa do Brasil 2009"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Copa do Brasil</h3>
                 <p className={styles.year}>2009</p>
                 <p className={styles.details}>
                   Corinthians 2 x 0 Internacional
                 </p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu da Recopa Sul-Americana 2013"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Recopa Sul-Americana</h3>
                 <p className={styles.year}>2013</p>
                 <p className={styles.details}>Corinthians 3 x 1 São Paulo</p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
             <div className={styles.trophy}>
               <div className={styles.trophyCover}>
                 <img
                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FIFA_CLUB_WORLDCUP.jpg/450px-FIFA_CLUB_WORLDCUP.jpg"
                   alt="Troféu da Copa do Brasil 2002"
                 />
               </div>
               <div className={styles.trophyInfo}>
                 <h3>Copa do Brasil</h3>
                 <p className={styles.year}>2002</p>
                 <p className={styles.details}>Corinthians 3 x 2 Brasiliense</p>
                 <button className={styles.detailsButton}>Ver Detalhes</button>
               </div>
             </div>
           </div>
         </section>
       </main>
        <Footer />
     </div>
   );
 };