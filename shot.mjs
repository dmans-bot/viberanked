import { chromium } from 'playwright';
const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
for (const [u,f] of [['/','home.png'],['/category/ai-coding-agents/','category-ai-coding-agents.png']]){await p.goto('http://localhost:4321'+u);await p.screenshot({path:'screenshots/'+f,fullPage:true});}
await b.close();
