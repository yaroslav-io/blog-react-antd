(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[37],{39:function(e,a,t){"use strict";var n=t(12),l=t(13),r=t(17),i=t(14),o=t(15),s=t(0),m=t.n(s),c=t(5),d=t(8),u=(t(40),function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).bindHandleScroll=function(e){var a=!!e.srcElement&&e.srcElement.documentElement.scrollTop||window.pageYOffset||(e.srcElement?e.srcElement.body.scrollTop:0);l.setState({scrollTop:a})},l.scrollToAnchor=function(e){if(e){var a=document.getElementById(e);a&&a.scrollIntoView({block:"start",behavior:"smooth"})}},l.state={articleTree:[],scrollTop:null},l.getArticleTree=l.getArticleTree.bind(Object(r.a)(l)),l}return Object(l.a)(t,[{key:"getArticleTree",value:function(){for(var e=document.getElementsByClassName("article-content")[0].children,a=[],t=0,n=e.length;t<n-1;t++){var l=e[t].nodeName;"H2"!==l&&"H3"!==l||(e[t].id=e[t].innerText,a.push({name:e[t].innerText,tag:e[t].nodeName}))}this.setState({articleTree:a})}},{key:"setTitle",value:function(){for(var e=this.props.location.pathname.split("/").filter((function(e){return e})),a=0,t=d.a.length;a<t;a++)e[0]===d.a[a].name&&(document.getElementsByTagName("h1")[0].innerHTML=d.a[a].section.length>0?d.a[a].section[e[e.length-1]]:d.a[a].title)}},{key:"componentDidMount",value:function(){this.getArticleTree(),this.setTitle();var e=document.getElementById("header"),a=window.scrollY,t=document.getElementsByClassName("directory-list")[0],n=t.offsetTop;window.addEventListener("scroll",this.bindHandleScroll),window.onscroll=function(){for(var l=document.getElementsByClassName("page-footer")[0],r=0;l;)r+=l.offsetTop,l=l.offsetParent;var i=document.body.scrollTop||document.documentElement.scrollTop;if((i+=n+t.offsetHeight)>r+e.offsetHeight)t.style="position:fixed;top:".concat(n-i+r,"px;transition:none");else{var o=window.scrollY;o>e.offsetHeight&&(a<o&&(e.className="ant-layout-header header header-affixed",t.className="directory-list directory-affixed",a=o),a>o&&(e.className="ant-layout-header header header-visible",t.className="directory-list",a=o)),t.style=""}}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.bindHandleScroll)}},{key:"render",value:function(){var e=this,a=this.state,t=a.articleTree,n=a.scrollTop,l=t.length;if(document.getElementById("tree-num-0")&&l>0){for(var r=[],i=0;i<l;i++){var o=document.getElementById(t[i].name);r.push(o.offsetTop)}for(var s=r.findIndex((function(e){return e>n}))-1,c=0;c<l;c++)document.getElementById("tree-num-".concat(c)).className=c===s?"tree-num directory-item-active":"tree-num";-2===s&&(document.getElementById("tree-num-".concat(l-1)).className="tree-num directory-item-active")}return m.a.createElement("div",{className:"directory"},m.a.createElement("ul",{className:"directory-list"},t.map((function(a,t){return m.a.createElement("li",{key:t,id:"tree-num-".concat(t),className:"tree-num",title:a.name,style:{paddingLeft:"H2"===a.tag?10:22},onClick:function(){e.scrollToAnchor("".concat(a.name))}},a.name)}))))}}]),t}(s.Component));a.a=Object(c.f)(u)},40:function(e,a,t){},67:function(e,a,t){var n={"./apl/apl.js":[68,120],"./asciiarmor/asciiarmor.js":[69,121],"./asn.1/asn.1.js":[70,122],"./asterisk/asterisk.js":[71,123],"./brainfuck/brainfuck.js":[72,124],"./clike/clike.js":[55,9],"./clojure/clojure.js":[73,125],"./cmake/cmake.js":[74,126],"./cobol/cobol.js":[75,127],"./coffeescript/coffeescript.js":[56,128],"./commonlisp/commonlisp.js":[76,129],"./crystal/crystal.js":[77,130],"./css/css.js":[48,3],"./cypher/cypher.js":[78,131],"./d/d.js":[79,132],"./dart/dart.js":[80,9,133],"./diff/diff.js":[81,134],"./django/django.js":[82,2,3,92],"./dockerfile/dockerfile.js":[83,106],"./dtd/dtd.js":[84,135],"./dylan/dylan.js":[85,136],"./ebnf/ebnf.js":[86,137],"./ecl/ecl.js":[87,138],"./eiffel/eiffel.js":[88,139],"./elm/elm.js":[89,140],"./erlang/erlang.js":[90,141],"./factor/factor.js":[91,107],"./fcl/fcl.js":[92,142],"./forth/forth.js":[93,143],"./fortran/fortran.js":[94,144],"./gas/gas.js":[95,145],"./gfm/gfm.js":[96,76,105],"./gherkin/gherkin.js":[97,146],"./go/go.js":[98,147],"./groovy/groovy.js":[99,148],"./haml/haml.js":[100,2,3,95],"./handlebars/handlebars.js":[57,101],"./haskell-literate/haskell-literate.js":[101,110],"./haskell/haskell.js":[58,149],"./haxe/haxe.js":[102,150],"./htmlembedded/htmlembedded.js":[103,2,3,91],"./htmlmixed/htmlmixed.js":[47,2,3,111],"./http/http.js":[104,151],"./idl/idl.js":[105,152],"./javascript/javascript.js":[49,2],"./jinja2/jinja2.js":[106,153],"./jsx/jsx.js":[107,2,112],"./julia/julia.js":[108,154],"./livescript/livescript.js":[109,155],"./lua/lua.js":[110,156],"./markdown/markdown.js":[63,76],"./mathematica/mathematica.js":[111,157],"./mbox/mbox.js":[112,158],"./meta.js":[53],"./mirc/mirc.js":[113,159],"./mllike/mllike.js":[114,160],"./modelica/modelica.js":[115,161],"./mscgen/mscgen.js":[116,162],"./mumps/mumps.js":[117,163],"./nginx/nginx.js":[118,164],"./nsis/nsis.js":[119,108],"./ntriples/ntriples.js":[120,165],"./octave/octave.js":[121,166],"./oz/oz.js":[122,167],"./pascal/pascal.js":[123,168],"./pegjs/pegjs.js":[124,2,169],"./perl/perl.js":[125,170],"./php/php.js":[126,2,3,9,102],"./pig/pig.js":[127,171],"./powershell/powershell.js":[128,172],"./properties/properties.js":[129,173],"./protobuf/protobuf.js":[130,174],"./pug/pug.js":[64,2,3,75],"./puppet/puppet.js":[131,175],"./python/python.js":[59,176],"./q/q.js":[132,177],"./r/r.js":[133,178],"./rpm/rpm.js":[134,179],"./rst/rst.js":[135,94],"./ruby/ruby.js":[51,180],"./rust/rust.js":[136,109],"./sas/sas.js":[137,181],"./sass/sass.js":[61,3,182],"./scheme/scheme.js":[138,183],"./shell/shell.js":[139,184],"./sieve/sieve.js":[140,185],"./slim/slim.js":[141,2,3,96],"./smalltalk/smalltalk.js":[142,186],"./smarty/smarty.js":[143,187],"./solr/solr.js":[144,188],"./soy/soy.js":[145,2,3,103],"./sparql/sparql.js":[146,189],"./spreadsheet/spreadsheet.js":[147,190],"./sql/sql.js":[148,191],"./stex/stex.js":[60,192],"./stylus/stylus.js":[65,77],"./swift/swift.js":[149,193],"./tcl/tcl.js":[150,194],"./textile/textile.js":[151,195],"./tiddlywiki/tiddlywiki.js":[152,196],"./tiki/tiki.js":[153,197],"./toml/toml.js":[154,198],"./tornado/tornado.js":[155,2,3,93],"./troff/troff.js":[156,199],"./ttcn-cfg/ttcn-cfg.js":[158,200],"./ttcn/ttcn.js":[157,201],"./turtle/turtle.js":[159,202],"./twig/twig.js":[160,104],"./vb/vb.js":[161,203],"./vbscript/vbscript.js":[162,204],"./velocity/velocity.js":[163,205],"./verilog/verilog.js":[164,206],"./vhdl/vhdl.js":[165,207],"./vue/vue.js":[166,2,3,77,75,88],"./webidl/webidl.js":[167,208],"./xml/xml.js":[46,209],"./xquery/xquery.js":[168,210],"./yacas/yacas.js":[169,211],"./yaml-frontmatter/yaml-frontmatter.js":[170,113],"./yaml/yaml.js":[62,212],"./z80/z80.js":[171,213]};function l(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],l=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t.t(l,7)}))}l.keys=function(){return Object.keys(n)},l.id=67,e.exports=l},905:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var n=t(12),l=t(13),r=t(14),i=t(15),o=t(0),s=t.n(o),m=t(172),c=(t(54),t(39)),d=t(188),u=t.n(d),y=u.a.GraphObject.make,p={theme:"monokai",mode:"JSX",readOnly:!0},g=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.diagramRender1(),this.diagramRender2(),this.diagramRender3(),this.diagramRender4(),this.diagramRender5(),this.diagramRender6()}},{key:"diagramRender1",value:function(){var e=y(u.a.Diagram,"myDiagramDiv1");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender2",value:function(){var e=y(u.a.Diagram,"myDiagramDiv2");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout,{direction:90}),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender3",value:function(){var e=y(u.a.Diagram,"myDiagramDiv3");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout,{direction:90,layerSpacing:50,columnSpacing:100}),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender4",value:function(){var e=y(u.a.Diagram,"myDiagramDiv4");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:u.a.LayeredDigraphLayout.LayerLongestPathSink}),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender5",value:function(){var e=y(u.a.Diagram,"myDiagramDiv5");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:u.a.LayeredDigraphLayout.LayerLongestPathSource}),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"diagramRender6",value:function(){var e=y(u.a.Diagram,"myDiagramDiv6");e.nodeTemplate=y(u.a.Node,"Auto",y(u.a.Shape,"RoundedRectangle",{fill:"lightblue"}),y(u.a.TextBlock,{margin:8},new u.a.Binding("text","key"))),e.layout=y(u.a.LayeredDigraphLayout,{direction:90,layerSpacing:25,columnSpacing:25,layeringOption:u.a.LayeredDigraphLayout.LayerOptimalLinkLength}),e.model=y(u.a.GraphLinksModel,{nodeDataArray:[{key:"Alpha"},{key:"Beta"},{key:"Gamma"},{key:"Delta"},{key:"Epsilon"},{key:"Zeta"}],linkDataArray:[{from:"Alpha",to:"Beta"},{from:"Alpha",to:"Gamma"},{from:"Beta",to:"Delta"},{from:"Delta",to:"Epsilon"},{from:"Zeta",to:"Epsilon"}]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"page-content"},s.a.createElement("div",{className:"article"},s.a.createElement("div",{className:"article-title"},s.a.createElement("h1",null,"GoJS \u5e03\u5c40\u2014\u2014\u7b2c\u4e94\u8282 \u5c42\u6b21\u5e03\u5c40(LayeredDigraphLayout)")),s.a.createElement("div",{className:"article-content"},s.a.createElement("h2",null,"\u793a\u4f8b"),s.a.createElement(m.a,{value:'let myDiagram = $(go.Diagram, "myDiagramDiv");\nmyDiagram.nodeTemplate =\n    $(go.Node, "Auto",\n        $(go.Shape, "RoundedRectangle", {\n            fill: "lightblue"\n        }),\n        $(go.TextBlock, {\n                margin: 8\n            },\n            new go.Binding("text", "key"))\n    );\nmyDiagram.layout = $(go.LayeredDigraphLayout);\nmyDiagram.model =$(go.GraphLinksModel, {\n    nodeDataArray: [{\n        key: "Alpha",\n    }, {\n        key: "Beta",\n    }, {\n        key: "Gamma"\n    }, {\n        key: "Delta"\n    }, {\n        key: "Epsilon"\n    }, {\n        key: "Zeta"\n    }],\n    linkDataArray: [{\n        from: "Alpha",\n        to: "Beta"\n    },\n    {\n        from: "Alpha",\n        to: "Gamma"\n    },\n    {\n        from: "Beta",\n        to: "Delta"\n    },\n    {\n        from: "Delta",\n        to: "Epsilon"\n    },\n    {\n        from: "Zeta",\n        to: "Epsilon"\n    }]\n})',options:p}),s.a.createElement("div",{id:"myDiagramDiv1",className:"diagram",style:{maxWidth:600}}),s.a.createElement("h2",null,"direction"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a\u5c55\u5f00\u7684\u65b9\u5411"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c:0"),s.a.createElement("li",null,"\u5141\u8bb8\u503c:0 | 90 | 180 | 270")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90\n});",options:p}),s.a.createElement("div",{id:"myDiagramDiv2",className:"diagram",style:{maxWidth:600,height:350}}),s.a.createElement("h2",null,"layerSpacing"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a\u5c42\u95f4\u8ddd"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),s.a.createElement("h2",null,"columnSpacing"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a\u5217\u95f4\u8ddd"),s.a.createElement("li",null,"\u9ed8\u8ba4\u503c:25")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout,{\n    direction:90,\n    layerSpacing: 50,\n    columnSpacing: 100\n});",options:p}),s.a.createElement("div",{id:"myDiagramDiv3",className:"diagram",style:{maxWidth:600,height:400}}),s.a.createElement("h2",null,"layingOption"),s.a.createElement("ul",null,s.a.createElement("li",null,"\u51b3\u5b9a\u5e03\u5c40\u4e2d\u7684 Node \u5982\u4f55\u5206\u914d\u5230\u4e0d\u540c\u7684 layer \u4e2d"),s.a.createElement("li",null,"\u53ef\u80fd\u7684\u503c:")),s.a.createElement("ul",{"data-lake-indent":"1"},s.a.createElement("li",null,"LayerLongestPathSink"),s.a.createElement("li",null,"LayerLongestPathSource"),s.a.createElement("li",null,"LayerOptimalLinkLength")),s.a.createElement("h3",null,"LayerLongestPathSink"),s.a.createElement("p",null,"sink = \u6ca1\u6709 Link \u79bb\u5f00\u7684 Node"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption:go.LayeredDigraphLayout.LayerLongestPathSink\n});",options:p}),s.a.createElement("div",{id:"myDiagramDiv4",className:"diagram",style:{maxWidth:600,height:350}}),s.a.createElement("p",null,"\u5176\u4e2d\uff0cEpsilon \u548c Gamma \u4e3a sink"),s.a.createElement("h3",null,"LaverLongestPathSource"),s.a.createElement("p",null,"source = \u6ca1\u6709 Link \u8fdb\u5165\u7684 Node"),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerLongestPathSource\n});",options:p}),s.a.createElement("div",{id:"myDiagramDiv5",className:"diagram",style:{maxWidth:600,height:350}}),s.a.createElement("p",null,"\u5176\u4e2d\uff0cAlpha \u548c Zeta \u4e3a source"),s.a.createElement("h3",null,"LayerOptimalLinkLength"),s.a.createElement("ul",null,s.a.createElement("li",null,"Node \u4ee5\u6700\u5c0f\u5316\u603b\u52a0\u6743 Link \u957f\u5ea6\u5206\u5c42"),s.a.createElement("li",null,"linkLength = layer(fromNode) - layer(toNode)")),s.a.createElement(m.a,{value:"myDiagram.layout = $(go.LayeredDigraphLayout, {\n    direction: 90,\n    layerSpacing: 25,\n    columnSpacing: 25,\n    layeringOption: go.LayeredDigraphLayout.LayerOptimalLinkLength\n});",options:p}),s.a.createElement("div",{id:"myDiagramDiv6",className:"diagram",style:{maxWidth:600,height:350}}),s.a.createElement("p",null,"\u5176\u4e2d,\u7531\u4e0b\u5411\u4e0a,Episilon \u4e3a\u7b2c\u4e00\u5c42, Delta \u548c Zeta \u4e3a\u7b2c\u4e8c\u5c42, Beta \u548c Gamma \u4e3a\u7b2c\u4e09\u5c42, Alpha \u4e3a\u7b2c\u56db\u5c42"),s.a.createElement("p",null,"\u5171\u6709 5 \u6761 Link,\u6bcf\u6761 Link \u7684 linkLength \u5747\u4e3a 1,\u5171\u8ba1 5,\u662f\u6700\u5c0f\u65b9\u6848"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",null,"\u76f8\u5173\u4ee3\u7801\uff1a"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html",target:"_blank",rel:"noopener noreferrer"},"https://github.com/LiuZheAb/GoJS_Demo/blob/master/11layeredDigraphLayout.html")))),s.a.createElement(c.a,null))}}]),t}(o.Component)}}]);
//# sourceMappingURL=37.77b55b58.chunk.js.map