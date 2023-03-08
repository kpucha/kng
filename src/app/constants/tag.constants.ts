import { Tag } from '../interfaces/tag.interface';

export class TAG {
  public static FRONT: Tag = {
    name: 'frontend',
    desc: 'Front',
    type: 'branch',
    icon: { name: 'web', lib: undefined },
  };
  public static BACK: Tag = {
    name: 'backend',
    desc: 'Back',
    type: 'branch',
    icon: { name: 'dns', lib: undefined },
  };
  public static DEVOPS: Tag = {
    name: 'devops',
    desc: 'DevOps',
    type: 'branch',
    icon: { name: 'all_inclusive', lib: undefined },
  };
  public static DDBB: Tag = {
    name: 'ddbb',
    desc: 'Data',
    type: 'branch',
    icon: { name: 'database', lib: undefined },
  };
  public static AI: Tag = {
    name: 'ai',
    desc: 'AI',
    type: 'branch',
    icon: { name: 'neurology', lib: undefined },
  };
  public static IOT: Tag = {
    name: 'iot',
    desc: 'IoT',
    type: 'branch',
    icon: { name: 'home_iot_device', lib: undefined },
  };
  public static CLOUD: Tag = {
    name: 'cloud',
    desc: 'Cloud',
    type: 'branch',
    icon: { name: 'filter_drama', lib: undefined },
  };
  public static PYTHON: Tag = {
    name: 'python',
    desc: 'Python',
    type: 'lang',
    icon: { name: 'python', lib: 'fontawesome' },
  };
  public static TYPESCRIPT: Tag = {
    name: 'typescript',
    desc: 'Typescript',
    type: 'lang',
    icon: { name: 'js', lib: 'fontawesome' },
  };
  public static JAVASCRIPT: Tag = {
    name: 'javascript',
    desc: 'Javascript',
    type: 'lang',
    icon: { name: 'js', lib: 'fontawesome' },
  };
  public static JAVA: Tag = {
    name: 'java',
    desc: 'Java',
    type: 'lang',
    icon: { name: 'java', lib: 'fontawesome' },
  };
  public static HTML: Tag = {
    name: 'html',
    desc: 'HTML',
    type: 'lang',
    icon: { name: 'html', lib: 'fontawesome' },
  };
  public static CSS: Tag = {
    name: 'css',
    desc: 'CSS',
    type: 'lang',
    icon: { name: 'css', lib: 'fontawesome' },
  };
  public static PHP: Tag = {
    name: 'php',
    desc: 'PHP',
    type: 'lang',
    icon: { name: 'php', lib: 'fontawesome' },
  };
  public static ANGULAR: Tag = {
    name: 'angular',
    desc: 'Angular',
    type: 'framework',
    icon: { name: 'angular', lib: 'fontawesome' },
  };
  public static JQUERY: Tag = {
    name: 'jquery',
    desc: 'jQuery',
    type: 'framework',
    icon: { name: 'jquery', lib: 'fontawesome' },
  };
  public static EXPRESS: Tag = {
    name: 'express',
    desc: 'Express',
    type: 'framework',
    icon: { name: 'express', lib: 'fontawesome' },
  };
  public static SPRING: Tag = {
    name: 'spring',
    desc: 'Spring',
    type: 'framework',
    icon: { name: 'eco' },
  };
  public static TENSORFLOW: Tag = {
    name: 'tensorflow',
    desc: 'Tensorflow',
    type: 'framework',
    icon: { name: 'tensorflow', lib: 'fontawesome' },
  };
  public static PYTORCH: Tag = {
    name: 'pytorch',
    desc: 'PyTorch',
    type: 'framework',
    icon: { name: 'pytorch', lib: 'fontawesome' },
  };
  public static CLI: Tag = {
    name: 'cli',
    desc: 'CLI',
    type: 'languaje',
    icon: { name: 'terminal' },
  };

  public static LIST: Tag[] = [
    this.FRONT,
    this.BACK,
    this.DEVOPS,
    this.DDBB,
    this.CLOUD,
    this.AI,
    this.IOT,
    this.TYPESCRIPT,
    this.JAVA,
    this.PYTHON,
    this.CLI,
    this.PHP,
    this.JAVASCRIPT,
    this.HTML,
    this.CSS,
    this.ANGULAR,
    this.EXPRESS,
    this.SPRING,
    this.TENSORFLOW,
    this.PYTORCH,
    this.JQUERY,
  ];
}
