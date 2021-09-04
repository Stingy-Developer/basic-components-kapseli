export const _Button = (Component) => {

    return class Button extends Component{
        constructor(){
            super({
                data:{
                    click: () => {},
                    type: "btn-primary"
                },
                template:
                (<button class="btn" className="type" onclick="onClick">
                    <slot></slot>
                </button>)
                ,
                methods:{
                    onClick: (e) => {
                        if( this.data.click ){
                            if( typeof this.data.click == "function" ){
                                this.data.click(e)
                            } 
                        }
                    }
                },
                props:{
                    click: {}
                },
                fetchMethod: {
                    fetch_mode: "off",
                    fetch:{
                        method:"GET",
                        url: "#",
                        opts: {}
                    }
                }
            });
        }

        setOnClick(cb){
            this.data.click = cb;
        }

        setType(type){
            this.data.type = "btn-" + type;
        }

    }
}