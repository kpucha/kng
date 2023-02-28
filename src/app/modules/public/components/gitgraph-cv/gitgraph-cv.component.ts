import { Component, OnInit } from '@angular/core';
import { createGitgraph, templateExtend, TemplateName } from '@gitgraph/js';

@Component({
  selector: 'app-gitgraph-cv',
  templateUrl: './gitgraph-cv.component.html',
  styleUrls: ['./gitgraph-cv.component.scss'],
})
export class GitgraphCvComponent implements OnInit {
  constructor() {}

  private metroTemplateMod = templateExtend(TemplateName.Metro, {
    colors: [
      '#F94144', // Rojo oscuro
      '#F8961E', // Naranja oscuro
      '#DCAE1D', // Amarillo oscuro
      '#90BE6D', // Verde oscuro
      '#43AA8B', // Verde azulado oscuro
      '#4D908E', // Azul verdoso oscuro
      '#577590', // Azul oscuro
      '#277DA1', // Azul claro oscuro
      '#43AA8B', // Verde azulado oscuro
      '#4D908E', // Azul verdoso oscuro
      '#577590', // Azul oscuro
      '#277DA1', // Azul claro oscuro
      '#43AA8B', // Verde azulado oscuro
      '#4D908E', // Azul verdoso oscuro
      '#577590', // Azul oscuro
      '#277DA1', // Azul claro oscuro
    ],
    commit: {
      message: {
        displayHash: false,
      },
    },
  });

