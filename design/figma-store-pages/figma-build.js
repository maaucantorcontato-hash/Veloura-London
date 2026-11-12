
await figma.loadFontAsync({family:'Cormorant Garamond',style:'Light'});
await figma.loadFontAsync({family:'Cormorant Garamond',style:'Regular'});
await figma.loadFontAsync({family:'DM Sans',style:'Regular'});
await figma.loadFontAsync({family:'DM Sans',style:'Medium'});
const page=figma.currentPage; page.name='VELOURA · Desktop & Mobile';
if(page.children.length) throw new Error('Canvas must be blank for initial assembly');
const P=[["Introduction","Welcome to VELOURA.\n\nYour privacy matters to us. This Privacy Policy explains how we collect, use, store and protect personal information when you visit our website, contact us or make a purchase.\n\nVELOURA is an online jewellery store operated by MAURO LOPES DA SILVA JUNIOR, an individual based in Brazil.\n\nYou can contact us regarding privacy matters at UAAMLP@proton.me."],["Information We Collect","Depending on how you use our website, we may collect:\n\n• Your name and email address.\n• Delivery and billing information.\n• Order details and purchase history.\n• Information you provide through our contact form.\n• Technical information, such as your device, browser and website usage.\n• Cookie preferences and related information.\n\nPayment information is handled through the payment services configured for our store. Relevant payment providers may process payment details in accordance with their own privacy policies."],["How We Use Your Information","We use personal information to:\n\n• Process and fulfil customer orders.\n• Arrange shipping and delivery.\n• Respond to questions and customer service requests.\n• Communicate important information about purchases.\n• Maintain website security and prevent fraud.\n• Meet applicable legal and accounting obligations.\n• Improve our website and services, where permitted.\n\nWe only send optional marketing communications where we have an appropriate legal basis, including consent where required."],["Legal Bases for Processing","Where UK data protection law applies, we rely on an appropriate legal basis for each processing activity. These may include:\n\n• Contract: To process purchases and provide requested services.\n• Legal obligation: To comply with applicable legal requirements.\n• Legitimate interests: To operate and protect our business, where these interests are not overridden by individual rights.\n• Consent: For activities requiring permission, such as certain marketing communications and non-essential cookies."],["Sharing Information","To operate our online store, we may share necessary information with trusted service providers, including:\n\n• Wix, which provides our website and ecommerce infrastructure.\n• Payment providers used to process purchases.\n• External product suppliers and fulfilment partners.\n• Shipping and delivery companies.\n• Service providers supporting customer communications.\n\nFor dropshipping orders, relevant customer delivery information may be shared with our supplier to enable direct shipment.\n\nWe limit information sharing to what is necessary for the relevant purpose."],["International Data Transfers","Some suppliers and service providers may operate outside the United Kingdom.\n\nWhere personal information is transferred internationally, applicable data protection requirements must be considered, including any required safeguards.\n\n[COMPLETE THIS SECTION WITH THE TRANSFER ARRANGEMENTS APPLICABLE TO THE SERVICES AND SUPPLIERS ACTUALLY USED.]"],["Cookies","Our website may use essential cookies required for core functionality, including shopping and security.\n\nAdditional analytics or marketing cookies may be used where configured and permitted. Where required, visitors will be offered appropriate cookie choices.\n\nYou can also manage cookies through your browser settings."],["How Long We Keep Information","We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including order fulfilment, customer support, legal obligations and resolving disputes.\n\nRetention periods depend on the type of information and applicable requirements."],["Your Privacy Rights","Depending on the applicable data protection laws, you may have rights to:\n\n• Access your personal information.\n• Request correction of inaccurate information.\n• Request deletion in certain circumstances.\n• Restrict or object to certain processing activities.\n• Request data portability where applicable.\n• Withdraw consent where processing is based on consent.\n\nYou can contact us to exercise your rights.\n\nWhere UK data protection law applies, you may also raise a concern with the Information Commissioner's Office (ICO) at www.ico.org.uk."],["Security","We take reasonable steps to protect personal information and work with service providers responsible for appropriate security measures.\n\nHowever, no online system can guarantee absolute security."],["Updates to This Policy","We may update this Privacy Policy when our services, business practices or legal obligations change.\n\nThe latest version will be published on this page with an updated date."],["Contact","For privacy-related questions or requests, please contact:\n\nVELOURA\nLegal operator: MAURO LOPES DA SILVA JUNIOR\nEmail: UAAMLP@proton.me\nBusiness contact address: Rua Santo Menegazzo, 187, Santa Rita 2, Londrina, Paraná, 86072-280, Brazil."]];
const colors={paper:'#FCFBF9',cream:'#F5F0E9',ink:'#292720',body:'#514C47',muted:'#716B62',gold:'#A58A68',line:'#E7DED4',dark:'#25231F'};
const paint={},styles={};
for(const [k,v] of Object.entries(colors)){const st=figma.createPaintStyle();st.name='VELOURA/'+k;st.paints=[figma.util.solidPaint(v)];paint[k]=st.id;}
function fill(n,c){n.fillStyleId=paint[c];}
function box(parent,name,w,dir='VERTICAL',gap=16,pad=0,bg=null){
 const n=figma.createAutoLayout(dir);n.name=name;n.resize(w,100);n.layoutSizingHorizontal='FIXED';n.layoutSizingVertical='HUG';n.itemSpacing=gap;n.paddingLeft=pad;n.paddingRight=pad;n.paddingTop=pad;n.paddingBottom=pad;n.fills=[];n.clipsContent=false;
 if(bg)fill(n,bg);if(parent)parent.appendChild(n);return n;
}
function txt(parent,str,w,size=16,font='DM Sans',color='body',style='Regular',tracking=0){
 const n=figma.createText();n.name=str.slice(0,70);n.fontName={family:font,style};n.fontSize=size;n.lineHeight={unit:'PERCENT',value:font==='DM Sans'?178:115};n.letterSpacing={unit:'PIXELS',value:tracking};n.characters=str;n.textAutoResize='HEIGHT';n.resize(w,20);fill(n,color);parent.appendChild(n);return n;
}
function eyebrow(p,str,w){return txt(p,str.toUpperCase(),w,11,'DM Sans','muted','Medium',2);}
function rule(p,w){const r=figma.createRectangle();r.name='Hairline';r.resize(w,1);fill(r,'line');p.appendChild(r);return r;}
function cmp(name,w,dir='VERTICAL',gap=12,pad=0,bg='paper'){const c=figma.createComponent();c.name=name;c.layoutMode=dir;c.resize(w,100);c.primaryAxisSizingMode='AUTO';c.counterAxisSizingMode='FIXED';c.itemSpacing=gap;c.paddingLeft=pad;c.paddingRight=pad;c.paddingTop=pad;c.paddingBottom=pad;fill(c,bg);c.x=-2200;c.y=components.length*650;components.push(c);return c;}
const components=[];
const buttons={};
for(const kind of ['Primary','Outline','Disabled']){
 const c=cmp('Button/'+kind,300,'HORIZONTAL',0,14,kind==='Primary'?'ink':'paper');c.counterAxisAlignItems='CENTER';c.primaryAxisAlignItems='CENTER';
 const t=txt(c,'CONTINUE SHOPPING',272,11,'DM Sans',kind==='Primary'?'paper':'ink','Medium',1.5);t.textAlignHorizontal='CENTER';
 c.strokes=[figma.util.solidPaint(colors[kind==='Disabled'?'line':'ink'])];c.strokeWeight=1;c.opacity=kind==='Disabled'?.55:1;
 const key=c.addComponentProperty('Label','TEXT','CONTINUE SHOPPING');t.componentPropertyReferences={characters:key};buttons[kind]={c,key};
}
function button(p,label,w,kind='Primary'){const b=buttons[kind].c.createInstance();p.appendChild(b);b.resize(w,50);b.setProperties({[buttons[kind].key]:label.toUpperCase()});return b;}
function icon(parent,kind){
 const svg={search:'<circle cx="10.8" cy="10.8" r="6.5"/><path d="m16 16 4.5 4.5"/>',account:'<circle cx="12" cy="7" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',bag:'<path d="M5 8h14l1 13H4L5 8Z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>'}[kind];
 const slot=box(parent,kind,40,'HORIZONTAL',0,9);slot.resize(40,40);slot.layoutSizingVertical='FIXED';
 const n=figma.createNodeFromSvg('<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#292720" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">'+svg+'</svg>');n.name='Icon/'+kind;slot.appendChild(n);return slot;
}
const headers={},footers={};
for(const mobile of [false,true]){
 const w=mobile?390:1440,pad=mobile?16:72;
 const h=cmp('Header/'+(mobile?'Mobile':'Desktop'),w,'VERTICAL',0,0);
 const row=box(h,'Main navigation',w,'HORIZONTAL',0,pad);row.counterAxisAlignItems='CENTER';
 if(mobile){icon(row,'menu');const brand=txt(row,'VELOURA',178,28,'Cormorant Garamond','ink','Light',4);brand.textAlignHorizontal='CENTER';const nav=box(row,'Utility navigation',120,'HORIZONTAL',0);for(const k of ['search','account','bag'])icon(nav,k);}
 else{const links=box(row,'Main links',420,'HORIZONTAL',28);for(const s of ['Shop','Contact','Our Story'])txt(links,s,75,12);const brand=txt(row,'VELOURA',456,40,'Cormorant Garamond','ink','Light',8);brand.textAlignHorizontal='CENTER';const right=box(row,'Utilities',420,'HORIZONTAL',12);right.primaryAxisAlignItems='MAX';for(const k of ['search','account','bag'])icon(right,k);}
 rule(h,w);
 if(!mobile){const cat=box(h,'Categories',w,'HORIZONTAL',40,14);cat.primaryAxisAlignItems='CENTER';for(const s of ['Necklaces','Earrings','Bracelets','Rings','New In','Gifts'])eyebrow(cat,s,105);rule(h,w);}
 headers[mobile?'mobile':'desktop']=h;
 const f=cmp('Footer/'+(mobile?'Mobile':'Desktop'),w,'VERTICAL',32,mobile?24:72,'dark');
 const fw=w-(mobile?48:144);
 txt(f,'Beauty, with intention.',fw,mobile?36:50,'Cormorant Garamond','paper','Light');
 const nav=box(f,'Footer links',fw,mobile?'VERTICAL':'HORIZONTAL',mobile?24:72);
 for(const [title,list] of [['EXPLORE','All jewellery\nNew In\nGifts\nOur Story'],['HERE TO HELP','Contact\nPrivacy Policy\nMy Orders\nAccount']]){const col=box(nav,title,mobile?fw:340);txt(col,title,mobile?fw:340,11,'DM Sans','paper','Medium',2);txt(col,list,mobile?fw:340,14,'DM Sans','paper');}
 txt(f,'VELOURA',fw,mobile?62:152,'Cormorant Garamond','paper','Light',mobile?4:12);
 txt(f,'© VELOURA 2026  ·  UK / GBP £',fw,11,'DM Sans','paper');footers[mobile?'mobile':'desktop']=f;
}
const placeholder=cmp('Product / Image pending',300,'VERTICAL',18,24,'cream');placeholder.counterAxisAlignItems='CENTER';
txt(placeholder,'V',252,110,'Cormorant Garamond','gold','Light').textAlignHorizontal='CENTER';
txt(placeholder,'Image pending verification',252,12,'DM Sans','muted').textAlignHorizontal='CENTER';
function image(p,w){const i=placeholder.createInstance();p.appendChild(i);i.resize(w,w*.9);return i;}
function header(root,m){const i=headers[m?'mobile':'desktop'].createInstance();root.appendChild(i);}
function footer(root,m){const i=footers[m?'mobile':'desktop'].createInstance();root.appendChild(i);}
function title(p,label,heading,desc,w,m){eyebrow(p,label,w);txt(p,heading,w,m?46:78,'Cormorant Garamond','ink','Light');if(desc)txt(p,desc,w,16,'DM Sans','muted');}
const screens=[];
let top=180;
for(const [idx,name] of ['Privacy Policy','Cart','Thank You','Side Cart','Success Popup','Category','Product','Members Area','My Orders'].entries()){
 let rowH=0;
 for(const mobile of [false,true]){
 const W=mobile?390:1440,pad=mobile?24:96,inner=W-pad*2;
 const root=box(null,String(idx+1).padStart(2,'0')+' · '+name+' / '+(mobile?'Mobile':'Desktop'),W,'VERTICAL',0,0,'paper');root.x=mobile?1640:100;root.y=top;root.placeholder=true;header(root,mobile);
 if(name==='Privacy Policy'){
 const hero=box(root,'Privacy hero',W,'VERTICAL',20,pad,'cream');
 eyebrow(hero,'Home / Privacy Policy',inner);eyebrow(hero,'Our promise of transparency',inner);
 txt(hero,'Privacy Policy',inner,mobile?52:96,'Cormorant Garamond','ink','Light');
 txt(hero,'Thoughtfully protecting the details that matter.',inner,18,'DM Sans','muted');
 eyebrow(hero,'Last updated: 11/11/2026',inner);
 const main=box(root,'Policy content',W,mobile?'VERTICAL':'HORIZONTAL',mobile?40:80,pad);
 const index=box(main,'On this page',mobile?inner:246,'VERTICAL',14,mobile?20:0,mobile?'cream':null);
 eyebrow(index,'On this page',mobile?inner-40:246);
 P.forEach((s,i)=>txt(index,String(i+1).padStart(2,'0')+'  '+s[0],mobile?inner-40:246,12,'DM Sans','muted'));
 const article=box(main,'All twelve legal sections',mobile?inner:inner-326,'VERTICAL',40);
 P.forEach((s,i)=>{const cw=mobile?inner:inner-326;const sec=box(article,String(i+1).padStart(2,'0')+' '+s[0],cw,'VERTICAL',14);eyebrow(sec,String(i+1).padStart(2,'0'),cw);txt(sec,s[0],cw,mobile?32:42,'Cormorant Garamond','ink');if(i===5)eyebrow(sec,'Pending legal review · Internal draft',cw);txt(sec,s[1],cw,16);rule(sec,cw);});
 }else{
 const main=box(root,name+' content',W,'VERTICAL',28,pad);
 if(name==='Cart'){
 title(main,'Shopping bag','Your bag','',inner,mobile);
 const row=box(main,'Cart content',inner,mobile?'VERTICAL':'HORIZONTAL',48);const list=box(row,'Items',mobile?inner:700,'VERTICAL',24);const item=box(list,'The Sculpt Hoops',mobile?inner:700,mobile?'VERTICAL':'HORIZONTAL',24);image(item,mobile?inner:180);
 const detail=box(item,'Item details',mobile?inner:496,'VERTICAL',16);txt(detail,'The Sculpt Hoops — Gold Tone',mobile?inner:496,28,'Cormorant Garamond','ink');txt(detail,'£18.90',mobile?inner:496,18);txt(detail,'−     1     +       Remove',mobile?inner:496,14);rule(list,mobile?inner:700);
 const sum=box(row,'Order summary',mobile?inner:450,'VERTICAL',20,24,'cream');const sw=mobile?inner-48:402;
 txt(sum,'Summary',sw,36,'Cormorant Garamond','ink');txt(sum,'Subtotal                             £18.90\nDelivery                       Pending confirmation',sw,16);rule(sum,sw);txt(sum,'Total (GBP)                          £18.90',sw,18);button(sum,'Checkout unavailable — preview',sw,'Disabled');button(sum,'Continue browsing',sw,'Outline');
 }else if(name==='Thank You'){
 eyebrow(main,'Sample order — no payment was taken',inner);title(main,'Order confirmation','Thank you for choosing VELOURA','',inner,mobile);
 const row=box(main,'Order details',inner,mobile?'VERTICAL':'HORIZONTAL',40);const sum=box(row,'Order summary',mobile?inner:580,'VERTICAL',16,24,'cream');const sw=mobile?inner-48:532;
 txt(sum,'Order summary',sw,34,'Cormorant Garamond','ink');txt(sum,'SAMPLE-0001\n\n1 × The Sculpt Hoops — Gold Tone\n£18.90\n\nDelivery: confirmed at checkout\nSample total: £18.90',sw,16);
 const steps=box(row,'Next steps',mobile?inner:560,'VERTICAL',20);txt(steps,'Next steps',mobile?inner:560,34,'Cormorant Garamond','ink');txt(steps,'Confirmation\nWix sends the native order confirmation.\n\nPreparation\nTimings to be confirmed.\n\nUpdates\nTracking appears in My Orders when available.',mobile?inner:560,16);
 button(main,'Continue shopping',mobile?inner:300);button(main,'My Orders',mobile?inner:300,'Outline');
 }else if(name==='Side Cart'||name==='Success Popup'){
 eyebrow(main,'Overlay design · Demo only',inner);title(main,'Shopping bag',name==='Side Cart'?'Your bag (1)':'Added to bag','',inner,mobile);
 const panel=box(main,name==='Side Cart'?'Right drawer':'Confirmation dialog',mobile?inner:560,'VERTICAL',24,24,'cream');const pw=mobile?inner-48:512;
 txt(panel,name==='Side Cart'?'YOUR BAG                         ×':'ADDED TO BAG                  ×',pw,12,'DM Sans','ink','Medium',1);
 image(panel,mobile?pw:200);txt(panel,'The Sculpt Hoops — Gold Tone',pw,32,'Cormorant Garamond','ink');txt(panel,'Quantity 1                       £18.90',pw,16);if(name==='Side Cart')txt(panel,'−     1     +             Remove\n\nSubtotal                        £18.90\nDelivery confirmed at checkout.',pw,16);
 button(panel,'View bag',pw);button(panel,'Continue shopping',pw,'Outline');txt(panel,'Design preview — demo items only.',pw,12,'DM Sans','muted');
 }else if(name==='Category'){
 title(main,'The collection','Objects of affection','Considered pieces for everyday wear.',inner,mobile);
 const filter=box(main,'Collection controls',inner,'VERTICAL',16);txt(filter,'All   /   Necklaces   /   Earrings\nBracelets   /   Rings   /   New In   /   Gifts',inner,13);txt(filter,'Sort: Featured',inner,14);rule(filter,inner);
 const cards=box(main,'Product grid',inner,'HORIZONTAL',mobile?16:32);
 for(const [n,price] of [['The Sculpt Hoops — Gold Tone','£18.90'],['Gold Pendant Necklace','Price pending']]){
 const cw=mobile?(inner-16)/2:450;const card=box(cards,'Product card',cw,'VERTICAL',16);image(card,cw);txt(card,n,cw,mobile?24:32,'Cormorant Garamond','ink');txt(card,price,cw,16);button(card,price==='£18.90'?'View piece':'Coming soon',cw,price==='£18.90'?'Outline':'Disabled');
 }
 }else if(name==='Product'){
 eyebrow(main,'Home / Earrings / The Sculpt Hoops',inner);const row=box(main,'Product details',inner,mobile?'VERTICAL':'HORIZONTAL',mobile?32:64);const gw=mobile?inner:620;const gallery=box(row,'Gallery',gw,'VERTICAL',16);image(gallery,gw);
 const dw=mobile?inner:inner-gw-64;const details=box(row,'Details',dw,'VERTICAL',24);title(details,'Earrings','The Sculpt Hoops — Gold Tone','',dw,mobile);txt(details,'£18.90',dw,22);txt(details,'Images, materials and stock pending verification.',dw,14,'DM Sans','muted');txt(details,'−     1     +',dw,16);button(details,'Add to bag — demo',dw);
 for(const s of ['Details','Materials','Care','Delivery & returns']){rule(details,dw);eyebrow(details,s+'                         +',dw);txt(details,'Details to be confirmed.',dw,16);}
 }else if(name==='Members Area'){
 eyebrow(main,'Wix native Members Area · Sample only',inner);title(main,'My account','Welcome back','Your jewellery, your details, your orders.',inner,mobile);const card=box(main,'Member details',inner,'VERTICAL',16,24,'cream');txt(card,'Sample Member\nmember@example.com',inner-48,16);button(main,'My Orders',mobile?inner:360);button(main,'Account settings',mobile?inner:360,'Outline');txt(main,'Wix handles sign-in and account data. This design uses sample information only.',inner,14,'DM Sans','muted');
 }else if(name==='My Orders'){
 eyebrow(main,'Wix native Members Area',inner);title(main,'My account','My Orders','',inner,mobile);
 const card=box(main,'Sample order',inner,'VERTICAL',20,24,'cream');eyebrow(card,'Sample order — not a real purchase',inner-48);txt(card,'SAMPLE-0001',inner-48,34,'Cormorant Garamond','ink');txt(card,'The Sculpt Hoops — Gold Tone\n1 × £18.90\n\nDelivery updates will appear when available.',inner-48,16);button(card,'View details',mobile?inner-48:300,'Outline');
 rule(main,inner);txt(main,'Empty state: No orders yet.',inner,24,'Cormorant Garamond','ink');button(main,'Continue shopping',mobile?inner:300,'Outline');
 }
 }
 footer(root,mobile);root.placeholder=false;rowH=Math.max(rowH,root.height);screens.push({id:root.id,name:root.name,width:root.width,height:root.height});
 }top+=rowH+180;
}
const all=page.findAllWithCriteria({types:['FRAME','TEXT','RECTANGLE','VECTOR','COMPONENT','INSTANCE']});
const counts={};for(const n of all)counts[n.type]=(counts[n.type]||0)+1;
return {createdNodeIds:all.map(n=>n.id),mutatedNodeIds:[page.id],screens,counts,fonts:['Cormorant Garamond Light / Regular','DM Sans Regular / Medium'],imageNodes:[],componentIds:components.map(n=>n.id)};
