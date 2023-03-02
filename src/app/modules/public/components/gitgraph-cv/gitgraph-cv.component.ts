import { Component, OnInit } from '@angular/core';
import { createGitgraph, templateExtend, TemplateName } from '@gitgraph/js';

@Component({
  selector: 'app-gitgraph-cv',
  templateUrl: './gitgraph-cv.component.html',
  styleUrls: ['./gitgraph-cv.component.scss'],
})
export class GitgraphCvComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // const graphContainer = document.getElementById('gitgraph')!;
    // let gitgraph = this.createGraph(graphContainer);
    // this.simulateGit(gitgraph);
    this.createGit();
  }

  createGit() {
    const graphContainer = document.getElementById('gitgraph')!;
    let gitgraph = this.createGraph(graphContainer);
    this.simulateGit(gitgraph);
  }

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
        displayAuthor: false,
      },
    },
  });

  private createGraph(graphContainer: any) {
    return createGitgraph(graphContainer, {
      author: 'Arturo Alcala',
      template: this.metroTemplateMod,
      branchLabelOnEveryCommit: false,
      responsive: true,
    });
  }

  simulateGit(gitgraph: any) {
    const main = gitgraph.branch('main');
    main.commit({ subject: '1983', tag: 'Hello World!' });
    const education = main.branch('education');
    education.commit({ subject: '1999', tag: 'Graduado escolar' });
    education.commit({ subject: '2001', tag: 'Bachiller' });
    education.commit({
      subject: '2003',
      tag: 'Instalación, mantenimiento y reparación de ordenadores',
    });
    const work = main.branch('work');
    work.commit({ style: { message: { display: false } } });
    const improvink = work.branch('Improvink');
    education.commit({ subject: '2007', tag: 'Curso superior de Finanzas' });
    improvink.commit({ subject: '2004 - 2008', tag: 'Broker' });
    this.mergeBranch(work, improvink);
    education.commit({ subject: '2009', tag: 'Especialización JAVA/J2EE' });
    education.commit({ subject: '2009', tag: 'Artes Gráficas' });
    work.commit({ style: { message: { display: false } } });
    const ibersaf = work.branch('Ibersaf');
    ibersaf.commit({ subject: '2009 - 2009', tag: 'Tech & Jr Dev' });
    this.mergeBranch(work, ibersaf);
    const pentasys = work.branch({ name: 'Pentasys' });
    pentasys.commit({ subject: '2009 - 2010', tag: 'JR Developer' });
    this.mergeBranch(work, pentasys);
    const mensoft = work.branch({ name: 'MENSOFT' });
    education.commit({ subject: '2010', tag: 'Banksphere' });
    education.commit({
      subject: '2010',
      tag: 'Seguridad en aplicaciones JAVA',
    });
    mensoft.commit('Inditex - GIS/JIRA');
    mensoft.commit('Redur - Atlas');
    mensoft.commit('Composan - SGJT');
    mensoft.commit('Inditex - Web Salarial');
    mensoft.commit('O.N.C.E - EVONCE');
    mensoft.commit({ subject: '2010 - 2014', tag: 'SR Developer' });
    this.mergeBranch(work, mensoft);
    const ibermatica = work.branch({ name: 'Ibermática' });
    education.commit({ subject: '2014', tag: 'Cuadernos de viaje' });
    education.commit({ subject: '2014', tag: 'Equipo a la carta' });
    education.commit({ subject: '2014', tag: 'Taller de entrevistas' });
    education.commit({ subject: '2014', tag: 'Finanzas para no financieros' });
    education.commit({ subject: '2014', tag: 'Caso RRHH' });
    education.commit({ subject: '2014', tag: 'Venta de Ideas' });
    education.commit({ subject: '2014', tag: 'TelephoneTeacher' });
    education.commit({ subject: '2014', tag: 'Conceptos mercantiles LOPD' });
    education.commit({
      subject: '2014',
      tag: 'Visión global de la organización: Lego',
    });
    education.commit({
      subject: '2014',
      tag: 'Visión global de la organización: Internacionalización',
    });
    ibermatica.commit('O.N.C.E - Juegosonce.es');
    ibermatica.commit('O.N.C.E - Juegosonce BackOffice');
    main.commit({ subject: "I'm Dad", tag: 'v2' });
    ibermatica.commit({ subject: '2014 - 2017', tag: 'Analyst Dev' });
    this.mergeBranch(work, ibermatica);
    education.commit({
      subject: '2017',
      tag: 'Productividad Personal en la Era Digital',
    });
    education.commit({ subject: '2017', tag: 'Cloud Computing' });
    const sngular = work.branch({ name: 'Sngular' });
    sngular.commit('FON - API');
    sngular.commit({ subject: '2017 - 2017', tag: 'Tech Lead' });
    this.mergeBranch(work, sngular);
    const ieg = work.branch({ name: 'IEG' });
    ieg.commit('IEG - BackOffice');
    ieg.commit('Monaco Group - BackOffice');
    ieg.commit({ subject: '2017 - 2017', tag: 'CTO' });
    this.mergeBranch(work, ieg);
    const dmg = work.branch({ name: 'DMG' });
    dmg.commit('BrainLinks España - Minning Farm');
    dmg.commit('Hotei - Trading Robots');
    dmg.commit({ subject: '2017 - 2019', tag: 'CTO & Founder' });
    this.mergeBranch(work, dmg);
    const laude = work.branch({ name: 'Laude Tech' });
    laude.commit('Iberdrola - CVMC');
    laude.commit('BBVA - Hammer');
    laude.commit('El Corte Ingles - EDP');
    laude.commit({ subject: '2019 - ...', tag: 'Sr. Software engineer' });
    education.commit({ subject: '2023', tag: 'IA aplicada a la empresa' });
    main.commit({ subject: '24/7', tag: 'Proud Dad' });
  }

  private mergeBranch(branch: any, branch2: any) {
    branch.merge({
      branch: branch2,
      commitOptions: { style: { message: { display: false } } },
    });
  }
}
