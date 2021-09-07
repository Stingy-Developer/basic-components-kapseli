export const _BreadcrumbItem = (Component) => {
    return class BreadcrumbItem extends Component {

        constructor() {
            super({
                data: {
                    url: "#",
                    active: false
                },
                template: (
                    <>
                    <li class="breadcrumb-item" v-if="active.value">
                        <a href={this.data.url}>
                            <slot></slot>
                        </a>
                    </li>
                    <li class="breadcrumb-item" v-if="active.value == false">
                        <slot></slot>
                    </li>
                    </>
                ),
                props:{
                    url: {},
                    active: {}
                }
            })
        }

    }
}