import Job from "./job";

const Jobs = () => {
  return (
    <div className="jobs">
      <Job
        style="red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />

      <Job
        style="green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />

      <Job
        style="yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        style="blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />

      <Job
        style="pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />

      <Job
        style="red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />

      <Job
        style="green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />

      <Job
        style="yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New Yorka"
      />

      <Job
        style="blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </div>
  );
};

export default Jobs;
