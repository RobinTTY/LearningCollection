"use strict";(self.webpackChunklearning_knowledge_base=self.webpackChunklearning_knowledge_base||[]).push([[5507],{2864:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=s(4848),a=s(8453);const i={id:"subqueries",title:"Subqueries",sidebar_position:1},r=void 0,o={id:"databases/sql/advanced-concepts/subqueries",title:"Subqueries",description:"Subqueries (also known as inner queries or nested queries) are a tool for performing operations in multiple steps. For example, if you wanted to take the sums of several columns, then average all of those values, you'd need to do each aggregation in a distinct step.",source:"@site/docs/databases/sql/advanced-concepts/subqueries.md",sourceDirName:"databases/sql/advanced-concepts",slug:"/databases/sql/advanced-concepts/subqueries",permalink:"/LearningCollection/databases/sql/advanced-concepts/subqueries",draft:!1,unlisted:!1,editUrl:"https://github.com/RobinTTY/LearningCollection/tree/master/website/docs/databases/sql/advanced-concepts/subqueries.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"subqueries",title:"Subqueries",sidebar_position:1},sidebar:"docs",previous:{title:"Performance",permalink:"/LearningCollection/databases/sql/core-concepts/database-design/performance"},next:{title:"Object-Relational Mapping (ORM)",permalink:"/LearningCollection/databases/sql/advanced-concepts/object-relational-mapping"}},l={},u=[{value:"Another example",id:"another-example",level:3},{value:"Using subqueries to aggregate in multiple stages",id:"using-subqueries-to-aggregate-in-multiple-stages",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Subqueries (also known as inner queries or nested queries) are a tool for performing operations in multiple steps. For example, if you wanted to take the sums of several columns, then average all of those values, you'd need to do each aggregation in a distinct step."}),"\n",(0,t.jsxs)(n.p,{children:["Subqueries can be used in several places within a query, but it's easiest to start with the ",(0,t.jsx)(n.code,{children:"FROM"})," statement. Here's an example of a basic subquery:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT sub.*\n  FROM (\n        SELECT *\n          FROM tutorial.sf_crime_incidents_2014_01\n         WHERE day_of_week = 'Friday'\n       ) sub\n WHERE sub.resolution = 'NONE'\n"})}),"\n",(0,t.jsx)(n.p,{children:'Let\'s break down what happens when you run the above query. First, the database runs the "inner query" (the part between the parentheses). If you were to run this on its own, it would produce a result set like any other query. Once the inner query runs, the outer query will run using the results from the inner query as its underlying table:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT sub.*\n  FROM (\n       <<results from inner query go here>>\n       ) sub\n WHERE sub.resolution = 'NONE'\n"})}),"\n",(0,t.jsx)(n.p,{children:'Subqueries are required to have names, which are added after parentheses the same way you would add an alias to a normal table. In this case, we\'ve used the name "sub."'}),"\n",(0,t.jsxs)(n.p,{children:["The above example doesn't really require a subquery. We solve a problem that could also have been solved by adding multiple conditions to the ",(0,t.jsx)(n.code,{children:"WHERE"})," clause."]}),"\n",(0,t.jsx)(n.h3,{id:"another-example",children:"Another example"}),"\n",(0,t.jsx)(n.p,{children:"Let's look at another example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id, song_name, artist_id\nFROM songs\nWHERE artist_id IN (\n    SELECT id\n    FROM artists\n    WHERE artist_name LIKE 'Rick%'\n);\n"})}),"\n",(0,t.jsx)(n.p,{children:'In this hypothetical database, the query above selects all of the song_ids, song_names, and artist_ids from the songs table that are written by artists whose name starts with "Rick". Notice that the subquery allows us to use information from a different table - in this case the artists table.'}),"\n",(0,t.jsx)(n.h3,{id:"using-subqueries-to-aggregate-in-multiple-stages",children:"Using subqueries to aggregate in multiple stages"}),"\n",(0,t.jsx)(n.p,{children:"What if you wanted to figure out how many incidents get reported on each day of the week? Better yet, what if you wanted to know how many incidents happen, on average, on a Friday in December? In January? There are two steps to this process: counting the number of incidents each day (inner query), then determining the monthly average (outer query):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT LEFT(sub.date, 2) AS cleaned_month,\n       sub.day_of_week,\n       AVG(sub.incidents) AS average_incidents\n  FROM (\n        SELECT day_of_week,\n               date,\n               COUNT(incidnt_num) AS incidents\n          FROM tutorial.sf_crime_incidents_2014_01\n         GROUP BY 1,2\n       ) sub\n GROUP BY 1,2\n ORDER BY 1,2\n"})})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);