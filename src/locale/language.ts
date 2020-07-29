import en from './en'
import zh from './zh'
export default () => {
    const isClient = typeof window === 'object';
    const lang = isClient && window.localStorage.getItem('LOCALE')
    return  lang && /en/.test(lang) ? en : zh;
};
