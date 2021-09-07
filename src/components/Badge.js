export const _Badge = (Component) => {
    return class Badge extends Component{
        constructor(type) {
            super({
                data:{
                    type: "badge-" + type
                },
                template:(
                <div class="badge" className="type">
                    <slot></slot>
                </div>
                ),
                methods:{
                },
                props:{
                    type: {
                        edit(v){
                            return "badge-" + v;
                        }
                    }
                }
            });
            
        }

        setType(type){
            this.data.type = "badge-" + type;
        }
    
    }
}