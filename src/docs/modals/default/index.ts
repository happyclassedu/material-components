import Component from 'vue-class-component';

var template = require('./default.html');

import mdButton from '../../../components/button';
import mdModal from '../../../components/modal';

import events from '../../../mixins/events';

@Component({
    template: template,
    components: {
        mdButton,
        mdModal
    },
    mixins: [
        events
    ]
})
export default class DefaultModal {
    data() {
        return {
            closeResult: ''
        }
    }
}

