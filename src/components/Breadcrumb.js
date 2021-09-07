export const _Breadcrumb = (Component) => {
    return class Breadcrumb extends Component{
        constructor() {
            super({
                template:(
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb" v-for="item in list">
                        <slot></slot>
                    </ol>
                </nav>
                )
            });
            
        }
    
    }
    
}