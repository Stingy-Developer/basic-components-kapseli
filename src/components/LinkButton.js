export const _LinkButton = (Component) => {

    return class LinkButton extends Component{
        constructor(){
            super({
                data:{
                    url: "#",
                    type: "btn-primary"
                },
                template:
                (<a href="url" class="btn" className="type">
                    <slot></slot>
                </a>)
                ,
                methods:{
                },
                props:{
                    url: {},
                    type: {}
                }
            });
        }

        setType(type){
            this.data.type = "btn-" + type;
        }

        setUrl(url){
            this.data.url = url;
        }

    }
}