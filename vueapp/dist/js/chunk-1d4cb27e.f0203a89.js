(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d4cb27e"],{ad75:function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("v-btn",[e._v("\n    Text\n  ")]),t("ApolloQuery",{attrs:{query:i("d659")},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.result,a=i.data,o=i.loading;return[o?t("div",[e._v("Loading...")]):t("ul",e._l(a.patientsList.items,function(n){return t("li",{key:n.firstName,staticClass:"user",on:{click:function(n){e.newData(a)}}},[e._v("\n          "+e._s(n.firstName)+": "+e._s(n.__typename)+"\n        ")])}),0)]}}])})],1)},a=[],o=i("2b0e"),r=o["default"].extend({data:function(){return{}},methods:{newData:function(e){console.log(e)}}}),s=r,c=i("2877"),d=Object(c["a"])(s,t,a,!1,null,null,null);n["default"]=d.exports},d659:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"patientFirstNames"},variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"patientsList"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"items"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstName"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:86}};i.loc.source={body:"query patientFirstNames {\r\n  patientsList{\r\n    items{\r\n      firstName\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){t(e,n)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){t(e,n)}),e.definitions&&e.definitions.forEach(function(e){t(e,n)})}var a={};function o(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}function r(e,n){var i={kind:e.kind,definitions:[o(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,r=new Set,s=new Set;t.forEach(function(e){s.add(e)});while(s.size>0){var c=s;s=new Set,c.forEach(function(e){if(!r.has(e)){r.add(e);var n=a[e]||new Set;n.forEach(function(e){s.add(e)})}})}return r.forEach(function(n){var t=o(e,n);t&&i.definitions.push(t)}),i}(function(){i.definitions.forEach(function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})})(),e.exports=i,e.exports["patientFirstNames"]=r(i,"patientFirstNames")}}]);
//# sourceMappingURL=chunk-1d4cb27e.f0203a89.js.map