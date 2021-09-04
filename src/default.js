export const CONFIG = {
    components: [
        "button",
        "link-button",
        "collapse",
        "chart",
        "list",
        "action-list",
        "alert",
        "badge",
        "breadcrumb",
        "button-group",
        "card",
        "modal",
        "dropdown",
        "navs",
        "canvas",
        "table",
        "tabs",
        ...["text","number","email","password","textarea","file","color","datalist","select","checkbox","radio","range"].map(i => "form:" + i)
    ]

}

