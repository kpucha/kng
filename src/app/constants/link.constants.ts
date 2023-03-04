import { Link } from '../interfaces/link.interface';
import { APP } from './app.constants';

export class LINKS {
  public static DEV: Link = {
    name: 'DeV',
    url: '/dev',
    icon: {
      name: 'frame_source',
    },
  };
  public static IA: Link = {
    name: 'IA',
    url: '/ia',
    icon: {
      name: 'neurology',
    },
  };
  public static IOT: Link = {
    name: 'IoT',
    url: '/iot',
    icon: {
      name: 'home_iot_device',
    },
  };
  public static CLOUD: Link = {
    name: 'Cloud',
    url: '/cloud',
    icon: {
      name: 'filter_drama',
    },
  };
  public static GCP: Link = {
    name: 'GCP',
    url: '/gpt',
    icon: {
      name: 'google',
      lib: 'fontawesome',
    },
  };
  public static AWS: Link = {
    name: 'AWS',
    url: '/aws',
    icon: {
      name: 'aws',
      lib: 'fontawesome',
    },
  };
  public static AZURE: Link = {
    name: 'Azure',
    url: '/azure',
    icon: {
      name: 'microsoft',
      lib: 'fontawesome',
    },
  };
  public static FRONT: Link = {
    name: 'Front',
    url: '/front',
    icon: {
      name: 'web',
    },
  };
  public static BACK: Link = {
    name: 'Back',
    url: '/back',
    icon: {
      name: 'dns',
    },
  };
  public static DEVOPS: Link = {
    name: 'DevOps',
    url: '/devops',
    icon: {
      name: 'all_inclusive',
    },
  };
  public static BBDD: Link = {
    name: 'BBDD',
    url: '/bbdd',
    icon: {
      name: 'database',
    },
  };
}
