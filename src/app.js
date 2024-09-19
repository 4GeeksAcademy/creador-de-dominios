/* eslint-disable */
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "puedes", "carape"];
let extensions = [`es`,`uy`, `ar`, `pe`, `ch`];
let dominios = [];

pronoun.forEach ((start)=>{
    adj.forEach ((mid)=>{
        noun.forEach ((last)=>{ 
            extensions.forEach ((ext)=>{  
                let domain = `${start}${mid}${last}.${ext}`;
                
                    if (last.endsWith (ext)) {
                        let domainHack = `${start}${mid}${last.slice(0, -1*ext.length)}.${ext}`;
                    
                            dominios.push (domainHack);
                             } else {
                                dominios.push (domain);
                                    }
            });
        });  
    });
});

console.log(dominios);
