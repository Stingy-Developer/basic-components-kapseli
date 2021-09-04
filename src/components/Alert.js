export const _Alert = (Component) => {
  return class Alert extends Component {
    constructor() {
      super({
        data: {
          type: "alert-danger"
        },
        template:
          (<div class="alert" className="type" role="alert">
            <slot></slot>
          </div>),
        methods: {
        },
        props: {
          type: {}
        }
      });

    }

    setAlertType(type){
      this.data.type = "alert-" + type;
    }
  }


}