  ngOnInit() {
    const graphContainer = document.getElementById('gitgraph')!;
    var gitgraph = createGitgraph(graphContainer, {
      author: 'Arturo Alcala',
      template: this.metroTemplateMod,
      branchLabelOnEveryCommit: false,
      responsive: false,
    });

    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch('master');
    master.commit({
      subject: 'Initial commit',
      author: 'Madrid < 1983 >',
      tag: 'v1',
    });

    const personalProjects = master.branch('projects');
    const study = master.branch('study');

    study.commit({
      subject: 'Centro de Enseñanza Arturo Soria',
      author: 'Madrid < 07/1999 >',
      tag: 'Graduado escolar',
    });

    personalProjects.commit('Webs de mierda');

    study.commit({
      subject: 'Centro de Enseñanza Arturo Soria',
      author: 'Madrid < 07/2001 >',
      tag: 'Bachiller',
    });

    study.commit({
      subject: 'Nuevas Tecnologías Madrid',
      author: 'Madrid < 07/2003 >',
      tag: 'Instalación, mantenimiento y reparación de ordenadores',
    });

    const develop = master.branch('develop');
    develop.commit({ style: { message: { display: false } } });
    const improvink = develop.branch('Improvink');

    study.commit({
      subject: 'Centro de Formación CEPAL',
      author: 'Madrid < 01/2007 >',
      tag: 'Curso superior de Finanzas',
    });
    improvink.commit({
      subject: 'Improvink Asesores',
      author: 'Madrid < 2004 - 2008 >',
      tag: 'ASESOR FINANCIERO',
      body: 'Presentación de productos, captación de clientes y servicios de asesoramiento.',
    });
    develop.merge({
      branch: improvink,
      commitOptions: { style: { message: { display: false } } },
    });

    study.commit({
      subject: 'Glokal Consulting',
      author: 'Madrid < 2008 >',
      tag: 'Especialización JAVA/J2EE',
    });
    study.commit({
      subject: 'Instituto Tajamar',
      author: 'Madrid < 2009 >',
      tag: 'Artes Gráficas',
    });

    develop.commit({ style: { message: { display: false } } });
    const ibersaf = develop.branch('Ibersaf');
    ibersaf.commit({
      subject: 'Ibersaf',
      author: 'Madrid < 01/2009 - 05/2009 >',
      tag: 'TÉCNICO Y PROGRAMADOR JR',
      body: 'Desarrollo de páginas web del grupo Ibersaf. Creación de eBooks, periódicos digitales y PDFs accesibles para distintos clientes así como presentación de productos.',
    });
    develop.merge({
      branch: ibersaf,
      commitOptions: { style: { message: { display: false } } },
    });

    develop.commit({ style: { message: { display: false } } });
    const pentasys = develop.branch({ name: 'Pentasys' });
    pentasys.commit({
      subject: 'Pentasys',
      author: 'Madrid <09/2009 - 03/2010>',
      tag: 'PROGRAMADOR JUNIOR',
      body: 'Desarrollo de páginas web del grupo Ibersaf. Creación de eBooks, periódicos digitales y PDFs accesibles para distintos clientes así como presentación de productos.',
    });
    develop.merge({
      branch: pentasys,
      commitOptions: { style: { message: { display: false } } },
    });

    //MENSOFT
    const aFeature = develop.branch({ name: 'MENSOFT' });
    study.commit({
      subject: 'MatchMind',
      author: 'Madrid < 2010 >',
      tag: 'Banksphere',
    });
    study.commit({
      subject: 'Sistema de formación de la Comunidad de Madrid',
      author: 'Madrid < 2010 >',
      tag: 'Seguridad en aplicaciones JAVA',
    });
    aFeature.commit({
      subject: 'INDITEX',
      author: 'GIS/JIRA <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'REDUR',
      author: 'ATLAS <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'COMPOSAN',
      author: 'SGJT <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'INDITEX',
      author: 'WEB SALARIAL <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'O.N.C.E - EVONCE',
      author: 'Afiliación <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'O.N.C.E - EVONCE',
      author: 'Bolsa de empleo <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'O.N.C.E - EVONCE',
      author: 'Resolución de incidencias <10/2004 - 05/2008>',
    });
    aFeature.commit({
      subject: 'Mensoft Consultores',
      author: 'Madrid <10/2004 - 05/2008>',
      tag: 'PROGRAMADOR SENIOR',
    });
    develop.merge({
      branch: aFeature,
      commitOptions: { style: { message: { display: false } } },
    });

    develop.commit({ style: { message: { display: false } } });
    const bFeature = develop.branch({ name: 'IBERMATICA' });

    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Cuadernos de viaje',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Equipo a la carta',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Taller de entrevistas',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Finanzas para no financieros',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Caso RRHH',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Venta de Ideas',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'TelephoneTeacher',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Conceptos mercantiles LOPD',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Visión global de la organización: Lego',
    });
    study.commit({
      subject: 'Ibermática',
      author: 'Madrid < 2014 >',
      tag: 'Visión global de la organización: Internacionalización',
    });
    bFeature.commit({
      subject: 'INDITEX',
      author: 'GIS/JIRA <10/2004 - 05/2008>',
    });
    bFeature.commit({
      subject: 'REDUR',
      author: 'ATLAS <10/2004 - 05/2008>',
    });
    bFeature.commit({
      subject: 'COMPOSAN',
      author: 'SGJT <10/2004 - 05/2008>',
    });
    master.commit({
      subject: "I'm Dad",
      author: 'Madrid < 2014 >',
      tag: 'v2',
    });
    bFeature.commit({
      subject: 'Ibermática',
      author: 'Madrid <10/2004 - 05/2008>',
      tag: 'ANALISTA PROGRAMADOR',
    });
    develop.merge({
      branch: bFeature,
      commitOptions: { style: { message: { display: false } } },
    });
    //TODO

    develop.commit({ style: { message: { display: false } } });
    study.commit({
      subject: 'Google Activate',
      author: 'Madrid < 2017 >',
      tag: 'Productividad Personal en la Era Digital',
    });
    study.commit({
      subject: 'Google Activate',
      author: 'Madrid < 2017 >',
      tag: 'Cloud Computing',
    });

    personalProjects.commit('Area Ludus');
    //SNGULAR
    const cFeature = develop.branch({ name: 'Sngular' });
    cFeature.commit({
      subject: 'Sngular',
      author: 'Madrid <10/2004 - 05/2008>',
      tag: 'TECHNICAL TEAM MANAGER',
    });
    develop.merge({
      branch: cFeature,
      commitOptions: { style: { message: { display: false } } },
    });

    //IEG
    const ieg = develop.branch({ name: 'IEG' });
    ieg.commit({
      subject: 'Imperial Eagle Group',
      author: 'Madrid <10/2004 - 05/2008>',
      tag: 'CTO',
    });
    develop.merge({
      branch: ieg,
      commitOptions: { style: { message: { display: false } } },
    });

    //DMG
    const dmg = develop.branch({ name: 'DMG' });
    dmg.commit({
      subject: 'Direct Market Group',
      author: 'Madrid <10/2004 - 05/2008>',
      tag: 'CTO & Founder',
    });
    develop.merge({
      branch: dmg,
      commitOptions: { style: { message: { display: false } } },
    });

    //QO
    const qo = develop.branch({ name: 'QO' });
    study.commit({
      subject: 'Fundación confemetal',
      author: 'Madrid < 2023 >',
      tag: 'Inteligencia Artificial aplicada a la empresa',
    });
    qo.commit({
      subject: 'The Laude Technical Company',
      author: 'Madrid <10/2004 - Today>',
      tag: 'Sr. Software engineer',
    });
    //AHORA

    master.commit('Today');

    //master.merge(develop).tag('v1.0.0');
  }
}
