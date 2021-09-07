import { CONFIG } from "./default";

import { _Button } from "./components/Button";
import { _Alert } from "./components/Alert";
import { _LinkButton } from "./components/LinkButton";
import { _List } from "./components/List";
import { _ListItem } from "./components/ListItem";
import { _Chart } from "./components/Chart";
import { _Badge } from "./components/Badge";
import { _Breadcrumb } from "./components/Breadcrumb";

Kapseli.plugins.add("basic-components-kapseli", (app, opts) => {

        const CONF = {
                ...CONFIG,
                ...opts || {}
        }

        let add_comp = app.View.addComponent;
        const Component = app.Component;

        // Button
        if ("button" in CONF.components) {
                let BUTTON = _Button(Component);
                var b = new BUTTON();
                add_comp("BTN", b);
        }

        // Alert
        if ("alert" in CONF.components) {
                let ALERT = _Alert(Component);
                var a = new ALERT();
                add_comp("ALERT", a);
        }

        // LinkButton
        if("link-button" in CONF.components){
                let LINKBUTTON = _LinkButton(Component);
                var l = new LINKBUTTON();
                add_comp("LINK-BUTTON", l);
        }

        // List
        if("list" in CONF.components){
                let LIST = _List(Component);
                let LISTITEM = _ListItem(Component);
                var l = new LIST();
                var li = new LISTITEM(); 
                add_comp("LIST", l);
                add_comp("LIST-ITEM",li);
        }
        // Chart

        if("chart" in CONF.components){
                let CHART = _Chart(Component);
                let c = new CHART();
                add_comp("CHART", c);
        }

        // Badge
        if("badge" in CONF.components){
                let BADGE = _Badge(Component);
                let b = new BADGE();
                add_comp("BADGE", b); 
        }

        // Breadcrumb
        if("breadcrumb" in CONF.components){
                let BREADCRUMB = _Breadcrumb(Component);
                let b = new BREADCRUMB();
                add_comp("BREADCRUMB", b);
                
        }
});
