import Component from 'vue-class-component';

import mdSwitch from '../../../components/form/swich';

@Component({
    components: {
        mdSwitch
    },
    template: require('./swiches.html')
})
export default class Switches {

    data() {
        return {
            switches: [
                true,
                false,
                true
            ]
        }
    }
}

