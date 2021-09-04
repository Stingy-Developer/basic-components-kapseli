export const _List = (Component) => {

    return class List extends Component {
        constructor() {
            super({
                data: {
                    type: ""
                },
                template:
                    (<ul class="list-group" className="type">
                        <slot></slot>
                    </ul>)
                ,
                methods: {
                },
                props: {
                    type: {}
                }
            });
        }

        setType(type) {
            this.data.type = type;
        }

    }
}