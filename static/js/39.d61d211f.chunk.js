(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[39],{39:function(e,a,n){"use strict";var l=n(12),t=n(13),o=n(17),r=n(14),i=n(15),c=n(0),s=n.n(c),m=n(5),u=n(8),d=(n(40),function(e){Object(i.a)(n,e);var a=Object(r.a)(n);function n(e){var t;return Object(l.a)(this,n),(t=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);t.setState({scrollTop:a})},t.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},t.state={articleTree:[],scrollTop:null},t.getArticleTree=t.getArticleTree.bind(Object(o.a)(t)),t}return Object(t.a)(n,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],n=0,l=e.length;n<l-1;n++){var t=e[n].nodeName;"H2"!==t&&"H3"!==t||(e[n].id=e[n].innerText,a.push({name:e[n].innerText,tag:e[n].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,n=u.a.length;a<n;a++)e[0]===u.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=u.a[a].section.length>0?u.a[a].section[e[e.length-1]]:u.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,n=document.getElementsByClassName("directory-list")[0],l=n.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var t=document.getElementsByClassName("page-footer")[0],o=0;t;)o+=t.offsetTop,t=t.offsetParent;var r=document.body.scrollTop||document.documentElement.scrollTop;if((r+=l+n.offsetHeight)>o+e.offsetHeight)n.style="position:fixed;top:".concat(l-r+o,"px;transition:none");else{var i=window.scrollY;i>e.offsetHeight&&(a<i&&(e.className="ant-layout-header header header-affixed",n.className="directory-list directory-affixed",a=i),a>i&&(e.className="ant-layout-header header header-visible",n.className="directory-list",a=i)),n.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,n=a.articleTree,l=a.scrollTop,t=n.length;if(document.getElementById("tree-num-0")&&t>0){for(var o=[],r=0;r<t;r++){var i=document.getElementById(n[r].name);o.push(i.offsetTop)}for(var c=o.findIndex((function(e){return e>l}))-1,m=0;m<t;m++)document.getElementById("tree-num-".concat(m)).className=m===c?"tree-num directory-item-active":"tree-num";-2===c&&(document.getElementById("tree-num-".concat(t-1)).className="tree-num directory-item-active")}return s.a.createElement("div",{className:"directory"},s.a.createElement("ul",{className:"directory-list"},n.map((function(a,n){return s.a.createElement("li",{key:n,id:"tree-num-".concat(n),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),n}(c.Component));a.a=Object(m.f)(d)},40:function(e,a,n){},67:function(e,a,n){var l={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function t(e){if(!n.o(l,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=l[e],t=a[0];return Promise.all(a.slice(1).map(n.e)).then((function(){return n.t(t,7)}))}t.keys=function(){return Object.keys(l)},t.id=67,e.exports=t},907:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return f}));var l=n(12),t=n(13),o=n(14),r=n(15),i=n(0),c=n.n(i),s=n(172),m=(n(54),n(39)),u=n(188),d=n.n(u),g=d.a.GraphObject.make,p={theme:"monokai",mode:"JSX",readOnly:!0},f=function(e){Object(r.a)(n,e);var a=Object(o.a)(n);function n(){return Object(l.a)(this,n),a.apply(this,arguments)}return Object(t.a)(n,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){g(d.a.Diagram,"myDiagramDiv1").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime"}),g(d.a.TextBlock,"Title",{column:1}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan"}),g(d.a.TextBlock,"(1,0)",{row:1,column:0}),g(d.a.TextBlock,"(1,1)",{row:1,column:1}),g(d.a.TextBlock,"(1,2)",{row:1,column:2}),g(d.a.TextBlock,"(1,3)",{row:1,column:3}))))}},{key:"diagramRender2",value:function(){g(d.a.Diagram,"myDiagramDiv2").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",{defaultRowSeparatorStroke:"black",defaultColumnSeparatorStroke:"black",defaultSeparatorPadding:10},g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime"}),g(d.a.TextBlock,"Title",{column:1}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan"}),g(d.a.TextBlock,"(1,0)",{row:1,column:0}),g(d.a.TextBlock,"(1,1)",{row:1,column:1}),g(d.a.TextBlock,"(1,2)",{row:1,column:2}),g(d.a.TextBlock,"(1,3)",{row:1,column:3}))))}},{key:"diagramRender3",value:function(){g(d.a.Diagram,"myDiagramDiv3").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",{defaultRowSeparatorStroke:"black",defaultColumnSeparatorStroke:"black",defaultSeparatorPadding:10},g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime"}),g(d.a.TextBlock,"Title",{column:1,columnSpan:2}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan"}),g(d.a.TextBlock,"(1,0)",{row:1,column:0}),g(d.a.TextBlock,"(1,1)",{row:1,column:1}),g(d.a.TextBlock,"(1,2)",{row:1,column:2}),g(d.a.TextBlock,"(1,3)",{row:1,column:3}))))}},{key:"diagramRender4",value:function(){g(d.a.Diagram,"myDiagramDiv4").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",{defaultRowSeparatorStroke:"black",defaultColumnSeparatorStroke:"black",defaultSeparatorPadding:10},g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime",alignment:d.a.Spot.Left}),g(d.a.TextBlock,"Title",{column:1,columnSpan:2}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan",alignment:d.a.Spot.Right}),g(d.a.TextBlock,"(1,0)",{row:1,column:0}),g(d.a.TextBlock,"(1,1)",{row:1,column:1}),g(d.a.TextBlock,"(1,2)",{row:1,column:2}),g(d.a.TextBlock,"(1,3)",{row:1,column:3}))))}},{key:"diagramRender5",value:function(){g(d.a.Diagram,"myDiagramDiv5").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",{defaultSeparatorPadding:10},g(d.a.RowColumnDefinition,{row:0,background:"dodgerblue"}),g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime",alignment:d.a.Spot.Left}),g(d.a.TextBlock,"Title",{column:1,columnSpan:2}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan",alignment:d.a.Spot.Right}),g(d.a.TextBlock,"(1,0)",{row:1,column:0}),g(d.a.TextBlock,"(1,1)",{row:1,column:1}),g(d.a.TextBlock,"(1,2)",{row:1,column:2}),g(d.a.TextBlock,"(1,3)",{row:1,column:3}))))}},{key:"diagramRender6",value:function(){g(d.a.Diagram,"myDiagramDiv6").add(g(d.a.Part,"Auto",g(d.a.Shape,"Rectangle",{fill:"white"}),g(d.a.Panel,"Table",{defaultSeparatorPadding:10},g(d.a.RowColumnDefinition,{row:0,background:"dodgerblue"}),g(d.a.Panel,"TableRow",{row:0},g(d.a.Shape,"Triangle",{column:0,desiredSize:new d.a.Size(10,10),fill:"lime",alignment:d.a.Spot.Left}),g(d.a.TextBlock,"Title",{column:1,columnSpan:2}),g(d.a.Shape,"Rectangle",{column:3,desiredSize:new d.a.Size(10,10),fill:"cyan",alignment:d.a.Spot.Right})),g(d.a.RowColumnDefinition,{row:1,separatorStroke:"black"}),g(d.a.Panel,"TableRow",{row:1},g(d.a.TextBlock,"(1,0)",{column:0}),g(d.a.TextBlock,"(1,1)",{column:1}),g(d.a.TextBlock,"(1,2)",{column:2}),g(d.a.TextBlock,"(1,3)",{column:3})))))}},{key:"render",value:function(){return c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{className:"article"},c.a.createElement("div",{className:"article-title"},c.a.createElement("h1",null,"GoJS \u9762\u677f\u2014\u2014\u7b2c\u4e00\u8282 \u8868\u683c\u9762\u677f(Table Panel)")),c.a.createElement("div",{className:"article-content"},c.a.createElement("h2",null,"Table Panels"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u6309\u884c\u548c\u5217(\u5355\u5143\u683c)\u6392\u5217\u5bf9\u8c61"),c.a.createElement("li",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u5728\u5b83\u4eec\u7684\u5355\u5143\u683c\u4e2d\u662f\u4e2d\u5fc3\u5bf9\u9f50\u7684"),c.a.createElement("li",null,"\u4e0d\u662f\u6bcf\u4e2a\u5355\u5143\u683c\u90fd\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u5bf9\u8c61")),c.a.createElement("p",null,"\u4ee3\u7801\u548c\u6548\u679c\u5982\u4e0b\u6240\u793a:"),c.a.createElement(s.a,{value:'let $ = go.GraphObject.make;\nlet myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.add(\n    $(go.Part, "Auto",\n        $(go.Shape, "Rectangle", {\n            fill: "white"\n        }),\n        $(go.Panel, "Table",\n            //Row 0\n            $(go.Shape, "Triangle", {\n                column: 0,\n                desiredSize: new go.Size(10, 10),\n                fill: "lime"\n            }),\n            $(go.TextBlock, "Title", {\n                column: 1\n            }),\n            $(go.Shape, "Rectangle", {\n                column: 3,\n                desiredSize: new go.Size(10, 10),\n                fill: "cyan"\n            }),\n\n            //Row 1\n            $(go.TextBlock, "(1,0)", {\n                row: 1,\n                column: 0\n            }),\n            $(go.TextBlock, "(1,1)", {\n                row: 1,\n                column: 1\n            }),\n            $(go.TextBlock, "(1,2)", {\n                row: 1,\n                column: 2\n            }),\n            $(go.TextBlock, "(1,3)", {\n                row: 1,\n                column: 3\n            }),\n        )\n    )\n);',options:p}),c.a.createElement("div",{id:"myDiagramDiv1",className:"diagram"}),c.a.createElement("h2",null,"\u8bbe\u7f6e\u8868\u683c\u6837\u5f0f"),c.a.createElement("ul",null,c.a.createElement("li",null,"defaultRowSeparatorStroke \u8bbe\u7f6e\u8868\u683c\u884c\u5206\u9694\u7ebf"),c.a.createElement("li",null,"defaultColumnSeparatorStroke \u8bbe\u7f6e\u8868\u683c\u5217\u5206\u9694\u7ebf"),c.a.createElement("li",null,"defaultSeparatorPadding \u8bbe\u7f6e\u5355\u5143\u683c padding")),c.a.createElement(s.a,{value:'$(go.Panel, "Table", {\n    defaultRowSeparatorStroke: "black",\n    defaultColumnSeparatorStroke: "black",\n    defaultSeparatorPadding: 10\n    },\n    \xb7\n    \xb7\n    \xb7\n)',options:p}),c.a.createElement("div",{id:"myDiagramDiv2",className:"diagram"}),c.a.createElement("h2",null,"\u8bbe\u7f6e\u5355\u5143\u683c\u6240\u5360\u5217\u6570"),c.a.createElement("ul",null,c.a.createElement("li",null,"columnSpan:Number")),c.a.createElement(s.a,{value:'//Row 0\n$(go.Shape, "Triangle", {\n    column: 0,\n    desiredSize: new go.Size(10, 10),\n    fill: "lime"\n}),\n$(go.TextBlock, "Title", {\n    column: 1,\n    columnSpan: 2\n}),\n$(go.Shape, "Rectangle", {\n    column: 3,\n    desiredSize: new go.Size(10, 10),\n    fill: "cyan"\n}),',options:p}),c.a.createElement("div",{id:"myDiagramDiv3",className:"diagram"}),c.a.createElement("h2",null,"\u8bbe\u7f6e\u5355\u5143\u683c\u5bf9\u9f50\u65b9\u5f0f"),c.a.createElement("ul",null,c.a.createElement("li",null,"columnSpan:go.Spot.","<position>")),c.a.createElement(s.a,{value:'//Row 0\n$(go.Shape, "Triangle", {\n    column: 0,\n    desiredSize: new go.Size(10, 10),\n    fill: "lime",\n    alignment: go.Spot.Left\n}),\n$(go.TextBlock, "Title", {\n    column: 1,\n    columnSpan: 2\n}),\n$(go.Shape, "Rectangle", {\n    column: 3,\n    desiredSize: new go.Size(10, 10),\n    fill: "cyan",\n    alignment: go.Spot.Right\n}),',options:p}),c.a.createElement("div",{id:"myDiagramDiv4",className:"diagram"}),c.a.createElement("h2",null,"RowColumnDefinition"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u7528\u4e8e\u4e3a Table Panel \u7684\u7279\u5b9a\u884c/\u5217\u8bbe\u7f6e\u5c5e\u6027")),c.a.createElement(s.a,{value:'$(go.Panel, "Table", {\n        defaultSeparatorPadding: 10\n    },\n    //Row 0\n    $(go.RowColumnDefinition, {\n        row: 0,\n        background: "dodgerblue"\n    }),\n    $(go.Shape, "Triangle", {\n        column: 0,\n        desiredSize: new go.Size(10, 10),\n        fill: "lime",\n        alignment: go.Spot.Left\n    }),\n    $(go.TextBlock, "Title", {\n        column: 1,\n        columnSpan: 2\n    }),\n    $(go.Shape, "Rectangle", {\n        column: 3,\n        desiredSize: new go.Size(10, 10),\n        fill: "cyan",\n        alignment: go.Spot.Right\n    }),\n    \xb7\n    \xb7\n    \xb7\n)',options:p}),c.a.createElement("div",{id:"myDiagramDiv5",className:"diagram"}),c.a.createElement("h2",null,"TableRow / TableColumn"),c.a.createElement("ul",null,c.a.createElement("li",null,"\u7279\u6b8a\u9762\u677f\u2014\u2014\u53ea\u80fd\u5728 Table Panel \u4e2d\u4f7f\u7528"),c.a.createElement("li",null,"\u5c06\u7279\u5b9a\u884c/\u5217\u7684\u6240\u6709\u5bf9\u8c61\u653e\u5230\u5176\u4e2d\u4e00\u4e2a\u9762\u677f\u4e2d")),c.a.createElement(s.a,{value:'$(go.Panel, "Table", {\n        defaultSeparatorPadding: 10\n    },\n    //Row 0\n    $(go.RowColumnDefinition, {\n        row: 0,\n        background: "dodgerblue"\n    }),\n    $(go.Panel, "TableRow", {\n            row: 0\n        },\n        $(go.Shape, "Triangle", {\n            column: 0,\n            desiredSize: new go.Size(10, 10),\n            fill: "lime",\n            alignment: go.Spot.Left\n        }),\n        $(go.TextBlock, "Title", {\n            column: 1,\n            columnSpan: 2\n        }),\n        $(go.Shape, "Rectangle", {\n            column: 3,\n            desiredSize: new go.Size(10, 10),\n            fill: "cyan",\n            alignment: go.Spot.Right\n        }),\n    ),\n\n    //Row 1\n    $(go.RowColumnDefinition, {\n        row: 1,\n        separatorStroke: "black"\n    }),\n    $(go.Panel, "TableRow", {\n            row: 1\n        },\n        $(go.TextBlock, "(1,0)", {\n            column: 0\n        }),\n        $(go.TextBlock, "(1,1)", {\n            column: 1\n        }),\n        $(go.TextBlock, "(1,2)", {\n            column: 2\n        }),\n        $(go.TextBlock, "(1,3)", {\n            column: 3\n        }),\n    )\n)',options:p}),c.a.createElement("div",{id:"myDiagramDiv6",className:"diagram"}),c.a.createElement("p",null,c.a.createElement("br",null)),c.a.createElement("p",null,c.a.createElement("br",null)),c.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),c.a.createElement("p",null,c.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/13tablePanel.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/13tablePanel.html")))),c.a.createElement(m.a,null))}}]),n}(i.Component)}}]);
//# sourceMappingURL=39.d61d211f.chunk.js.map