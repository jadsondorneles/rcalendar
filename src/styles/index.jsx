import { createGlobalStyle } from 'styled-components'
 
const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #1B1B1A;
        --secondary: #5A3D2E;
        --tertiary: #EB581A;
        --quarterly: #BC8671;
        --white: #ffffff;
        --black: #000000;
        --red: #FF7373;
        --grey: #6A6A6A;
        --lightgrey: #a9a9a9;
        --green: #009688;
        --lightgreen: #91D2BC;
        --orange: #ff9800;
        --lightorange: #FFDBAD;
        --yellow: #FFD14F;
        --brown: #0a0a0a;
        --purple: #923f82;
        --blue: #b1c1da;
        --dark-gree: #64865B;
        --dark-red: #D50000;
        --dark-purple: #4A148C;
        --dark-blue: #0D47A1;
        --dark-yellow: #827717;
        --dark-orange: #E65100;
        --dark-brown: #212121;
        --bg-green: #D4F7CB;
        --bg-red: #FFEBEE;
        --bg-purple: #F3E5F5;
        --bg-blue: #E3F2FD;
        --bg-yellow: #F9FBE7;
        --bg-orange: #FFF3E0;
        --bg-brown: #F5F5F5;
        --bg-lighting: #f4f2ee;
        --font-regular: 'Poppins', sans-serif;
    }

    a,
    abbr,
    address,
    area,
    article,
    aside,
    audio,
    b,
    base,
    bdi,
    bdo,
    blockquote,
    body,
    br,
    button,
    caption,
    cite,
    code,
    col,
    colgroup,
    data,
    datalist,
    dd,
    del,
    details,
    dfn,
    dialog,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    head,
    header,
    hgroup,
    hr,
    html,
    i,
    iframe,
    img,
    input,
    ins,
    kbd,
    keygen,
    label,
    legend,
    li,
    link,
    main,
    map,
    mark,
    menu,
    menuitem,
    meta,
    meter,
    nav,
    object,
    ol,
    optgroup,
    option,
    output,
    p,
    param,
    pre,
    progress,
    q,
    rb,
    rp,
    rt,
    rtc,
    ruby,
    s,
    samp,
    section,
    select,
    small,
    source,
    span,
    strong,
    style,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    template,
    textarea,
    tfoot,
    th,
    thead,
    time,
    title,
    tr,
    track,
    u,
    ul,
    var,
    video,
    wbr {
        font-family: var(--font-regular) !important;
    }

    html,
    body,
    #root {
        height: 100%;
        background-color: var(--white);
    }

    .no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .btn-cancel {
        background: #a9a9a9 !important;
        color: var(--white) !important;
        padding: 5px 15px;
    }

    .btn-remove {
        background: var(--red) !important;
        color: var(--white) !important;
        padding: 5px 15px;
    }

    .btn-submit {
        background: var(--primary) !important;
        color: var(--white) !important;
        padding: 5px 15px;
    }

    .btn-today {
        background: var(--tertiary) !important;
        color: var(--white) !important;
        padding: 10px 20px !important;
        text-transform: capitalize;
        margin: 0 0 0 20px;
    }

    .actions-with-remove {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between !important;
    }

    .btn-actions {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        justify-content: flex-end;
        width: max-content;
    }

    @media (max-width: 370px) {
        #dialog-new-remimder .btn-remove {
            width: 100%;
            margin-bottom: 10px;
        }

        #dialog-new-remimder .btn-actions {
            width: 100%;
            flex-direction: column;
        }

        #dialog-new-remimder .btn-cancel {
            width: 100%;
        }

        #dialog-new-remimder .btn-submit {
            width: 100%;
        }
    }

    #dialog-all-remimders .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded {
        max-width: 993px;
        width: 100%;
    }

    #dialog-all-remimders .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded div#RCalendar_DayContent {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #dialog-all-remimders .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded div#RCalendar_DayContent div#Rb_ListItem {
        width: calc(50% - 8px);
    }

    .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded {
        border-radius: 13px;
    }

    .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded .MuiDialogActions-root.MuiDialogActions-spacing {
        padding: 10px 20px 20px 20px;
    }

    .MuiFormControl-root {
        width: 100%;
    }

    .color-switch {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: wrap;
        gap: 10px;
        padding: 0;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0 0;
    }

    .color-switch button.MuiButtonBase-root.MuiToggleButton-root.MuiToggleButton-sizeMedium.MuiToggleButton-standard {
        width: calc(20% - 8px);
        min-height: 36px;
        border-radius: 6px;
    }

    label.label-switch-colors {
        margin: 0 0 7px 2px;
        font-size: 0.75em;
        padding-bottom: 10px;
    }

    .color-switch button.MuiButtonBase-root.MuiToggleButton-root.Mui-selected.MuiToggleButton-sizeMedium.MuiToggleButton-standard.selected {
        border: 3px solid var(--white);
        -webkit-box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 0px 8px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 0px 2px rgb(0 0 0 / 75%);
    }

    label.error-helper-text {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.66;
        letter-spacing: 0.03333em;
        text-align: left;
        margin-top: 6px;
        margin-right: 14px;
        margin-bottom: 0;
        color: #d32f2f;
    }

    .MuiDialogContent-root .MuiGrid-root.MuiGrid-container {
        margin-top: -15px;
        margin-bottom: 10px;
    }
`
 
export default GlobalStyle