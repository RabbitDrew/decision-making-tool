import '../../../style/mian/main.scss'
import ElementCreator from '../../global/element-creator';

const createMain = function ():Element {
    const main = ElementCreator.createElement('main', 'page-main')
    return main
}

export default createMain

