export const _ListItem = (Component) => {

    return class ListItem extends Component {
        constructor() {
            super({
                data: {
                    type: "",
                    active: "false"
                },
                template:
                    (<li class="list-group-item">
                        <slot></slot>
                    </li>)
                ,
                methods: {
                },
                props: {
                    type: {}
                }
            });

            this.setType("");
        }

        setType(type) {
            this.data.type = this.data.active === "true" ? "active " + type : type;
        }

        toggleActive(){
            this.data.active = "true";
            this.setType("");
        }

    }
}