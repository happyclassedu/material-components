import Component from 'vue-class-component';

import mdRadioGroup from '../../../components/form/radio-group';
import mdRadio from '../../../components/form/radio';

@Component({
    components: {
        mdRadioGroup,
        mdRadio
    },
    template: require('./radios.html')
})
export default class Radios {

    data() {
        return {
            value: 'green'
        }
    }
}

