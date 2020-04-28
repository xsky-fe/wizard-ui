import en from './en'
import zh from './zh'
export default () => {
    const lang = window.localStorage.getItem('LOCALE')
    return  lang && /en/.test(lang) ? en : zh;
};
