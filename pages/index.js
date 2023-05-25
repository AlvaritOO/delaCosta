import Head from "next/head";
import styles from "../styles/Home.module.css";
import LogoDelacosta from "../pages/src/img/logodelacosta.jpeg";

import AtunCarpacho from "../pages/src/img/atuncarpacho.jpeg";
import AtunCocido from "../pages/src/img/atuncocido.jpeg";
import AtunSashimi from "../pages/src/img/atunsashimi.jpeg";
import Camarones from "../pages/src/img/camarones_.jpeg";
import CamaronesAlPilpil from "../pages/src/img/camaronesalpilpil.jpeg";
import ChupeDeLocos from "../pages/src/img/chupedelocos.jpeg";
import Congrio from "../pages/src/img/congrio.jpeg";
import Eriso from "../pages/src/img/eriso.jpeg";
import ErisoEnsalada from "../pages/src/img/erisoensalada.jpeg";
import JaivaEnsalada from "../pages/src/img/jaivaensalada.jpeg";
import Locos from "../pages/src/img/locos.jpeg";
import Machas from "../pages/src/img/machas.jpeg";
import Ostion from "../pages/src/img/ostion.jpeg";
import OstionesAlaParmesana from "../pages/src/img/ostionesalaparmesana.jpeg";
import PinsasDeJaiva from "../pages/src/img/pinsasdejaiva.jpeg";
import Piure from "../pages/src/img/piure.jpeg";
import Pulpo from "../pages/src/img/pulpo.jpeg";
import Reineta from "../pages/src/img/reineta.jpeg";
import ReinetaAlaPlancha from "../pages/src/img/reinetaalaplancha.jpeg";
import Salmon from "../pages/src/img/salmon.jpeg";
import SalmonAlaPlancha from "../pages/src/img/salmonalaplancha.jpeg";
import SalmonCrudo from "../pages/src/img/salmoncrudo.jpeg";



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De la Costa - Podructos del mar a domicilio en Rancagua y Machali</title>
      </Head>

      <main className={styles.main}>
      <img src={LogoDelacosta} alt="LogoDelacosta" className={styles.img} />
        <h1 className={styles.title}>
          Bienvenidos
        </h1>
        <p className={styles.description}>Podructos del mar a domicilio</p>{" "}
        
        <div className={styles.grid}>

          <a href="" className={styles.card}>
            <img src={AtunCarpacho} alt="AtunCarpacho" className={styles.img} />
            <h3>Atún carpacho</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={AtunCocido} alt="AtunCocido" className={styles.img} />
            <h3>Atún Cocido</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={AtunSashimi} alt="AtunCocido" className={styles.img} />
            <h3>Atún Sashimi</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Camarones} alt="AtunCocido" className={styles.img} />
            <h3>Camarones</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={CamaronesAlPilpil} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Camarones al pil pil</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={ChupeDeLocos} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Chupe de locos</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Congrio} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Congrio</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Eriso} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Eriso</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={ErisoEnsalada} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Eriso Ensalada</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={JaivaEnsalada} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Jaiva ensalada</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Locos} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Locos</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Machas} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Machas</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Ostion} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Ostion</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={OstionesAlaParmesana} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Ostiones a la parmesana</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={PinsasDeJaiva} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Pinsas de jaiva</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Piure} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Piure</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Pulpo} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Pulpo</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Reineta} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Reineta</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={ReinetaAlaPlancha} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>ReinetaAlaPlancha</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Salmon} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Salmon</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={SalmonAlaPlancha} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Salmon a la plancha</h3>
            <p>descripcion....</p>
          </a>

          <a href="" className={styles.card}>
            <img src={SalmonCrudo} alt="CamaronesAlPilpil" className={styles.img} />
            <h3>Salmon crudo</h3>
            <p>descripcion....</p>
          </a>

          <br></br>

          <div className={styles.button}>
            <a href="https://wa.me/message/CTYZQI5JZWJTO1">
              <p>Envia un WhatsApp &rarr;</p>
            </a>
          </div>

          <h2>
            Machali - Rancagua
          </h2>
        </div>
      </main>
      <footer className={styles.footer}>
        <h2>+56 9 4855 0557</h2>
      </footer>
    </div>
  );
}
