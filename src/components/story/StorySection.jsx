import React from 'react';
import './StorySection.css';
import teamImage from '../../assets/story/team.png';

const StorySection = () => {
  return (
    <section className="story-section">
      <div className="story-left">
        <img src={teamImage} alt="Équipe Rhéa" className="team-photo" />
      </div>
      <div className="story-right">
        <h2 className="inter story-title">L’HISTOIRE DE RHÉA</h2>
        <p className="gothic justified">
          Ça a commencé comme beaucoup d’histoires : avec une douleur.<br /><br />
          Les règles, les vraies. Celles qui te plient en deux pendant un partiel, celles qui t’obligent à prendre un médicament “au cas où”, celles qu’on minimise trop souvent.<br /><br />
          Cette petite voix qu’on finit par ignorer : “C’est normal d’avoir mal ?”<br />
          À force de vivre ça chaque mois, on s’est dit : Et si on arrêtait de subir ?<br /><br />
          Alors on a créé Rhéa. Pas une promesse miracle. Une boisson naturelle, formulée avec des plantes reconnues pour leurs bienfaits.<br />
          Une alternative douce, pas pour guérir mais pour vous soulager – parce que prendre soin de son corps ne devrait jamais être un combat.
        </p>
        <p className="signature">– Team Rhea</p>
      </div>
    </section>
  );
};

export default StorySection;
